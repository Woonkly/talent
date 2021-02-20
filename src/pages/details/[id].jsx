/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Job details page /details/:id
*/

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout   from 'components/Layout';
import JobHead  from 'components/Jobs/JobHead';
import Progress from 'components/Progress';
import ContainerDetails from 'components/Containers/Jobs/Details';


const PageIndex = () => {

    const router = useRouter();
    const [jobs, setJobs] = useState(false);
    const [index, setIndex] = useState(null);
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        if (router?.query?.id) {

            const { query } = router;
            setIndex(Number(query.id));

        }

    }, [router]);


    useEffect(() => {

        if (jobs && index) { 

            const detailed = jobs?.find(item => item.id === index);
            detailed && setDetails(detailed);
        }

    }, [index, jobs]);


    useEffect(() => {

        const getDetails = async () => {

			setIsLoading(true);

			try {

		  		const response = await fetch('/static/data.json');
		  		const json = await response.json();
		  		setJobs(json?.jobs);
				setIsLoading(false);

			} catch (error) {
				setIsLoading(false);
			}
		};

        getDetails();

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
