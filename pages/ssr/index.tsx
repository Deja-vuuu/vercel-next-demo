import axios from 'axios';
import * as React from 'react';
import { GetServerSideProps } from 'next';

import TimeSection from '@/components/TimeSection';

import { TimeResponse } from '@/types/TimeResponse';

type SSRPageProps = {
    dateTime: string;
};

export default function SSRPage({ dateTime }: SSRPageProps) {
    return (
        <>
            <main>
                <TimeSection
                    title='SSR'
                    description='Fetched every render, on server side.'
                    dateTime={dateTime}
                />
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get<TimeResponse>('https://worldtimeapi.org/api/ip');
    console.log('test----ssr')
    return {
        props: { dateTime: res.data.datetime },
    };
};
