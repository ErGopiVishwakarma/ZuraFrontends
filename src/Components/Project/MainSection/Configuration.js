import React, { useState, useEffect } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Spinner,
} from '@material-tailwind/react';
import { memo } from 'react'
import ProjectHeaderSection from './ProjectSection/ProjectHeaderSection';
import General from './Confige/General';
import Display from './Confige/Display';

const ProfilePost = () => {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div>
            <ProjectHeaderSection />
            <p className=' text-[25px] font-extrabold text-[#7E22CE] py-4'>Configuration</p>
            <Tabs value={activeTab} animate={'none'}>
                <TabsHeader
                    className='rounded-none border-b border-blue-gray-100 bg-transparent p-0 gap-0 flex justify-start tracking-wider w-[400px]'
                    indicatorProps={{
                        className:
                            'bg-transparent border-b-[1px] border-gray-900 shadow-none rounded-none',
                    }}>
                    <Tab
                        key={'general'}
                        value={'general'}
                    >
                        <p className='text-xs'>General</p>
                    </Tab>
                    <Tab
                        key={'display'}
                        value={'display'}
                    >
                        <p className='text-xs'>Display</p>
                    </Tab>
                    <Tab
                        key={'advanced'}
                        value={'advanced'}
                    >
                        <p className='text-xs'>Advanced</p>
                    </Tab>
                </TabsHeader>
                <TabsBody >
                    {/* here is the first panel  */}
                    <TabPanel key={'general'} value={'general'} className='px-0'>
                        <General />
                    </TabPanel>
                    <TabPanel key={'display'} value={'display'} className='px-0'>
                        <Display />
                    </TabPanel>
                    <TabPanel key={'advanced'} value={'advanced'} className='px-0'>
                        <div>gopi</div>
                    </TabPanel>

                </TabsBody>
            </Tabs>
        </div>
    );
};

export default memo(ProfilePost);
