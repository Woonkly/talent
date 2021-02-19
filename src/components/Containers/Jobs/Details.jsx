/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Container of details for the job
*/

const ContainerDetails = ({ details }) => {

    return(
        <div className="__container__details column">
            <div className="__detailed column">
                <div className="__title">
                    <h2>
                        Descripción
                    </h2>
                </div>
                <div className="white-space-16"></div>
                <div className="__content">
                    <p>
                        { details?.description }
                    </p>
                </div>
            </div>
            <div className="__detailed column">
                <div className="__title">
                    <h2>
                        Conocimientos requeridos
                    </h2>
                </div>
                <div className="white-space-16"></div>
                <div className="__content">
                    <ul>
                        { details?.requirements?.map((requirement, key) =>
                            <li key = { key } className="font-text">
                                { requirement }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="__detailed column">
                <div className="__title">
                    <h2>
                        Responsabilidades
                    </h2>
                </div>
                <div className="white-space-16"></div>
                <div className="__content">
                    <ul>
                        { details?.functions?.map((item, key) =>
                            <li key = { key } className="font-text">
                                { item }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="__detailed column">
                <div className="__title">
                    <h2>
                        Calificaciones
                    </h2>
                </div>
                <div className="white-space-16"></div>
                <div className="__content">
                    <ul>
                        { details?.qualifications?.map((quality, key) =>
                            <li key = { key } className="font-text">
                                { quality }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default ContainerDetails;