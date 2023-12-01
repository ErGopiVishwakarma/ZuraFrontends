import React from 'react'
import LeftSideBar from '../Components/Project/LeftSideBar'
import { Outlet } from 'react-router-dom'

const Project = () => {
    return (
        <div className='flex'>
            <div>
                {/* left side bare will appear each project route  */}
                <LeftSideBar />
            </div>
            <div className='w-full px-16'>
                {/* project page main section here and this is nested route */}
                <Outlet />
            </div>
        </div>
    )
}

export default Project