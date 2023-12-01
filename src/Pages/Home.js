import React, { useEffect } from 'react'
import { Button } from "@material-tailwind/react";
import { VscGear } from "react-icons/vsc";
import { VscBell, VscAdd } from "react-icons/vsc";
import AllProjects from '../Components/Home/AllProjects';
import CreateNewProjectPopup from '../Components/Home/CreateNewProjectPopup';
import { useDispatch, useSelector } from 'react-redux';
import UserAuthPopup from '../Components/Home/UserAuthPopup';
import { ALLPROJECT, PROJECT } from '../Redux/actionType';
import axios from 'axios'


const Home = () => {

  const { userProfile, projects } = useSelector((store) => store)
  const dispatch = useDispatch()

  // fetching all project from server 
  const allProject = () => {
    if(!userProfile){
      return
    }
    axios
      .get(`http://localhost:8080/project/${userProfile?._id || ''}`)
      .then((res) => {
        dispatch({ type: ALLPROJECT, payload: res.data })
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    allProject()
  }, [])

  return (
    <div className='' style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* header section  */}
      <header className='flex justify-between px-8 h-20 items-center'>
        <div className='flex gap-2 items-baseline'>
          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          <p className=' text-[30px] font-extrabold text-[#7E22CE]' style={{ fontFamily: "'Roboto', sans-serif" }}>LAMA</p>
        </div>
        <div className='flex gap-5 '>
          <p className='text-bold'><VscGear className=' h-[30px] w-[30px] font-bold' /></p>
          <p><VscBell className=' h-[30px] w-[30px] font-bold' /></p>
        </div>
      </header>
      {/* showing popup based on user authentication  */}
      {
        userProfile && projects?.length > 0 ? <AllProjects /> : <div className='w-[70%] m-auto py-4'>
          <p className='text-center text-5xl pb-2 font-bold text-[#7E22CE]'>Create a New Project</p>
          {/* home image   */}
          <div className=' w-[380px] m-auto'>
            <img src='https://learn.g2.com/hubfs/web_developer.jpg' className='w-full rounded-lg' />
          </div>
          <div className='py-4'>
            <p className='text-center text-[#838383] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </p>
          </div>
          {/* create new project button based on condition, if user authenticate will see project popup otherwise auth popup   */}
          {
            userProfile ? <div className='flex justify-center'>
              <CreateNewProjectPopup><Button variant="filled" className=' flex gap-3 items-center text-lg normal-case'><span className=' rounded-full bg-white font-extrabold flex justify-center items-center'><VscAdd className='h-5 w-5 text-black' /></span>Create New Project</Button></CreateNewProjectPopup>
            </div> : <div className='flex justify-center'>
              <UserAuthPopup><Button variant="filled" className=' flex gap-3 items-center text-lg normal-case'><span className=' rounded-full bg-white font-extrabold flex justify-center items-center'><VscAdd className='h-5 w-5 text-black' /></span>Create New Project</Button></UserAuthPopup>
            </div>
          }
        </div>
      }




    </div>
  )
}

export default Home