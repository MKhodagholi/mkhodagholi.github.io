import { useEffect, useState } from 'react'
import { interval, scan, takeWhile } from 'rxjs'

const HomePage = () => {
  const [time, setTime] = useState<number>()

  const counter$ = interval(1000).pipe(
    scan((acc, curr) => {
      return --acc
    }, 10),
    takeWhile((number) => number >= 0),
  )

  useEffect(() => {
    counter$.subscribe((value) => {
      setTime(value)
    })
  }, [])

  const isTiming = time !== 0

  return (
    <div className="flex justify-center items-center w-full h-screen p-4 text-center bg-black-900">
      {isTiming ? (
        <h1 className="text-white text-7xl">{time}</h1>
      ) : (
        <h2 className="text-white text-6xl">فرصت ها مثل ابر می‌گذرند!</h2>
      )}
    </div>
  )
}

export default HomePage
