import { Avatar, Button } from '@material-tailwind/react'
import React from 'react'
import ProjectHeaderSection from './ProjectSection/ProjectHeaderSection'
import userlogo from '../../../Images/userlogo.jpg'

const Setting = () => {
    return (
        <div>
        {/* project header section  */}
            <ProjectHeaderSection />
            <p className=' text-[25px] font-extrabold text-[#7E22CE] py-4'>Account Settings</p>
            <div className='mt-1'>
                <div className='flex justify-between items-center'>
                    <div className='h-[150px] w-[150px]'>
                        <Avatar src={"" ? "" : userlogo} className='h-[150px] w-[150px]' />
                    </div>
                    <div>
                        <lable>username</lable>
                        <input className="w-[340px] h-10 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="description" />
                    </div>
                    <div>
                        <lable>email</lable>
                        <input className="w-[340px] h-10 rounded-lg border-[1px] border-solid border-gray-600 pl-5 cursor-none focus:outline-none" value='gopi' placeholder="description" readOnly />
                    </div>
                </div>
                <div>
                    <p className=' text-[25px] font-extrabold text-[#7E22CE] py-4'>Subscriptions</p>
                    <div className='p-3 rounded-lg flex justify-between bg-[#7E22CE] items-center'>
                        <p className='text-white'>You are currently on the Ques AI Basic Plan!</p>
                        <Button variant='filled' className='bg-white text-black'>Upgrade</Button>
                    </div>
                    <p className=' text-[14px] font-extrabold text-red-600 py-4'>cancel subscription</p>
                </div>
            </div>
        </div>
    )
}

export default Setting