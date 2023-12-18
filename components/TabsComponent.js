/*import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";*/
import * as React from "react";
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';
import {useState} from "react";



let TabsComponent = ({data})=>{

    const [selectedTab, setSelectedTab] = useState(data[0].label);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const dummyData = [
        { label: 1, component: "Component for tab 1" },
        { label: 2, component: "Component for tab 2" },
        { label: 3, component: "Component for tab 3" },
    ];
    return (
       /* <Tabs value={`${data[0].label}`} className={'h-full w-full flex flex-col gap-y-20'}>
            <TabsHeader className={'bg-gray-100 w-[90%] mx-auto flex justify-center items-center gap-x-20'}>
                {data.map(({ label}) => (
                    <Tab className={'text-black text-sm'} key={label} value={label}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className={'h-full w-full'}>
                {data.map(({ label, component }) => (
                    <TabPanel className={'h-full lg:w-[70%] w-full mx-auto'} key={label} value={label}>
                        {component}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>*/

        <Tabs defaultValue={selectedTab} onChange={handleTabChange} className={'h-full w-full flex flex-col gap-y-20'}>
            {/*<TabsList className={'mx-auto max-w-max rounded-lg bg-blue-gray-50 p-[.25rem]'}>*/}
            <TabsList className={'rounded-lg p-[.25rem] bg-gray-100 w-[90%] mx-auto flex justify-center items-center gap-x-20'}>
                {data.map(({ label }) => (
                    <Tab
                        key={label}
                        className={`px-[.5rem] py-[.25rem] w-full h-full ${
                            selectedTab === label ? 'bg-white shadow-md rounded-md text-black' : ''
                        }`}
                        value={label}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsList>
            {data.map(({ label, component }) => (
                <TabPanel className={'h-full w-full mx-auto md:w-1/2'} key={label} value={label}>
                    {component}
                </TabPanel>
            ))}
        </Tabs>
    );
}

export default TabsComponent;