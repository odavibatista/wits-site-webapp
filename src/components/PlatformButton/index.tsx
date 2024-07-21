import React from "react"

interface ButtonProps {
    platform_name: string
    image_url: string
}

const PlatformButton:React.FC<ButtonProps> = ({platform_name, image_url}) => {
    return (
        <>
            <div className="w-44 h-9 rounded-lg text-white flex items-center justify-center gap-4 m-2">
                <img className="w-8 h-8" src={image_url} alt={`Logo da plataforma ${platform_name}`} />
                <p className="font-mono text-lg">{platform_name}</p>
            </div>
        </>
    )
}

export default PlatformButton