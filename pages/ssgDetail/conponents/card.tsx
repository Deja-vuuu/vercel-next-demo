import { useRouter } from "next/router";

import Image from "next/image"
import type { NextPage } from 'next'
import { useEffect } from "react";


const Card = (props: any) => {
    const { data } = props


    const router = useRouter();

    useEffect(() => {

    }, [])
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}


export default Card;
