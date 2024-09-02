import React from 'react'

function Button({
  onClickHandler,
  size = 'md',
  type = 'gold',
  className = '',
  disabled = false,
  children,
}) {
  const buttonSize = {
    md: 'px-6 md:px-12 py-1.5 md:py-2.5 border-[1.5px]',
    sm: 'px-3 md:px-5 py-0.5  md:py-[8px] border-[1px]',
  }
  const buttonType = {
    glossy: 'backdrop-blur-sm bg-white/10 text-white border-white text-lg',
    outline: 'text-black border-[#F5B206]',
    gold: 'text-black bg-[#F5B206] border-[#F5B206] hover:text-[#F5B206] hover:bg-transparent ',
    white: 'text-black bg-[#E7E7E7] border-[#E7E7E7] ',
    black: 'text-white bg-black',
  }
  return (
    <button
      disabled={disabled}
      onClick={onClickHandler}
      className={`transition-all hover:delay-75 text-nowrap rounded-full ${buttonSize[size]} ${buttonType[type]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
