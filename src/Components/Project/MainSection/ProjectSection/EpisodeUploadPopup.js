import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Avatar,
  Spinner,
} from "@material-tailwind/react";
import { VscClose } from "react-icons/vsc";
import axios from "axios";
import { Context } from "../../../../Routes/ContextProvider";
import { useDispatch } from "react-redux";
import { EPISODES } from "../../../../Redux/actionType";

function EpisodeUploadPopup({ children, el }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const [name, setName] = useState()
  const [description, setDesciption] = useState()
  const [error, setError] = useState(false)
  const { selectedProject } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  // post episode function 
  const postEpisode = () => {
    console.log('inter',name,description, )
    if(!selectedProject){
      return
    }
    if (!name || !description) {
      setError(true)
      return;
    }
    setError(false)
    console.log(selectedProject)
    const config = {
      name, description, projectId: selectedProject?._id
    };
    setLoading(true);
    axios
      .post(`http://localhost:8080/episode`, config)
      .then((res) => {
        dispatch({ type: EPISODES, payload: res.data })
        setLoading(false)
        handleOpen()
      })
      .catch((err) => {
        setLoading(false);
        alert('something went wrong please try again..')
        setLoading(false);
      });
  };

  return (
    <>
      <span onClick={handleOpen} variant="gradient">
        {children}
      </span>
      <Dialog open={open} handler={handleOpen} size="lg" className="gap-1 p-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <DialogHeader className="text-2xl font-bold flex justify-between">
          <div className="flex gap-5 items-center">
            <Avatar src={el.image} className="h-10 w-10" />
            <p>{`${el.title} ${el.desc}`}</p>
          </div>
          <div className="cursor-pointer" onClick={handleOpen}><VscClose className="h-9 w-9" /></div>
        </DialogHeader>
        <DialogBody className=' flex gap-2 flex-col'>
          <div className="flex flex-col">
            <lable className="pb-1">Name</lable>
            <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <p className=" text-red-700 text-[12px] hidden">Fileds are required.</p>
          </div>
          <div className="flex flex-col">
            <lable className="pb-1">Description</lable>
            <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="description" onChange={(e) => setDesciption(e.target.value)} />
            <p className=" text-red-700 text-[12px] hidden">Fileds are required.</p>
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
          <Button variant="filled" className="bg-[#7E22CE] flex justify-center items-center w-[100px] px-4 py-2 text-sm" onClick={postEpisode}>
            {
              loading ? <Spinner /> : 'Submit'
            }
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default EpisodeUploadPopup