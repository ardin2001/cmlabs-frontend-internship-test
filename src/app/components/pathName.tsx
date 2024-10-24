"use client";
import { AiFillHome } from "react-icons/ai";
import Capitalize from "../function/capitalize";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PathName({ lastPathname }: any) {
    const pathname = usePathname();
    return (
        <div className="pathname flex items-center gap-1 sm:gap-1.5 md:gap-2">
            <AiFillHome />
            <div className='font-normal text-black text-sm flex gap-1 sm:gap-1.5 md:gap-2'>
                <p>Home</p>
                {pathname.split("/").map((e, index) => {
                    if (e == "") {
                        return null
                    }
                    else if (index + 1 == pathname.split("/").length) {
                        return (
                            <div key={index} className='flex items-center gap-1 sm:gap-1.5 md:gap-2'>
                                <FaChevronRight className='text-sm text-opacity-60 text-black' />
                                <p id="lastPathname" ref={lastPathname}>{Capitalize(e)}</p>
                            </div>
                        )
                    }
                    return (
                        <div key={index} className='flex items-center gap-1 sm:gap-1.5 md:gap-2'>
                            <FaChevronRight className='text-sm text-opacity-60 text-black' />
                            <p>{Capitalize(e)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export function ManipulateLastPathname(props:any) {
    useEffect(() => {
        const lastPathnameElement = document.getElementById("lastPathname");
        if (lastPathnameElement) {
            lastPathnameElement.style.opacity = "50%";
        }
        if(props.strMeal != undefined) {
            const lastPathnameElement = document.getElementById("lastPathname");
            if (lastPathnameElement) {
                lastPathnameElement.innerText = props.strMeal;
            }
        }
    }, []);

    return null;
};
