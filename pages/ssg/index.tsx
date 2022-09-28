import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import TimeSection from '@/components/TimeSection';

import { TimeResponse } from '@/types/TimeResponse';

type SSGPageProps = {
    dateTime: string;
};

const SSGPage = ({ dateTime }: SSGPageProps) => {
    return (
        <main>
            <TimeSection
                title='SSG'
                description='Fetched only once, when running yarn build on deployment.'
                dateTime={dateTime}
            />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get<TimeResponse>('https://worldtimeapi.org/api/ip');
    console.log('test----ssg')
    return {
        props: { dateTime: res.data.datetime },
    };
};


export default SSGPage