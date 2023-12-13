import React, { useEffect } from "react";

function WistiaPlayer({ className, wrapper }) {
    useEffect(() => {
        // Wistia embed code
        const script1 = document.createElement("script");
        script1.src = `https://fast.wistia.com/embed/medias/sofmca1xoi.jsonp`;
        script1.async = true;
        const script2 = document.createElement("script");
        script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script2.async = true;
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_sofmca1xoi seo=false videoFoam=true" style="height:100%;position:relative;width:100%">&nbsp;</div></div></div>
        `;
        const container = document.getElementById(wrapper);
        container.appendChild(script1);
        container.appendChild(script2);
        container.appendChild(div);

        return () => {
            // Cleanup code
            container.innerHTML = "";
        };
    }, []);

    return <div id={`${wrapper}`} className={`${className}`}></div>;
}

export default WistiaPlayer;

