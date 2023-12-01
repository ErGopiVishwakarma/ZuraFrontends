import { Avatar, Button } from '@material-tailwind/react'
import React from 'react'
import EpisodeUploadPopup from './EpisodeUploadPopup'
import ProjectEpisodesTable from './ProjectEpisodesTable'
import { useSelector } from 'react-redux'

const upload = [
    {
        image: 'https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png',
        title: 'Upload',
        desc: "Youtube  Video"
    },
    {
        image: 'https://th.bing.com/th/id/OIP.bGE2gLiQbhDsNgItxxDRmAHaHa?rs=1&pid=ImgDetMain',
        title: 'Upload',
        desc: "Spotify Poadcast"
    },
    {
        image: 'https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png',
        title: 'Upload',
        desc: "Youtube  Video"
    },
    {
        image: 'https://th.bing.com/th/id/OIP.bGE2gLiQbhDsNgItxxDRmAHaHa?rs=1&pid=ImgDetMain',
        title: 'Upload',
        desc: "Spotify Poadcast"
    },
    {
        image: 'https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png',
        title: 'Upload',
        desc: "Youtube  Video"
    },
    {
        image: 'https://th.bing.com/th/id/OIP.bGE2gLiQbhDsNgItxxDRmAHaHa?rs=1&pid=ImgDetMain',
        title: 'Upload',
        desc: "Spotify Poadcast"
    }

]

const ProjectUploadPage = () => {

    const episodes = useSelector(store => store.episodes)

    return (
        <div className=' overflow-auto'>
            <p className=' text-[25px] font-extrabold text-[#7E22CE] pb-4'>Upload</p>
            <div className='grid grid-cols-3 w-full gap-x-6 gap-y-6 justify-between'>
                {
                    upload.map((el) => {
                        return <EpisodeUploadPopup el={el}>
                            <div className='flex p-4 gap-3 rounded-lg border-[1px] border-solid border-[#969696] w-fit pr-10' style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                <Avatar src={el.image} className='h-10 w-10' />
                                <div>
                                    <p className='text-sm'>{el.title}</p>
                                    <p className='text-sm'>{el.desc}</p>
                                </div>
                            </div>
                        </EpisodeUploadPopup>
                    })
                }
            </div>
            <p className='py-2 text-center'>or</p>
            {
                episodes.length > 0 ? <ProjectEpisodesTable /> : <div className='w-full p-10 flex flex-col justify-center items-center text-center border-2 border-dotted border-gray-700 rounded-xl text-sm gap-2'>
                    <img src='https://www.freeiconspng.com/uploads/upload-icon-3.png' className='h-12 w-20 mb-3' />
                    <p className='text-#49454F]'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                    <p>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
                    <Button variant='outlined' className='rounded-3xl mt-3' color='none'>Select File</Button>
                </div>
            }
        </div>
    )
}

export default ProjectUploadPage