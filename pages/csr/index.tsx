import { useState, useEffect } from 'react'
import axios from 'axios';
import TimeSection from 'components/TimeSection';
import { TimeResponse } from 'types/TimeResponse';

const CSRPage = () => {
    const [dateTime, setDateTime] = useState<string>();
    useEffect(() => {
        axios
            .get<TimeResponse>('https://worldtimeapi.org/api/ip')
            .then((res) => {
                setDateTime(res.data.datetime);
                return res.data.datetime;
            })
            .catch((error) => console.error(error));
    }, []);

    return <main>
        <TimeSection
            dateTime={dateTime}
            title='CSR'
            description='Fetched every render, on client side. Notice the loading.'
        />
    </main>;
}


export default CSRPage
