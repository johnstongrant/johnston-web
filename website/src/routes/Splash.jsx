
import self from "../images/self.jpeg"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"

export default function Splash() {

    return (
        <div className="bg-white">

            <div id="Head" className=" grid min-w-full grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div >
                <h2 className="text-4xl text-center font-bold tracking-tight text-gray-900">Hello.</h2>
                <p className="mt-24 text-gray-500 text-left">
                    Im Grant Johnston, a recent Grad from the University of Minnesota Twin Cities. I am currently looking for roles in the Full Stack Development and Software Engineering fields!
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
            <div id="About" className=" grid min-w-full grid-cols-1 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <span>About Me</span>
                <About></About>
            </div>
            <div id="SelectedWork" className=" grid min-w-full grid-cols-2 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <span>Selected Works</span>
                <Project></Project>
            </div>
            <div id="Contact" className="grid min-w-full grid-cols-2 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <span>Reach Out</span>
                <Contact></Contact>
            </div>
        
      </div>
    )
}