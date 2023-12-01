import { Avatar, Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import CreateNewProjectPopup from './CreateNewProjectPopup'
import { VscAdd } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Context } from '../../Routes/ContextProvider'

const AllProjects = () => {
    
    const projects = useSelector(store=>store.projects)
    const {setSelectedProject} = useContext(Context)

    return (
        <div className='w-[70%] m-auto pt-10' style={{ fontFamily: "'Roboto', sans-serif" }}>
            <div className='flex justify-between'>
                <h1 className='text-[#7E22CE] text-[35px] font-bold'>Projects</h1>
                <div className='flex justify-center'>
                {/* project popup button for create new project  */}
                    <CreateNewProjectPopup><Button variant="filled" className=' flex gap-3 items-center text-md normal-case py-2 px-4'><span className=' h-5 w-5 rounded-full bg-white font-extrabold flex justify-center items-center'><VscAdd className='h-3 w-3 text-black font-extrabold' /></span>Create New Project</Button></CreateNewProjectPopup>
                </div>
            </div>
            <div className='pt-7 grid grid-cols-3 md:grid-cols-2 gap-y-8 w-full'>
            {/* mapping project data  */}
                {
                    projects?.map((el) => {
                        return <NavLink to={`/project`} >
                            <div className='flex gap-3  p-2 pr-10 w-fit rounded-lg items-start border-[1px] border-solid border-[#969696]' onClick={()=>setSelectedProject(el)} style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                <div className='flex justify-center items-center bg-blue-gray-400 h-[75px] w-[75px] rounded-lg'><p className='text-[40px]'>SP</p></div>
                                <div className='flex flex-col'>
                                    <p className='font-bold mt-2 text-md text-[#7E22CE]'>{el.name}</p>
                                    <p className='text-[12px] text-[#969696] font-bold'>4 episodes</p>
                                    <p className='pt-2 text-[11px] text-[#969696]'>last edited a week ago</p>
                                </div>
                            </div>
                        </NavLink>
                    })
                }
            </div>
        </div>
    )
}

export default AllProjects