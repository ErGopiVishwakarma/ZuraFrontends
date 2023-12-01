import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Spinner,
} from "@material-tailwind/react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { USERPROFILE } from "../../Redux/actionType";

function UserAuthPopup({ children }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const a = useSelector(store => console.log(store))

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
// login function 
    const login = () => {
        if (!email || !isValidEmail(email)) {
            alert('enter vailid email address')
            return;
        }
        const config = {
            email,
        };
        setLoading(true);
        axios
            .post(`http://localhost:8080/user`, config)
            .then((res) => {
                console.log(res)
                localStorage.setItem(
                    'zuraventure',
                    JSON.stringify(res.data),
                );
                dispatch({ type: USERPROFILE, payload: res.data })
                setTimeout(() => {
                    setLoading(false);
                    handleOpen()
                }, 2000);
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
                <DialogHeader className="text-2xl font-bold"></DialogHeader>
                <DialogBody className=''>
                    <div className="flex flex-col">
                        <lable className="pb-1">Email</lable>
                        <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="Type here" onChange={(e) => setEmail(e.target.value)} />
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
                    <Button variant="filled" className="bg-[#7E22CE] flex justify-center items-center w-[100px] px-4 py-2 text-sm" onClick={login}>
                        {
                            loading ? <Spinner /> : 'Submit'
                        }
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default UserAuthPopup