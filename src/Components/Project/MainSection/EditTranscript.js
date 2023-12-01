import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import ProjectHeaderSection from './ProjectSection/ProjectHeaderSection'
import { VscEdit } from 'react-icons/vsc';

const EditTranscript = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [content, setContent] = useState('Editable content');

    const handleToggleEdit = () => {
        setIsEditable(!isEditable);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div>
            <ProjectHeaderSection />
            <div className='flex justify-between pt-5 items-center'>
                <p className=' text-[25px] font-extrabold text-[#7E22CE]'>EditTranscript</p>
                <div className={`gap-4 px-4 py-2 ${isEditable? 'flex': 'hidden'} `}>
                    <Button variant='outlined' className='px-4 py-2 text-red-600 rounded-3xl'>Discard</Button>
                    <Button variant='filled' className='px-4 py-2 rounded-3xl'>Save & Exit</Button>
                </div>
            </div>


            <div className='relative h-fit p-5 border-solid border-[1px] border-gray-700 rounded-xl mt-6'>
                <Button variant='filled' onClick={handleToggleEdit} className='px-2 py-1 rounded-3xl normal-case flex gap-1 text-[12px] '>
                    <span><VscEdit /></span>Edit mode
                </Button>
                <div
                    contentEditable={isEditable}
                    onInput={handleContentChange}
                    className=' min-h-[200px] max-h-[350px] overflow-y-auto  focus:outline-none pt-5'
                >
                    {content}

                </div>

            </div>
        </div>
    )
}

export default EditTranscript