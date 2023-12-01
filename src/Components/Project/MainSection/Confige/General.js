import React from 'react'

const General = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className="flex flex-col">
                <lable className="pb-1 font-bold">Chatbot Name</lable>
                <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="description" />
                <p className=" text-red-700 text-[12px] hidden">Fileds are required.</p>
            </div>
            <div className="flex flex-col">
                <lable className="pb-1 font-bold">Welcome Message</lable>
                <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="description" />
                <p className=" text-red-700 text-[12px] hidden">Fileds are required.</p>
            </div>
            <div className="flex flex-col">
                <lable className="pb-1 font-bold">Input Placeholder</lable>
                <input className="w-full h-12 rounded-lg border-[1px] border-solid border-gray-600 pl-5" placeholder="description" />
                <p className=" text-red-700 text-[12px] hidden">Fileds are required.</p>
            </div>
        </div>
    )
}

export default General