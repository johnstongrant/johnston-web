import { Link } from "react-router-dom";

export default function Navigation(props) {

    return (
        <>
            <div className="min-w-full bg-red-300 grid grid-rows-1 grid-cols-3 grid-flow-row">
                <div className="col-span-2 text-3xl ml-3">
                <Link to="/">Grant Johnston</Link>
                </div>
                <div className="col-span-1 flex flex-row justify-between mr-8 mb-0 mt-3">
                    <Link className="hover:bg-red-600" to="/about">About</Link>
                    <Link className="hover:bg-red-600" to="/projects">Projects</Link>
                    <Link className="hover:bg-red-600" to="/contact">Contact</Link>
                </div>
            </div>
            <div className="flex flex-col container basis-full min-w-full">
                {props.children}
            </div>
        </>
    )
}