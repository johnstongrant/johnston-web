import { Link } from "react-router-dom";

  export default function ProjectDetails({title, about, link, images}) {

    return link !== "" ?
 (
      <div className="bg-white">
        <div><Link to={"/projects"}> - Back to Projects</Link></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-gray-500">
                {about}
            </p>

            <button className="bg-red-300 p-1 rounded-xl">
                <a href={link}>
                    Check Out
                </a>
            </button>
          </div>
          <div>
            {images.map(img => 
            <img
            src={img}
            alt="Project related view"></img>
            )}
          </div>
          
        </div>
      </div>
    ) :
    <div className="bg-white">
    <div><Link to={"/projects"}> - Back to Projects</Link></div>
    <div className="mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-gray-500">
            {about}
        </p>
      </div>
      <div>
        {images.map(img => 
        <img
        src={img}
        alt="Project related view"></img>
        )}
      </div>
      
    </div>
  </div>
  }
  