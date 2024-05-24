import { Link } from "react-router-dom";

export default function Card({title, description,link}) {

    return(
      <div className="ml-4  flex flex-row gap-2">
          <Link to={link} className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 max-w-xs">
          <div className="flex items-center">
              <p className="my-4 text-2xl font-bold text-left text-gray-700 dark:text-gray-100">
              {title}
            </p>
          </div>
          <div className="flex flex-col justify-start">

            <p className="ml-2 text-black text-md dark:text-white">{description}</p>
          </div>
        </Link>
      </div>
    )
}