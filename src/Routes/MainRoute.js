import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Project from '../Pages/Project'
import ProjectSection from '../Components/Project/MainSection/ProjectSection'
import Configuration from '../Components/Project/MainSection/Configuration'
import EditTranscript from '../Components/Project/MainSection/EditTranscript'
import Setting from '../Components/Project/MainSection/Setting'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />}>
                <Route path='' element={<ProjectSection />} />
                <Route path='configuration' element={<Configuration />} />
                <Route path='transcript/:id' element={<EditTranscript />} />
                <Route path='setting' element={<Setting />} />
            </Route>
        </Routes>
    )
}

export default MainRoute