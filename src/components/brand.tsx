import { useState } from "react";
import { Image } from "@nextui-org/image";

interface LogoBrandProps {
    name: string;
    className?: string;
}

// Hàm để loại bỏ dấu tiếng Việt
function removeVietnameseTones(str: string) {
    str = str.replace(/[\u0300-\u036f]/g, ""); // Remove combining diacritical marks
    str = str.replace(/đ/g, "d");
    str = str.replace(/Đ/g, "D");
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return str;
}

export function LogoBrand({ name, className }: LogoBrandProps) {
    const normalizedName = removeVietnameseTones(name.toLowerCase().replace(' ', '-'));
    const [src, setSrc] = useState(`/assets/logo-${normalizedName}.png`);
    const [attempt, setAttempt] = useState(0);
    const extensions = ['png', 'svg', 'jpg'];

    const handleError = () => {
        if (attempt < extensions.length - 1) {
            setAttempt(attempt + 1);
            setSrc(`/assets/logo-${normalizedName}.${extensions[attempt + 1]}`);
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