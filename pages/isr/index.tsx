import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import TimeSection from '@/components/TimeSection';

import { TimeResponse } from '@/types/TimeResponse';

type ISRPageProps = {
    dateTime: string;
};

const ISRPage = ({ dateTime }: ISRPageProps) => {
    return (

        <main>
            <TimeSection
                title='ISR'
                description='If you visit after the revalidate time (5s), your next full refresh visit will trigger fetch.'
                dateTime={dateTime}
            />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get<TimeResponse>('https://worldtimeapi.org/api/ip');

    return {
        props: { dateTime: res.data.datetime },
        revalidate: 5,
    };
};
export default ISRPage


