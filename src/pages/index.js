/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Index page
*/

import { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import Progress from 'components/Progress';
import ContainerJobs from 'components/Containers/Jobs';


const PageIndex = () => {

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {

        setTimeout(() => {

            setIsLoading(false);
            
        }, 1000);

    }, []);


	return (
		<Layout>
			<Progress isAnimating = { isLoading } />
			<main className="page-index full justify-center">
				<div className="container column">
					<div className="__page__head justify-center">
						<div className="__title">
							<h1>
								Vacantes <br/>
								Disponibles
							</h1>
						</div>
					</div>
					<div className="__contents justify-center">
						<ContainerJobs isLoading = { isLoading } setIsLoading = { setIsLoading } />
					</div>
				</div>
			</main>
		</Layout>
	);

};

export default PageIndex;
