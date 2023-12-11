import {
    Input,
    Typography,
} from "@material-tailwind/react";
import {useState} from "react";

let InputComponent = ({canSubmit, submitted, required=false, type='text', text, subtext, placeholder})=>{

    const [input, setInput] = useState('');

    return(

        <>
            <div className={'flex flex-col gap-y-4'}>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    {text}
                </Typography>

                {
                    subtext && <Typography variant="h6" color="blue-gray" className="-mb-3 text-sm">
                        {subtext}
                    </Typography>
                }
            </div>
           {/* <Input
                type={type}
                size="lg"
                onChange={(e)=>{ setInput(e.target.value) }}
                placeholder={placeholder}
                className={`${ ( required && submitted && input.length <= 0 ) ? 'ring-1 ring-red-200' : 'ring-1 ring-black'}`}
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />*/}

            <input
                type={type}
                size="lg"
                onChange={(e)=>{ setInput(e.target.value) }}
                placeholder={placeholder}
                className={`${ ( required && submitted && input.length <= 0 ) ? 'ring-1 ring-red-200' : 'ring-1 ring-black'} p-4 rounded-md`}
            />
        </>
    )

}

export default InputComponent;