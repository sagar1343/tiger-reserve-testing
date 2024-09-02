import { useState, useEffect, useRef } from 'react'

export default function LazyLoaded({
  children,
  className,
  lazyImage = false,
  threshold = 0.1,
  horizontal = false,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref.current)
        }
      },
      {
        root: null,
        rootMargin: horizontal ? '0px 10% 0px 10%' : '0px',
        threshold: threshold,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      className={lazyImage && className}
      style={{ height: '100%' }}
      ref={ref}
    >
      {isVisible && children}
    </div>
  )
}
