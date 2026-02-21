import { Vortex } from 'app/components/vortex'

export default function AnimationPage() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Vortex />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-white text-4xl font-light tracking-widest opacity-80 mix-blend-difference">
                    VORTEX PREVIEW
                </h1>
            </div>
        </div>
    )
}
