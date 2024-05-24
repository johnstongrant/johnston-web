export default function Divider({title}) {
    return (
        <>
        <div id="About" className="col-span-2 text-center text-bold text-4xl">{title}</div>
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/></>
    )
}