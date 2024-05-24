
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Nav(props) {

    return (
        <>
            <div className="text-white min-w-full bg-blue-800 grid grid-rows-1 grid-cols-3 grid-flow-row fixed p-8">
                <div className="col-span-2 text-3xl ml-3">
                <Link to={"/johnston-web/"}>Grant Johnston</Link>
                </div>
            </div>
            <div>
                {props.children}
            </div>
            <Footer></Footer>
            
        </>
    )
}