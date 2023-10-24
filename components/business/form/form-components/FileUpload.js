import {useEffect, useState} from "react";

export default function FileUpload({title, subtitle, formSubmitted, required}){

    const [selectedFile, setSelectedFile] = useState(null);
    const [invalid, setInvalid] = useState(false);
    const [fileName, setFileName] = useState(null);

    useEffect(() => {

        setInvalid((formSubmitted && required && selectedFile === null));

    }, [formSubmitted, setInvalid]);

    const maxFileSize = 5 * 1024 * 1024; // 5MB size limit

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {

            if (file.size > maxFileSize) {
                alert('File size exceeds the limit.');
                event.target.value = '';
                setInvalid(true);
            } else {

                const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "application/pdf"];

                if (allowedTypes.includes(file.type)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setFileName(file.name)
                        setSelectedFile(reader.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert("Invalid File Type");
                    event.target.value = '';
                    setFileName(null); // Reset the file name
                    setInvalid(true);
                }
            }
        }
    };


    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file) {
            if (file.size > maxFileSize) {
                alert("File size exceeds the limit.");
            } else {
                const allowedTypes = [
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                    "image/gif",
                    "application/pdf",
                ];

                if (allowedTypes.includes(file.type)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setFileName(file.name)
                        setSelectedFile(reader.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert("Invalid File Type");
                    event.target.value = '';
                    setFileName(null); // Reset the file name
                    setInvalid(true);
                }
            }
        }
    };
    return (

/*        <div>

            <div className={"w-full flex flex-col"}>
                <label htmlFor="email" className="text-left block text-[15px] font-semibold leading-9 tracking-tight text-[#0e1012]">
                    {title}
                </label>
                <label htmlFor="email" className="text-left block text-[13px] font-medium leading-9 tracking-tight text-[#566171]">
                    {subtitle && subtitle}
                </label>
            </div>

            <div className="flex items-center justify-center w-full relative mt-2 rounded-md shadow-sm">
                <label htmlFor="dropzone-file"
                       className={`flex flex-col items-center justify-center w-full h-64 border-2 ${invalid ? 'border-red-300 bg-red-50 ' : 'border-gray-300 bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'}  border-dashed rounded-lg cursor-pointer`}>
                    {
                        fileName === null && <div className="flex flex-col items-center justify-center pt-5 pb-6"
                                         onDragOver={handleDragOver}
                                         onDrop={handleDrop}
                        >
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className={`mb-2 text-sm ${invalid ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'}`}><span className="font-semibold">Click to upload</span> or
                                drag and drop</p>
                            <p className={`text-xs ${invalid ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'} `}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                    }
                    <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>

            </div>
        </div>*/

        <div className={"w-full flex flex-col"}>

            <div className={"w-full flex flex-col"}>
                <label htmlFor="email" className="text-left block text-[15px] font-semibold leading-9 tracking-tight text-[#0e1012]">
                    {title}
                </label>
                <label htmlFor="email" className="text-left block text-[13px] font-medium leading-9 tracking-tight text-[#566171]">
                    {subtitle && subtitle}
                </label>
            </div>
            <input
                className={`block w-full text-sm text-gray-900 border rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none bg-gray-50 ${invalid ? 'file:bg-red-300 file:text-white file:border-red-200 border-red-300' : 'file:bg-[#1f2937] file:text-white file:border-[#1f2937]'}   file:p-3 file:border-none  dark:placeholder-gray-400`}
                id="file_input" type="file"
                onChange={handleFileChange}
            />
        </div>



    )
}

/*
import { useEffect, useState } from "react";

export default function FileUpload({ title, subtitle, formSubmitted, required }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        if (formSubmitted && required && selectedFile === null) {
            setInvalid(true);
        }
    }, [formSubmitted]);

    const maxFileSize = 5 * 1024 * 1024; // 5MB size limit

    const handleFileChange = (event) => {
        // ... (no changes to this function)
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
            if (file.size > maxFileSize) {
                alert("File size exceeds the limit.");
            } else {
                const allowedTypes = [
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                    "image/gif",
                    "application/pdf",
                ];

                if (allowedTypes.includes(file.type)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setSelectedFile(reader.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert("Invalid File Type");
                }
            }
        }
    };

    return (
        <div>
            {/!* ... (no changes to the JSX for the input) *!/}
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
                    invalid
                        ? "border-red-300 bg-red-50 "
                        : "border-gray-300 bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                }  border-dashed rounded-lg cursor-pointer`}
            >
                {/!* ... (no changes to the rest of the JSX) *!/}
            </div>
        </div>
    );
}

*/
