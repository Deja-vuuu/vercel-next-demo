import { useRouter } from "next/router";

import Image from "next/image"
import type { NextPage, GetStaticProps } from 'next'
import { useEffect } from "react";
import { range } from "lodash";
import Card from "./conponents/card"


const Index: NextPage = (props: any) => {
    const { data } = props


    const router = useRouter();
    const { id } = router?.query;
    console.log('data', data);

    useEffect(() => {

    }, [])
    return (
        <div>
            1123
            {id}
            {
                data?.name
            }
            <Image src={data?.sprites?.other?.["official-artwork"]?.front_default}
                width={200} height={200} alt="test" />

            {
                data.stats?.map((item: any, index: number) => {
                    return <Card data={item.base_stat} key={index} />
                })
            }
        </div>
    )
}


export const getStaticProps: GetStaticProps = async (context: any) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + 51).then((data) => {
        return data.json();
    });
    const { name, sprites, stats } = res;
    return {
        props: {
            data: {
                name, sprites, stats
            }
        },
        // revalidate:10
    };
}


export default Index;
