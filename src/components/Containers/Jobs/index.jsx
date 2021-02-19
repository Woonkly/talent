/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Container of all Jobs
*/

import { jobs } from 'static/data.json';
import JobItem  from 'components/Jobs/JobItem';

const ContainerJobs = () => {

    return(
        <div className="__container__jobs column">
            { jobs?.map((job, key) =>
                <div className = "column" key = { key }>
                    <JobItem title = { job.title } day = { job.day } remote = { job.remote } location = { job.location } index = { key } />
                    <div className="__divider full"></div>
                    <div className="white-space-32"></div>
                </div>
            )}
        </div>
    );

};

export default ContainerJobs;