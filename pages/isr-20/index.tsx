import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';
import TimeSection from '@/components/TimeSection';
import { TimeResponse } from '@/types/TimeResponse';

type ISR20PageProps = {
    dateTime: string;
};

const ISR20Page = ({ dateTime }: ISR20PageProps) => {
    return (
        <main>
            <TimeSection
                title='ISR20'
                description='If you visit after the revalidate time (20s), your next full refresh visit will trigger fetch.'
                dateTime={dateTime}
            />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get<TimeResponse>('https://worldtimeapi.org/api/ip');

    return {
        props: { dateTime: res.data.datetime },
        revalidate: 20,
    };
};


export default ISR20Page