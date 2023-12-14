import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import * as React from "react";

let TabsComponent = ({data})=>{

    return (
        <Tabs value={`${data[0].label}`} className={'h-full w-full flex flex-col gap-y-20'}>
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
        </Tabs>
    );
}

export default TabsComponent;