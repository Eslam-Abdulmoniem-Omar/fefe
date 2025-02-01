'use client'

import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1F1F1F]">
      <video
        ref={videoRef}
        className="w-full aspect-video"
        poster="/placeholder.svg?height=720&width=1280"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-white hover:bg-white/20"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="text-white hover:bg-white/20"
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </Button>
          
          <div className="flex-1">
            <Slider
              defaultValue={[100]}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

