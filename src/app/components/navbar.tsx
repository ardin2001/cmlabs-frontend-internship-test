"use client";
import useStatus from "../hook/useStatus";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
    const [status, setStatus]: any = useStatus(false);
    const refHeader:any = useRef(null);

    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY > 1) {
                refHeader.current.style.boxShadow = '0 0 2px 3px rgba(0, 0, 0,0.12)';
            } else {
                refHeader.current.style.boxShadow = 'none';
            }
        }
        document.addEventListener("scroll", handlerScroll)
        return () => {
            document.removeEventListener('scroll', handlerScroll);
        };
    }, []);
    return (
        <header ref={refHeader} className={`${status ? "flex-col" : ""} md:flex-row bg-white flex justify-between py-2.5 px-6 sm:px-10 md:px-16 lg:px-20 mx-auto sticky top-0 z-50`}>
            <div className="flex w-full justify-between items-center">
                <Link href="/" className="text-primary text-xl font-bold">mealapp</Link>
                <IoMdMenu className="text-2xl sm:text-3xl text-primary md:hidden" onClick={setStatus} />
            </div>
            <div className={`${status ? "block" : "hidden"} md:block text-center`}>
                <ul className="grid gap-5 md:gap-8 py-4 md:py-0 md:grid-flow-col md:justify-between">
                    <Link href="/" className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary cursor-pointer">Home</Link>
                    <Link href="/foods" className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary cursor-pointer">Foods</Link>
                    <Link href="/" className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary cursor-pointer">Ingredients</Link>
                    <Link href="/" className="font-normal lg:font-medium text-sm hover:font-semibold hover:text-primary cursor-pointer md:w-max">Local Culinary</Link>
                </ul>
            </div>
        </header>
    );
}