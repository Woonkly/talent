/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Job details page /details/:id
*/

import { useState, useEffect } from 'react';
import Layout   from 'components/Layout';
import { jobs } from 'static/data.json';
import { useRouter } from 'next/router';
import JobHead from 'components/Jobs/JobHead';
import ContainerDetails from 'components/Containers/Jobs/Details';
import Progress from 'components/Progress';


const PageIndex = () => {

    const router = useRouter();
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const getDetails = index => {
            
        setDetails(jobs[index]);

    };


    useEffect(() => {

        if (router?.query?.id) {

            const { query } = router;
            getDetails(Number(query.id));

        }

    }, [router]);

    useEffect(() => {

        setTimeout(() => {

            setIsLoading(false);
            
        }, 1200);

    }, []);


	return (
		<Layout>
            <Progress isAnimating = { isLoading } />
			<main className="page-details full column">
                <div className="justify-center full">
                    <div className="container column">
                        <div className="justify-center">
                            <JobHead title = { details.title } day = { details.day } remote = { details.remote } location = { details.location } />
                        </div>
                        <div className="__contents justify-center">
                            <ContainerDetails details = { details.details } />
                        </div>
                    </div>
                </div>
                <div className="__cta justify-center">
                    <div className="container column">
                        <div className="__title justify-center">
                            <h3 className="color-white weight-regular">
                                Postula
                            </h3>
                        </div>
                        <div className="white-space-16"></div>
                        <div className="__email justify-center">
                            <a href="mailto:talent@woonkly.com" className="color-white weight-bold">
                                talent@woonkly.com
                            </a>
                        </div>
                    </div>
                </div>
			</main>
		</Layout>
	);

};

export default PageIndex;
