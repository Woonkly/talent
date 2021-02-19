/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Index page
*/

import Layout from 'components/Layout';
import ContainerJobs from 'components/Containers/Jobs';


const PageIndex = () => {
	return (
		<Layout>
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
						<ContainerJobs />
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default PageIndex;
