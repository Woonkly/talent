/**
 * @version 1.0.0
 * @author Woonkly - Sergio
*/

import { useContext }   from 'react';
import { ThemeContext } from 'theme/context';
import Link from 'next/link';


/**
 * @description <Jobhead /> Component
 * @param { String } title: Title of the position 
 * @param { String } day: Full time / Part time / Freelance
 * @param { Boolean } remote: Flag for remote / in place
 * @param { String } location: Location of the job
 */
const JobHead = ({ title = "", day = "", remote = false, location = "" }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="__page__head column">
            <div className="__return row align-center">
                <Link href = "/">
                    <a>
                        <img src = { theme === 'dark' ? "/images/header/arrow-left-dark.svg" : "/images/header/arrow-left-light.svg" } alt = "Icono de regresar" className="--margin-right-8" />
                        Más trabajos
                    </a>
                </Link>
            </div>
            <div className="white-space-8"></div>
            <div className="__title">
                <h1>
                    { title }
                </h1>
            </div>
            <div className="white-space-24"></div>
            <div className="__resume row align-center">
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
    );
}
 
export default JobHead;