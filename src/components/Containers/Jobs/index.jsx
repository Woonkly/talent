/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Container of all Jobs
*/

import useFetch from 'hooks/useFetch';
import JobItem  from 'components/Jobs/JobItem';

const ContainerJobs = () => {

    const { response } = useFetch('/static/data.json', {});
    const jobs = response?.jobs;

    return(
        <div className="__container__jobs column">
            { jobs?.map((job, key) =>
                <div className = "column" key = { key }>
                    <JobItem title = { job.title } day = { job.day } remote = { job.remote } location = { job.location } index = { job.id } />
                    <div className="__divider full"></div>
                    <div className="white-space-32"></div>
                </div>
            )}
        </div>
    );

};

export default ContainerJobs;