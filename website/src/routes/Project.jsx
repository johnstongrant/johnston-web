import Card from "../components/Card";

const Projects = [
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
            },
            {
                title: "Class Scraper",
                description: "A web scraper that will transform canvas html pages into markdown",
                link: "/Class Scraper"
            },
            {
                title: "The Maze",
                description: "implementation of BFS and DFS with an auto generated maze and solver",
                link: "/The Maze"
            },
            {
                title: "Swish Terminal",
                description: "C implemented terminal that can handle self made tar commands and piping",
                link: "/Swish Terminal"
            },
        ]

export default function Project() {

    return(
        <>
        {Projects.map(item => 
        <div>
            <Card
            title={item.title}
            description={item.description}
            link={item.link}></Card>
        </div>)}
        </>
    )
}