import { Option, Select } from '@material-tailwind/react'
import React from 'react'
import { VscBell, VscGear, VscHome } from 'react-icons/vsc'

const ProjectHeaderSection = () => {
    return (
        <header className='flex justify-between h-16 items-center'>
            <div className='flex gap-2 items-center'>                
                <p className=' text-[22px] font-extrabold text-[#7E22CE]'><VscHome /></p>
                <p className=' text-[18px] font-bold'>/ Sample Project</p>
                <p className=' text-[18px] font-extrabold text-[#7E22CE]'>/ Upload</p>
            </div>
            <div className='flex gap-5 '>
                <select>
                <option>us</option>
                    <option>ind</option>
                </select>
                <p><VscBell className=' h-[22px] w-[22px] font-bold' /></p>
            </div>
        </header>
    )
}

export default ProjectHeaderSection