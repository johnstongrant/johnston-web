
import { Link } from 'react-router-dom'

export default function Nav(props) {

    return (
        <>
            <div className="min-w-full bg-red-300 grid grid-rows-1 grid-cols-3 grid-flow-row fixed">
                <div className="col-span-2 text-3xl ml-3">
                <Link to="/">Grant Johnston</Link>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}