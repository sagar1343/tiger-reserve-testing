import { useState, useEffect } from 'react'

function useWeeklySafari() {
  const [safariDetails, setSafariDetails] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/api/safari/available-seats')
      .then((res) => res.json())
      .then((jsonRes) => setSafariDetails([...jsonRes.data]))
      .catch((err) => console.error('Failed to fetch safari details:', err))
  }, [])
  return safariDetails
}

export default useWeeklySafari
