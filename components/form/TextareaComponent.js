import {Input, Textarea, Typography} from "@material-tailwind/react";


let TextareaComponent = ({text, subtext, placeholder})=>{

    return(

        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                {text}
            </Typography>

            {
                subtext && <Typography variant="h6" color="blue-gray" className="-mb-3 text-sm">
                    {subtext}
                </Typography>
            }
            <Textarea label={placeholder} />

        </>
    )

}

export default TextareaComponent;