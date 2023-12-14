import {useEffect, useState} from "react";
import * as React from "react";

export default function Form({form}) {

    const [forms, setForms] = useState(null);

    useEffect(() => {

        const map = new Map(); // { data base name, the iframe }

        map.set('website intake',
                <iframe
                    className="airtable-embed relative bg-transparent border-[1px] border-[#ccc] rounded-[10px]"
                    src="https://airtable.com/embed/appU24wxHJtwLEMq4/shrkRDDFLh4XJLPud?backgroundColor=cyan"
                    frameBorder="0" onmousewheel="" width="100%" height="100%"
                    // style="background: transparent; border: 1px solid #ccc;"
                >
                </iframe>
            );

        setForms(map);

    }, [])


    return (

        <div className={'lg:w-[70%] w-full mx-auto h-full'}>
            {( forms && forms.hasOwnProperty(form.toLowerCase()) ) && forms.get(form.toLowerCase)}
        </div>

    )


}