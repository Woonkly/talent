/**
 * @version 1.0.0
 * @author Woonkly - Sergio
*/

import Link from 'next/link';


/**
 * @description <JobItem /> Component
 * @param { String } title: Title of the position 
 * @param { String } day: Full time / Part time / Freelance
 * @param { Boolean } remote: Flag for remote / in place
 * @param { String } location: Location of the job
 * @param { Number } index: Current Index of the element
 */
const JobItem = ({ title = "", day = "", remote = false, location = "", index }) => {

    return(
        <div className="__job__list row-responsive align-center full">
            <div className="__job__summary column">
                <div className="__title">
                    <h2 className="weight-semi">
                        { title }
                    </h2>
                </div>
                <div className="white-space-24"></div>
                <div className="__job__resume row align-center">
                    <div className="__element row">
                        <span>
                            { day }
                        </span>
                    </div>
                    <div className="__dot"></div>
                    <div className="__element row --remote">
                        <span>
                            { remote ? "Remoto" : "Presencial" }
                        </span>
                    </div>
                    <div className="__element --location row align-center">
                        <div className="responsive-img --margin-right-4">
                            <img src = "/images/jobs/location.svg" alt = "Icono de ubicación" />
                        </div>
                        <span>
                            { location }
                        </span>
                    </div>
                </div>
            </div>
            <div className="__job__cta row align-center">
                <Link href = { `/details/${index}` }>
                    <a className="uppercase weight-bold">
                        POSTULA
                    </a>
                </Link>
            </div>
        </div>
    );

};

export default JobItem;