import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';

import Content from '@/components/Content';

import { getPageData } from 'apis'
import { range } from "lodash";

type SSGPageProps = {
    pageData: any;
};

const SSGPage = ({ pageData }: SSGPageProps) => {
    return (
        <main>
            <Content
                title='SSG'
                description='Fetched only once, when running yarn build on deployment.'
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

export default SSGPage