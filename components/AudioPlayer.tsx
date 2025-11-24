'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface AudioPlayerProps {
  src?: string
  word: string
  pronunciation: string
  autoPlay?: boolean
  onRecord?: () => void
  onPlay?: () => void
}

export default function AudioPlayer({ src, word, pronunciation, autoPlay = false, onRecord, onPlay }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isRecording, setIsRecording] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
        onPlay?.()
      }
    } else if (onRecord) {
      // If no audio source, trigger recording
      handleRecord()
    }
  }

  const handleRecord = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Audio recording is not supported in your browser')
      return
    }

    try {
      if (!isRecording) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream)
        mediaRecorderRef.current = mediaRecorder

        const chunks: Blob[] = []
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data)
          }
        }

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm' })
          const url = URL.createObjectURL(blob)
          if (audioRef.current) {
            audioRef.current.src = url
          }
          onRecord?.()
          stream.getTracks().forEach(track => track.stop())
        }

        mediaRecorder.start()
        setIsRecording(true)
      } else {
        mediaRecorderRef.current?.stop()
        setIsRecording(false)
      }
    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Could not access microphone. Please check permissions.')
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handlePlay}
        className={`p-3 rounded-full transition-colors ${
          isPlaying
            ? 'bg-red-500 text-white hover:bg-red-600'
            : isRecording
            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
            : 'bg-amazigh-primary text-white hover:bg-amazigh-dark'
        }`}
        aria-label={isPlaying ? 'Pause' : isRecording ? 'Stop recording' : 'Play pronunciation'}
      >
        {isPlaying ? (
          <Pause size={20} />
        ) : isRecording ? (
          <Pause size={20} />
        ) : (
          <Play size={20} />
        )}
      </button>

      {src && (
        <audio
          ref={audioRef}
          src={src}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          autoPlay={autoPlay}
        />
      )}

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-gray-600 hover:text-amazigh-primary transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20"
        />
      </div>

      {onRecord && (
        <button
          onClick={handleRecord}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            isRecording
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isRecording ? 'Stop Recording' : 'Record'}
        </button>
      )}

      <div className="text-sm text-gray-600">
        <div className="font-semibold">{word}</div>
        <div className="text-xs italic">[{pronunciation}]</div>
      </div>
    </div>
  )
}

