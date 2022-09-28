import axios from 'axios';
import * as React from 'react';
import { GetServerSideProps } from 'next';

import Content from '@/components/Content';

import { TimeResponse } from '@/types/TimeResponse';
import { getPageData } from 'apis'

type SSRPageProps = {
    pageData: string;
};

export default function SSRPage({ pageData }: SSRPageProps) {
    return (
        <>
            <main>
                <Content
                    title='SSR'
                    description='Fetched every render, on server side.'
                    data={pageData}
                />
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const pageData = await getPageData(id)
    return {
        props: { pageData: pageData },
    };
};
