import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

let TabsComponent = ({data})=>{

    return (
        <Tabs value={`${data[0].label}`} className={'h-full w-full'}>
            <TabsHeader className={'bg-gray-100 w-[90%] md:w-1/2 mx-auto'}>
                {data.map(({ label}) => (
                    <Tab className={'text-vm-blue text-sm'} key={label} value={label}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className={'h-full w-full'}>
                {data.map(({ label, component }) => (
                    <TabPanel className={'h-full'} key={label} value={label}>
                        {component}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}

export default TabsComponent;