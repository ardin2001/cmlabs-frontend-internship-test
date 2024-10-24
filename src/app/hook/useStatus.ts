import { useState } from "react";
export default function useStatus(initialValue:boolean){
    const [status, setStatus] = useState(initialValue);
    const HandlerStatus = () => {
        setStatus(prev => !prev)
    }

    return [status, HandlerStatus]
}