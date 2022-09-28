import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Content from 'components/Content';
import { useAsyncEffect } from 'ahooks';

import { getPageData } from 'apis';

const CSRPage = () => {
    const [pageData, setPageData] = useState<any>();
    const router = useRouter();
    const { id } = router?.query;

    useAsyncEffect(async () => {
        if (id) {
            const pageData = await getPageData(id);
            setPageData(pageData);
        }
    }, [id]);

    return (
        <main>
            <Content
                data={pageData}
                title='CSR'
                description='Fetched every render, on client side. Notice the loading.'
            />
        </main>
    );
};

export default CSRPage;
