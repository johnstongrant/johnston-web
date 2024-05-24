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
]

export default function Project() {

    return(
        <>
            {Projects.map((item) => {
                return(
                    <div className="col-span-1">
                        <span className="my-4 text-4xl font-bold">{item.title}</span>
                        <div className="flex flex-col gap-y-2">
                            {item.projects.map(item => 
                            <Card
                            title={item.title}
                            description={item.description}
                            link={item.link}></Card>)}
                        </div>
                    </div>
                )
            })}
        </>
    )
}