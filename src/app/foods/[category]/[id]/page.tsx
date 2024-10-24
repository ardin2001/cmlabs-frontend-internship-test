import { PathName, ManipulateLastPathname } from '@/app/components/pathName';
import Image from 'next/image';

async function fetchData(params: any) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`, {
            cache: 'no-store'
        })
        const { meals } = await response.json()
        return { status: true, data: meals }
    } catch (error) {
        return { status: false, data: null }
    }
}
export default async function MyComponent({ params }: any) {
    const { status, data } = await fetchData(params)
    return (
        <main className='w-90/100 sm:w-4/5 md:w-3/4 xl:w-70/100 mx-auto pb-10 lg:pb-16'>
            <PathName />
            <h3 className="title font-normal text-4xl my-5 sm:my-6 lg:my-7 xl:my-8">{data && data[0].strMeal}</h3>
            {status && (
                <>
                    <div className="content">
                        <p className='font-medium text-red-500 mb-1.5 sm:mb-2 md:mb-2.5 lg:mb-3'>{data[0].strArea} Culinary</p>
                        <div className="content-inner grid sm:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4">
                            <Image src={data[0].strMealThumb} className='rounded-lg sm:rounded-xl md:rounded-2xl w-full' alt={data[0].strMeal} width={500} height={500} priority />
                            <div className="content-inner-desc">
                                <h5 className='text-3xl mb-1.5 sm:mb-2 md:mb-2.5'>Instructions</h5>
                                <div className='content-inner-instructions text-base leading-tight'>{data[0].strInstructions.split("\n").map((item: any, index: number) => <p key={index} className='mb-4'>{item}</p>)}</div>
                                <div className="content-inner-desc-recipes">
                                    <h5 className='text-3xl mb-1.5'>Recipes</h5>
                                    <ul className='list-disc'>
                                        {Object.keys(data[0]).map((key) => {
                                            if (key.startsWith('strIngredient') && data[0][key]) {
                                                const ingredientNumber = key.slice(13);
                                                const measure = data[0][`strMeasure${ingredientNumber}`];
                                                if (measure && measure.trim()) {
                                                    return (
                                                        <li key={key} className='ml-6'>
                                                            <span>{data[0][key]}</span>
                                                            <span>{measure}</span>
                                                        </li>
                                                    );
                                                }
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video my-6 sm:my-8 lg:my-10">
                        <h5 className='text-3xl mb-1.5 sm:mb-2 md:mb-2.5 text-center'>Tutorials</h5>
                        <iframe className='w-full h-64 sm:h-80 md:h-96 lg:h-102'
                            width="560"
                            height="500"
                            src={`https://www.youtube.com/embed/-xlmBoQ4paI`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <ManipulateLastPathname strMeal={data[0].strMeal} />
                </>
            )}
        </main>
    );
}
