/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Job details page /details/:id
*/

import Layout   from 'components/Layout';
import JobHead  from 'components/Jobs/JobHead';
import ContainerDetails from 'components/Containers/Jobs/Details';


export async function getStaticPaths() {

    const response = await fetch('https://talent.woonkly.com/static/data.json');
    const json = await response.json();

    return {
        paths: json?.jobs?.map(jobsId => {
            return {
                params: {
                    id: `${jobsId.id}`
                }
            }
        }), fallback: false
    }    

};

export async function getStaticProps({ params }) {

    const response = await fetch('https://talent.woonkly.com/static/data.json');
    const json = await response.json();
    const details = json?.jobs?.find(item => Number(item.id) === Number(params.id));

    return {
        props: details
    };

};

const PageIndex = ({ title, day, remote, location, details }) => {

	return (
		<Layout>
			<main className="page-details full column">
                <div className="justify-center full">
                    <div className="container column">
                        <div className="justify-center">
                            <JobHead title = { title } day = { day } remote = { remote } location = { location } />
                        </div>
                        <div className="__contents justify-center">
                            <ContainerDetails details = { details } />
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
