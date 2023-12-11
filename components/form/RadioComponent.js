import { Radio, Typography } from "@material-tailwind/react";


let RadioComponent = ({text, labels})=>{

    return(

        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                {text}
            </Typography>

            <div className={'flex flex-col gap-y-1'}>
                {
                    labels.map((label)=>{

                        return  <Radio name={'type'} label={label}/>

                    })
                }
            </div>

        </>
    )
}

export default RadioComponent;