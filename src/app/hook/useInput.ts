import { useState } from "react";
export default function useInput(initialValue: string) {
  const [input, setInput] = useState(initialValue);
  const HandlerInput = (e:any) => {
    setInput(e.target.value);
  };

  return [input, HandlerInput];
}