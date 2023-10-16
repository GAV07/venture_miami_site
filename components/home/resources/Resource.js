export default function Resource(props) {

    return (
        <a href={"#"} target="_blank" rel="noopener noreferrer" className={`flex flex-wrap mt-10 w-[250px] h-[315px] ${props.content.color} rounded-[25px] mr-10 transition-transform hover:scale-105 shadow-lg`}>
            <div className="flex-none w-full">
                <p className="text-xl font-extrabold text-white mt-4 ml-4 w-[80%]">
                    {props.content.heading}
                </p>
                <p className="text-sm text-white font-thin ml-4 mt-2 w-[80%]">
                    {props.content.subheading}
                </p>
            </div>
            <div className="flex-none w-full">
                <img
                    className="mt-10 mb-10 float-right rounded-tl-2xl rounded-bl-2xl w-[200px] h-[120px]"
                    src="/images/logos/arts_and_culture.jpg"
                    alt="Arts and Culture"
                />
            </div>
        </a>
    );
}
