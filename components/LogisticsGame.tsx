'use client'

import { useState, useEffect } from 'react'
import { Truck, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LogisticsGame() {
  const [score, setScore] = useState(0)
  const [truckPosition, setTruckPosition] = useState(0)
  const [packagePosition, setPackagePosition] = useState(Math.floor(Math.random() * 80) + 10)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return
      if (e.key === 'ArrowLeft' && truckPosition > 0) {
        setTruckPosition(prev => prev - 5)
      } else if (e.key === 'ArrowRight' && truckPosition < 90) {
        setTruckPosition(prev => prev + 5)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [truckPosition, isPlaying])

  useEffect(() => {
    if (!isPlaying) return
    if (Math.abs(truckPosition - packagePosition) < 5) {
      setScore(prev => prev + 1)
      setPackagePosition(Math.floor(Math.random() * 80) + 10)
    }
  }, [truckPosition, packagePosition, isPlaying])

  const startGame = () => {
    setIsPlaying(true)
    setScore(0)
    setTruckPosition(0)
    setPackagePosition(Math.floor(Math.random() * 80) + 10)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-center mb-4">Use left and right arrow keys to navigate the truck and collect packages.</p>
      <div className="h-24 relative rounded-xl overflow-hidden border mb-4">
        <Truck 
          className="absolute bottom-0 text-primary h-16 w-16 transition-all duration-100" 
          style={{ left: `${truckPosition}%` }} 
        />
        <Package 
          className="absolute bottom-16 text-secondary h-8 w-8" 
          style={{ left: `${packagePosition}%` }} 
        />
      </div>
      <div className="text-center space-y-4">
        <p className="text-2xl font-bold">Score: {score}</p>
        <Button onClick={startGame} disabled={isPlaying}>
          {isPlaying ? 'Game in Progress' : 'Start Game'}
        </Button>
      </div>
    </div>
  )
}

