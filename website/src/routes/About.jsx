

export default function About() {

    return(
        <div className="grid grid-cols-2 mb-12 mt-24">
            <div><p className="text-center my-8 text-xl">Goals</p></div>
            <div>
               <ul>
                    <li>Form strong connections</li>
                    <li>Develop on site skills to specialize my knowledge</li>
                    <li>Integrate myself into a community that is passionate about their life </li>
               </ul>
            </div>
            <div><p className="text-center my-8 text-xl">Interests</p></div>
            <div>
               <ul>
                    <li>Full Stack Development</li>
                    <li>ML/AI Integrations</li>
                    <li>Software that can be used everday to fufill needs</li>
               </ul>
            </div>
            <div><p className="text-center my-8 text-xl">Hobbies</p></div>
            <div>
               <ul>
                    <li>Reading, I love diving into the classics and books that make me feel more connected with others.</li>
                    <li>Climbing, Being outside is a must for me! I try to go outside everyday.</li>
                    <li>Bird Watching, There's nothing like the sound of a bird call when everything else is silent! </li>
               </ul>
            </div>
        </div>
    )
}