import Ad from "@/components/shared/Ad"
import CategoryCard from "@/components/shared/CategoryCard"
import Thumbnail from "@/components/shared/Thumbnail"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CategoryImages } from "@/lib"
import { getRandomVideos } from "@/lib/action/category.action"
import { Video } from "@/lib/database/models/category.model"
import { Collection } from "mongoose"
import Link from "next/link"


const HomePage = async () => {

  const Collection = await getRandomVideos(); 

  return (
    <div className="bg-body">
      <section id="hero" className="w-full h-full wrapper">
        <Ad />
        <Separator className=" bg-zinc-700 mt-2" />

        <div className="w-full h-72 flex flex-col items-center mt-4">
          <div className="w-full h-60 flex sm:flex-row gap-2 flex-wrap justify-around overflow-hidden">
            {CategoryImages.map((item) => (
              <Link href={`/videos?id=${item.id}`}>
                <CategoryCard imagePath={item.path} title={item.title} key={item.title} />
              </Link>
            ))}
          </div>

          <Button asChild className="hover:bg-PrimaryC mt-2 w-full">
            <Link href="/category">More</Link>
          </Button>
        </div>
        <Separator className=" bg-zinc-700 mt-2" />

      </section>

      <section className="wrapper flex flex-col items-center" id="videoSection">
        <div className="flex justify-evenly items-center flex-wrap gap-2">
          {Collection?.map((items:Video)=>(
            <Link href={`/play?vid=${items._id}`}>
              <Thumbnail title={items.title} url={items.image} />
            </Link>
          
          ))}


        </div>

        <Button asChild className="hover:bg-PrimaryC mt-2 w-full ">
          <Link href="/videos">More</Link>
        </Button>
        <Ad />

      </section>
    </div>
  )
}

export default HomePage
