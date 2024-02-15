import Ad from '@/components/shared/Ad'
import CategoryCard from '@/components/shared/CategoryCard'
import { CategoryImages } from '@/lib'
import { link } from 'fs'
import Link from 'next/link'

const Category = () => {
  return (
    <div className='w-full wrapper'>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-primaryC mb-4">Categories Section</h1>
      <Ad />
      <div className='w-full flex justify-evenly flex-wrap items-center gap-3 mt-3'>
        {
          
          CategoryImages.map((item)=>(
            <Link href={`/videos?id=${item.id}`}>
                <CategoryCard imagePath={item.path} title={item.title} key={item.title}/>
            </Link>
          ))
        }

      </div>
      <Ad />

    </div>
  )
}

export default Category