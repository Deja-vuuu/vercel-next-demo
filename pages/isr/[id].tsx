import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import Content from '@/components/Content';

import { getPageData } from 'apis'
import { range } from "lodash";

type ISRPageProps = {
    pageData: any;
};

const ISRPage = ({ pageData }: ISRPageProps) => {
    return (

        <main>
            <Content
                title='ISR'
                description='If you visit after the revalidate time (5s), your next full refresh visit will trigger fetch.'
                data={pageData}
            />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async (context: any) => {

    const { id } = context.params;
    const pageData = await getPageData(id)

    return {
        props: { pageData: pageData },
        revalidate: 5,
    };
};

export async function getStaticPaths(context: any) {
    return {
        paths: range(1, 10).map((id) => {
            return {
                params: {
                    id: String(id)
                }
            }
        }),
        fallback: "blocking"
    }
}
export default ISRPage


