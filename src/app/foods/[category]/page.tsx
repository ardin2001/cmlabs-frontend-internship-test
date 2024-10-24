'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { PathName } from '@/app/components/pathName';
import { getMeal } from '@/app/redux/user/mealSlice';
import { useSelector, useDispatch } from 'react-redux';
export default function MyComponent({ params }: any) {
  const lastPathname: any = useRef(null)
  const dispatch = useDispatch()
  const { status, data } = useSelector((state: any) => state.meals);
  useEffect(() => {
    dispatch(getMeal(params))
  }, []);

  useEffect(() => {
    lastPathname.current.style.opacity = '50%'
  }, []);
  return (
    <main className='w-90/100 sm:w-4/5 md:w-3/4 xl:w-70/100 mx-auto'>
      <PathName lastPathname={lastPathname} />
      <h3 className="title font-normal text-4xl my-5 sm:my-6 lg:my-7 xl:my-8">{params.category} Meals</h3>
      <div className="content grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
        {status && data.map((category: any) => (
          <Link href={`/foods/${params.category}/${category.idMeal}`} key={category.idMeal} className='bg-white rounded-2xl relative overflow-hidden'>
            <Image src={category.strMealThumb} width={300} height={300} alt={category.strMeal} className='h-64 object-cover mx-auto w-full' priority />
            <div className="layer absolute bg-black top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-35 rounded-2xl hover:bg-opacity-5">
              <h3 className="text-2xl font-semibold text-white text-center px-1 md:px-1.5 xl:px-2">{category.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
