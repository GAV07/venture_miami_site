import { useEffect, useState } from "react";
import {Loading} from "../../Loading";

export function Socials() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => setIsLoaded(true);

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);



    return (
        <div className="w-full h-full">


            {isLoaded ?
                <a className="twitter-timeline" data-width={"100%"} data-height="250"
                   href="https://twitter.com/VentureMiami?ref_src=twsrc%5Etfw">
                    Tweets by VentureMiami
                </a>
                :
                <Loading/>}


        </div>
    );
}
