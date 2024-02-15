
import Ad from '@/components/shared/Ad';
import Videorender from '@/components/shared/videorender';
import { getCategoryById, getRandomVideos } from '@/lib/action/category.action';
import { Video } from '@/lib/database/models/category.model';
import { findTitleById } from '@/lib/utils';

const Videos = async ({searchParams}: {searchParams: { [id: string]: string | undefined }
}) => {

  type Collection = Video[] |null;
  let collection:Collection = []
  let Pagetitle: string | null = '';

    if (searchParams.id) {
      collection = await getCategoryById(searchParams.id);
    }else{
      collection = await getRandomVideos()
    }
    Pagetitle = findTitleById(searchParams.id)
  
  return (
    <div className="w-full wrapper">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-primaryC mb-4">Category: {Pagetitle ? Pagetitle : 'Best Videos'}</h1>
      <Ad />
      
      <Videorender collection={collection} />
      <Ad />
    </div>
  )
}


export default Videos