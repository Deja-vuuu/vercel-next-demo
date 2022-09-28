import axios from 'axios';
import * as React from 'react';
import { GetStaticProps } from 'next';
import Content from '@/components/Content';
import { getPageData } from 'apis'
import { range } from "lodash";
type ISR20PageProps = {
    pageData: any;
};

const ISR20Page = ({ pageData }: ISR20PageProps) => {
    return (
        <main>
            <Content
                title='ISR20'
                description='If you visit after the revalidate time (20s), your next full refresh visit will trigger fetch.'
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
        revalidate: 20 * 60,
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

export default ISR20Page