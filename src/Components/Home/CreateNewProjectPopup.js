import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  useSelect,
  Spinner,
} from "@material-tailwind/react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { PROJECT } from "../../Redux/actionType";

function CreateNewProjectPopup({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const userProfile = useSelector((store) => store.userProfile)

  // creating new project 
  const postProject = () => {
    if(!userProfile){
      return
    }
    if (!name) {
      setError(true)
      return;
    }
    setError(false)
    const config = {
      name, authId: userProfile._id
    };
    setLoading(true);
    axios
      .post(`http://localhost:8080/project`, config)
      .then((res) => {
        dispatch({ type: PROJECT, payload: res.data })
        setLoading(false)
        handleOpen()
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <span onClick={handleOpen} variant="gradient">
        {children}
      </span>
      <Dialog open={open} handler={handleOpen} size="md" className="gap-1" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <DialogHeader className="text-2xl font-bold">Create Project</DialogHeader>
        <DialogBody className=''>
          <div className="flex gap-2 flex-col">
            <lable className="pb-2">Enter Project Name</lable>
            <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="Type here" onChange={(e) => setName(e.target.value)} />
            <p className={` text-red-700 text-sm ${error ? 'block' : 'hidden'}`}>Project name can't be empty.</p>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="filled" className="bg-[#7E22CE] flex justify-center items-center w-[100px] px-4 py-2 text-sm" onClick={postProject}>
            {
              loading ? <Spinner /> : 'Proceed'
            }
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default CreateNewProjectPopup