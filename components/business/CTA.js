import * as React from "react";
import {useEffect, useState} from "react";
import RequestForm from "./form/RequestForm";
import Link from 'next/link';
import {BsArrowRightShort} from "react-icons/bs";
import InputComponent from "../form/InputComponent";
import RadioComponent from "../form/RadioComponent";
import IntakeForm from "./form/IntakeForm";
import TabsComponent from "../TabsComponent";
import Form from "./Form";
import FormComponent from "../FormComponent";

export default function CTA(props) {

    return(

        <FormComponent props={props.content} />
    )
}
