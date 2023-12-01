import React, { useContext, useEffect } from 'react'
import ProjectHeaderSection from './ProjectSection/ProjectHeaderSection'
import ProjectUploadPage from './ProjectSection/ProjectUploadPage'
import { Context } from '../../../Routes/ContextProvider'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { ALLEPISODES, EPISODES } from '../../../Redux/actionType'

const ProjectSection = () => {

  const { userProfile, projects } = useSelector((store) => store)
  const { selectedProject } = useContext(Context)
  const dispatch = useDispatch()

  const allProject = () => {
    if (!userProfile) {
      return
    }
    axios
      .get(`http://localhost:8080/episode/${selectedProject?._id || ''}`)
      .then((res) => {
        dispatch({ type: ALLEPISODES, payload: res.data })
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    allProject()
  }, [])

  return (
    <div className=''>
      {/* header section  */}
      <ProjectHeaderSection />
      {/* upload episode page  */}
      <ProjectUploadPage />
    </div>
  )
}

export default ProjectSection