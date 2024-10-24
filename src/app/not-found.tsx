import Image from "next/image";
export default function NotFound() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="wrap">
                <Image className="mx-auto" src="/404.png" width={600} height={14050} alt="404" />
                <p className="font-bold text-red-400 text-xl text-center">Page Not Found</p>
            </div>
        </div>
    );
}