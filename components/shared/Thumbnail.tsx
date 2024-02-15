
const Thumbnail = ({title,url}:{title:string,url:string}) => {
  return (
    <div className="h-46 w-44 md:w-60    transform hover:scale-105 transition duration-300 ease-in-out ">
         <img className="w-full rounded-sm h-24 md:h-36  " src={url} alt={title} />
         <div className="w-full text-primaryT text-xs pt-2 truncate overflow-hidden whitespace-nowrap">{title}</div>
    </div>
  )
}

export default Thumbnail