
const CategoryCard = ({imagePath, title}:{imagePath:string ,title:string}) => {
    return (
      <div className="md:w-60 w-44 h-28 overflow-hidden relative transform hover:scale-105 transition duration-300 ease-in-out ">
          <img src={imagePath} alt={title} className=" object-cover bg-center w-full h-full rounded-xl "/>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50 hover:opacity-0 rounded-xl"></div>
  
          <p className="z-1 text-white absolute bottom-0 left-0 w-full p-2  text-md ">{title}</p>
      </div>
    )
  }
  
  export default CategoryCard