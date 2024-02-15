import Ad from "@/components/shared/Ad";
import Thumbnail from "@/components/shared/Thumbnail"
import { Separator } from "@/components/ui/separator"
import {  findVideoByIdInCategory, getRandomVideos } from "@/lib/action/category.action";
import { Video } from "@/lib/database/models/category.model";
import Link from "next/link";

const VideoPlayer = async ({ searchParams }: { searchParams: { [vid: string]: string | undefined } }) => {

  const video = await findVideoByIdInCategory(searchParams.vid)
  const data = await getRandomVideos()
  const related = data.slice(0, 10)


  return (
    <div className="wrapper w-full flex flex-col justify center ">
      <div className="w-full h-[500px] lg:h-[400px] flex gap-4 flex-col lg:flex-row ">
        <div className=" w-full h-[235px] sm:h-[350px] md:w-[800px] md:h-full "  >
          <video controls className="w-full h-full object-contain">
            <source src={video?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col gap-1 mb-2 h-20">
          <p className="text-lg text-primaryT">{video?.title}</p>
          <p className="text-sm bg-zinc-800 w-fit p-1 rounded-sm text-primaryT">{video?.duration}</p>
        </div>

      </div>

      <Separator className="mt-8 bg-gray-700 "  />

      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-primaryC my-4">Related Videos</h1>
      <Ad />
      <div className="flex justify-evenly items-center flex-wrap gap-2 mt-3">

        {related?.map((items: Video) => (
          <Link href={`/play?vid=${items._id}`} key={items.id}>
            <Thumbnail title={items.title} url={items.image} />
          </Link>

        ))}
      </div>
      <Ad />


    </div>
  )
}

export default VideoPlayer