
import Divider from "../components/Divider"
import self from "../images/self.jpeg"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"

export default function Splash() {

    return (
        <>
        <div className="bg-gray-200">
            <div id="Head" className=" grid min-w-full grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div >
                <h2 className="text-4xl text-center font-bold tracking-tight text-gray-900">Hello.</h2>
                <p className="mt-8 text-gray-500 text-left">
                    I'm Grant Johnston, a recent graduate from the University of Minnesota Twin Cities. I am currently looking for roles in Full Stack Development and Software Engineering fields!
                    In my free time you can find me climbing indoors and outside, reading a classic, or writing reviews on movies that I've been watching.
                    I love to make things that fit my needs and strive for community involvement wherever I go!
                </p>

            </div>

            <div>
                <img
                src={self}
                alt="Grant Johnston"></img>
            </div>
            </div>
            <div id="About" className="">
                <Divider
                    title={"About Me"}
                ></Divider>
            </div>
            <div className="min-w-full">
                <About></About>
            </div>
            <div id="SelectedWork">
                <Divider
                    title={"Selected Works"}
                ></Divider>
            </div>
            <div className="justify-items-center grid min-w-full grid-cols-2 grid-rows-2 mb-24 mt-24 sm:grid-cols-3">
                <Project></Project>
            </div>
            <div id="Contact">
                <Divider
                title={"Resume"}
                ></Divider>
            </div>
            <div  className="min-w-full">
                <Contact></Contact>
            </div>
      </div>
      
      </>
    )
}