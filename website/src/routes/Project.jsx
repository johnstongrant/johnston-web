import Card from "../components/Card";

const Projects = [
    {
        title: "Web Development",
        projects:[
            {
                title: "CurrentSee",
                description: "A personal finance tracking app that values visibility and clarity",
                link: "/CurrentSee"
            },
            {
                title: "AndDone",
                description: "A jira related software to manage day to day projects collectively",
                link: "/AndDone"
            }, 
            {
                title: "Tracks",
                description: "Todo list web app to maintain awareness of tasks",
                link: "/Tracks"
            }
        ] 
    },
    {
        title: "Python",
        projects: [
            {
                title: "Class Scraper",
                description: "A web scraper that will transform canvas html pages into markdown",
                link: "/Class Scraper"
            },
        ]
    },
    {
        title: "Java",
        projects: [
            {
                title: "The Maze",
                description: "Fun implementation of BFS and DFS with an auto generated maze and solver",
                link: "/The Maze"
            },
        ]
    },
    {
        title: "C & C++",
        projects: [
            {
                title: "Swish Terminal",
                description: "A C implemented terminal that can handle self made tar commands and piping",
                link: "/Swish Terminal"
            },
            {
                title: "Drone Simulation",
                description: "C++ rendering of college campus that offers a simulation of drone deliveries",
                link: "/Drone Simulation"
            }
        ]
    }
]

export default function Project() {

    return(
        <>
        {Projects.map((item) => {
            return(
                <>
                <span className="my-4 ml-4 text-4xl">{item.title}</span>
                <div className="ml-4 mb-4 flex flex-row gap-4">
                {item.projects.map(item => 
                <Card
                title={item.title}
                description={item.description}
                link={item.link}></Card>)}
                </div>
                </>
            )
        })}
        </>
    )
}