import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navigation(props) {

    return (
        <>
            <div className="min-w-full bg-red-300 grid grid-rows-1 grid-cols-3 grid-flow-row fixed">
                <div className="col-span-2 text-3xl ml-3">
                <AnchorLink href="#Head">Grant Johnston</AnchorLink>
                </div>
                <div className="col-span-1 flex flex-row justify-between mr-8 mb-0 mt-3">
                    <AnchorLink className="hover:bg-red-600" href="#About">About</AnchorLink>
                    <AnchorLink className="hover:bg-red-600" href="#SelectedWork">Projects</AnchorLink>
                    <AnchorLink className="hover:bg-red-600" href="#Contact">Contact</AnchorLink>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}