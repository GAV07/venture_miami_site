import FormComponent from "../FormComponent";
import * as React from "react";

let Form = (props)=>{

    return(

        <FormComponent props={props.content} />
    )
}

export default Form;