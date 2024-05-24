

export default function Contact() {
    const onButtonClick = (extension) => {
        if (extension === "pdf") {
            const pdfUrl = "grant-johnston-resume.pdf";
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "johnston-grant-resume.pdf"; // specify the filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            const docx = "grant-johnston-resume.docx";
            const link = document.createElement("a");
            link.href = docx;
            link.download = "johnston-grant-resume.docx"; // specify the filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

    };

    return(
        <div className=" justify-center  min-w-full  grid grid-rows-1 grid-flow-row p-8">
        <div className=" flex flex-row gap-4 mt-3">
                <button className="hover:underline" onClick={() => onButtonClick("pdf")}>Download pdf</button>
                <button className="hover:underline"onClick={() => onButtonClick("docx")}>Download docx</button>
        </div>
    </div>

    )
}