"use client"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector} from "react-redux";


export default function Pagination({ page,data }: any) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const nextData = data?.data?.slice(((page+1) - 1) * 10, (page+1) * 10)

  return (
    <div className="mt-1 md:mt-2 flex gap-2 justify-end h-max">
      {page != 1 ? <Link className="hover:bg-primary flex items-center text-xs justify-center px-2.5 py-2 bg-secondary text-white font-semibold rounded-md" href={pathname + '?' + createQueryString('page', (parseInt(page) - 1).toString())}><FaAngleLeft /></Link> : null}
      <Link className="hover:bg-primary flex items-center text-xs justify-center px-3.5 py-2 bg-secondary text-white font-semibold rounded-md" href={pathname + '?' + createQueryString('page', page)}>{page}</Link>
      {nextData?.length != 0 ? <Link className="hover:bg-primary flex items-center text-xs justify-center px-2 py-2 bg-secondary text-white font-semibold rounded-md" href={pathname + '?' + createQueryString('page', (parseInt(page) + 1).toString())}><FaAngleRight /></Link> : null}
    </div>
  )
}