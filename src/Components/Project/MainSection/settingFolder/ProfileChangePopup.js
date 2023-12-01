import React, { ReactNode, useState } from 'react';
import { Avatar, Dialog, DialogBody } from '@material-tailwind/react';
import { Initial } from '../../Types/reducerType';
import { useSelector } from 'react-redux';
import { memo } from 'react'


const ChangeProfilePicPopup = ({
    children,
    setAgainRender,
}) => {
    const [open, setOpen] = useState(false);
    const handleOpenFun = () => setOpen(!open);


    const handleImageChange = (
        e
    ) => {
        let files = e?.target?.files;
        if (files && files?.length > 0) {
            const formData = new FormData();
            formData.append('image', files[0], 'image.jpg');
            fetch(`http://localhost:8080/upload`, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    fetch(`http://localhost:8080/user/updatepic`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ image: data }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            handleOpenFun();
                            //   setAgainRender((prev) => !prev);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const divClass =
        'flex items-center justify-center p-3 border-b-[1px] border-solid border-gray-300 hover:bg-gray-300 rounded-lg text-[15px]';

    return (
        <>
            <div
                onClick={() => {
                    handleOpenFun();
                }}>
                {children}
            </div>
            <Dialog
                open={open}
                handler={handleOpenFun}
                size='xs'
                style={{ border: 'none', outline: 'none' }}>
                <DialogBody
                    divider
                    className='flex flex-col p-0 rounded-lg '
                    style={{
                        boxShadow:
                            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                    }}>
                    <div
                        className={`flex flex-col gap-1 py-6 border-b-[1px] border-solid border-gray-300 justify-center items-center`}>
                        <h1 className='text-lg  text-black'>Change Profile Photo</h1>
                    </div>
                    <input
                        type='file'
                        id='image-media'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                    <label
                        htmlFor='image-media'
                        className={`${divClass}  cursor-pointer  text-cyan-500 `}>
                        Upload Photo
                    </label>
                    <div
                        className={`${divClass} cursor-pointer text-black`}
                        onClick={handleOpenFun}>
                        <p>Cancel</p>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default memo(ChangeProfilePicPopup);