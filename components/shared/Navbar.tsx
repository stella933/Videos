"use client"
import { navLinks } from "@/lib"
import Link from "next/link"
import { usePathname } from "next/navigation"




const Navbar = () => {

    const pathname = usePathname()

  return (
    <header className="w-full ">
      <nav className="w-full h-12 bg-navBG text-primaryT flex justify-around items-center "  >
        <div className="wrapper w-full flex justify-between items-center">
          <div>
            <Link href="/"><p className=" text-PrimaryC text-2xl">XXX<span className="text-white"> VIDEOS</span></p></Link>
          </div>

          <div className="">
            {navLinks.map((items) => (
              <Link href={items.path} className={ pathname === items.path ? ' text-PrimaryC' : 'text-primaryT'} key={items.title}>
                <span className="px-2 md:px-8">{items.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar