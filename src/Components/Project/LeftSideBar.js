import {
    Card,
    Typography,
    List,
    ListItem,
} from "@material-tailwind/react";
import { VscGear, VscSettings } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


function LeftSideBar() {
    return (
        <Card className="h-[100vh] w-[320px]  shadow-xl shadow-blue-gray-900/5 border-solid border-r-[1px] border-black bg-[#F3E8FF] gap-0 sticky top-0 rounded-none">
            <div className=" px-8 pt-4 flex flex-col gap-2">
                <NavLink to='/'>
                    <Typography variant="h5" color="blue-gray">
                        LAMA
                    </Typography>
                </NavLink>
                <p className="text-sm">Podcast upload flow</p>
            </div>
            <List className="px-4">
                <NavLink to='/project' >
                    <ListItem className="flex gap-3 hover:bg-blue-gray-100 rounded-3xl">
                        <div className="flex justify-center items-center rounded-full h-5 w-5 bg-gray-400"><p className="text-sm text-black">1</p></div>
                        <p className="text-black">Project</p>
                    </ListItem>
                </NavLink>
                <NavLink to='/project/configuration' >
                    <ListItem className="flex gap-3 hover:bg-blue-gray-100 rounded-3xl">
                        <div className="flex justify-center items-center rounded-full h-5 w-5 bg-gray-400"><p className="text-sm text-black">2</p></div>
                        <p className="text-black">Widget Configuration</p>
                    </ListItem>
                </NavLink>
                <ListItem className="flex gap-3 hover:bg-blue-gray-100 rounded-3xl">
                    <div className="flex justify-center items-center rounded-full h-5 w-5 bg-gray-400"><p className="text-sm text-black">3</p></div>
                    <p className="text-black">Deployment</p>
                </ListItem>
                <ListItem className="flex gap-3 hover:bg-blue-gray-100 rounded-3xl">
                    <div className="flex justify-center items-center rounded-full h-5 w-5 bg-gray-400"><p className="text-sm text-black">4</p></div>
                    <p className="text-black">Pricing</p>
                </ListItem>
            </List>

            <div className="absolute bottom-0 h-[70px] w-full box-border m-auto border-t-[1px] border-solid border-gray-600 flex items-center gap-3 px-4 ">
                <NavLink to='/project/setting' style={{width:'100%'}}>
                    <ListItem className="flex gap-3 hover:bg-blue-gray-100 rounded-3xl">
                        <div className="flex justify-center items-center rounded-full h-5 w-5 bg-gray-400 "><p className="text-sm text-black"><VscGear /></p></div>
                        <p className="text-black">Setting</p>
                    </ListItem>
                </NavLink>
            </div>
        </Card>
    );
}

export default LeftSideBar