import {
    Checkbox, Radio, Typography
} from "@material-tailwind/react";
import {useState} from "react";

let CheckboxComponent = ({text, labels, updateChoices, choices})=>{

    const [choicesSelected, setChoicesSelected] = useState([]);

    const handleClick = (index)=>{

        const newChoices = [...choices];
        newChoices[index].checked = !newChoices[index].checked; // negate the choice selected
        updateChoices(newChoices);

        console.log(newChoices);
    }

    return(

        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                {text}
            </Typography>

            {/*<div className={'flex flex-col gap-y-1'}>*/}
            <div className={'grid grid-cols-2 gap-y-1'}>
                {

                    choices.map((choice, index)=>{

                        return  <div onClick={()=>{ handleClick(index) }}><Checkbox label={choice.name}/></div>

                    })
                }
            </div>

        </>
    )
}

export default CheckboxComponent;