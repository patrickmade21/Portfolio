'use client'

import { useEffect, useRef } from 'react'

export function Vortex() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        const particleCount = 700
        const center = { x: canvas.width / 2, y: canvas.height / 2 }

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            center.x = canvas.width / 2
            center.y = canvas.height / 2
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        class Particle {
            x: number
            y: number
            radius: number
            angle: number
            speed: number
            distance: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.radius = Math.random() * 1.5
                this.angle = Math.random() * Math.PI * 2
                this.speed = 0.0005 + Math.random() * 0.001
                this.distance = Math.random() * Math.max(canvas!.width, canvas!.height) / 1.5
            }

            update() {
                this.angle += this.speed
                this.distance -= 0.5

                if (this.distance < 0) {
                    this.distance = Math.max(canvas!.width, canvas!.height) / 1.5
                    this.angle = Math.random() * Math.PI * 2
                }

                this.x = center.x + Math.cos(this.angle) * this.distance
                this.y = center.y + Math.sin(this.angle) * this.distance
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${this.distance / 1000})`
                ctx.fill()
            }
        }

        const init = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)' // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
        />
    )
}
