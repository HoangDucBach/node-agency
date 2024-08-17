import { useState } from "react";
import { Image } from "@nextui-org/image";

interface LogoBrandProps {
    name: string;
    className?: string;
}

export function LogoBrand({ name, className }: LogoBrandProps) {
    const [src, setSrc] = useState(`/assets/logo-${name.toLowerCase().replace(' ', '-')}.png`);
    const [attempt, setAttempt] = useState(0);
    const extensions = ['png', 'svg', 'jpg'];

    const handleError = () => {
        if (attempt < extensions.length - 1) {
            setAttempt(attempt + 1);
            setSrc(`/assets/logo-${name.toLowerCase().replace(' ', '-')}.${extensions[attempt + 1]}`);
        }
    };

    return (
        <Image
            src={src}
            alt={name}
            className={`max-h-8 rounded-full object-cover ${className}`}
            onError={handleError}
        />
    );
}