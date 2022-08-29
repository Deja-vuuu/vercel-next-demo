
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function revalidate(req: NextApiRequest,
    res: NextApiResponse<any>) {
    try {
        await res.revalidate(`/isr`);
        return res.json({
            revalidated: true,
        });
    } catch (err) {
        return res.status(500).send("Error revalidate");
    }
}