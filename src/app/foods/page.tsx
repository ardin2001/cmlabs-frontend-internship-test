'use client';
import { TbSoupFilled } from "react-icons/tb";
import { BiSolidBowlRice } from "react-icons/bi";
import { BiSolidCookie } from "react-icons/bi";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector,useDispatch } from "react-redux";
import { getCategory } from "../redux/user/categorySlice";

export default function MyComponent() {
  const dispatch = useDispatch()
  const {status, data} = useSelector((state: any) => state.categories);

  useEffect(() => {
    dispatch(getCategory())
  }, []);

  return (
    <>
      <div className="title text-center py-10 sm:py-12 lg:py-14  bg-gray-100 grid gap-1 sm:gap-1.5 lg:gap-2.5 xl:gap-3">
        <div className="icons text-secondary flex gap-1.5 sm:gap-2 lg:gap-2.5 xl:gap-3 justify-center">
          <TbSoupFilled />
          <BiSolidBowlRice />
          <BiSolidCookie />
        </div>
        <p className='font-normal'>maleapp API website</p>
        <h2 className='text-4xl font-bold px-4'>See All The Delicious Foods</h2>
      </div>
      <main className='w-90/100 sm:w-4/5 md:w-3/4 xl:w-70/100 mx-auto'>
        <div className="content grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 my-5 sm:my-6 md:my-7 lg:my-8">
          {status && data.map((category: any) => (
            <Link href={`/foods/${category.strCategory}`} key={category.idCategory} className='bg-white rounded-xl relative overflow-hidden'>
              <Image src={category.strCategoryThumb} width={300} height={300} alt={category.strCategory} className='h-32 object-cover mx-auto' />
              <div className="layer absolute bg-black top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-35 rounded-xl hover:bg-opacity-5">
                <h3 className="text-2xl font-semibold text-white text-center">{category.strCategory}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
