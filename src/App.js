import { useDispatch, useSelector } from "react-redux";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import MainRoute from "./Routes/MainRoute";
import axios from 'axios'
import { useEffect } from "react";
import { ALLPROJECT, PROJECT } from "./Redux/actionType";
import { useLocation } from "react-router-dom";

function App() {

  const { userProfile, projects } = useSelector((store) => store)
  const dispatch = useDispatch()
  const location = useLocation()

  const allProject = () => {
    if(!userProfile){
      return
    }
    console.log(userProfile)
    axios(`http://localhost:8080/project/${userProfile?._id}`)
      .then((res) => {
        console.log(res,'this isgopi')
        dispatch({ type: ALLPROJECT, payload: res.data })
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    console.log('gopi')
    allProject()
  },[location.pathname])

  const a = useSelector(store=>console.log(store))

  return (
    <div className="">
      <MainRoute />
    </div>
  );
}

export default App;
