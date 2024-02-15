"use client"
import React, { useState } from 'react'
import Thumbnail from './Thumbnail';
import Ad from './Ad';
import { Video } from '@/lib/database/models/category.model';
import { Button } from '../ui/button';
import Link from 'next/link';

const Videorender = ({ collection }: { collection: any |[] | null | Video[]}) => {

    const [currPage, setCurrPage] = useState(1)

    const StartIndex = (30 * (currPage - 1));
    const lastIndex = Math.min(30 * currPage || collection.length)
    
    const videos = collection.slice(StartIndex, lastIndex)
    


    return (
        <div className='mt-3'>
            <div className="flex justify-evenly items-center flex-wrap gap-2 ">
                {
                    videos.map((items: Video, index: number) =>
                    (   
                       <Link href={`/play?vid=${items._id}`}>
                            <Thumbnail title={items.title} url={items.image} />
                       </Link>
                       
                    ))
                }
            </div>
            <div className="w-full flex justify-center gap-5 mt-4">
                <Button className="hover:bg-PrimaryC" disabled={currPage === 1} onClick={() => setCurrPage(currPage - 1)}>Prev</Button>
                <Button className="hover:bg-PrimaryC" disabled={currPage === Math.ceil(collection.length / 30)} onClick={() => setCurrPage(currPage + 1)}>Next</Button>
                
            </div>
            <div>
            {currPage === Math.ceil(collection.length / 30)
                    ? <Button asChild className="hover:bg-PrimaryC mt-2 w-full"><Link href="/category">Get more Specific</Link></Button>
                    :''
                }
            </div>
            
        </div>
    )
}

export default Videorender