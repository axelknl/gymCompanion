import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList, faChartLine, faGear, faRightFromBracket, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <div className="navigation min-vh-100 bg-dark text-light py-5 px-4 d-flex flex-column">
            {/* titre et logo */}
            <div className="navigation--logo logo">
                <h1>GymCompanion</h1>
            </div>

            {/* menu */}
            <div className="navigation--menu menu my-auto">
                <div className="navigation--menu--item menu--item item d-flex align-items-center">
                    <FontAwesomeIcon icon={faRectangleList} size="lg" />
                    <h3 className='m-3'>Programmes</h3>
                </div>
                <div className="navigation--menu--item menu--item item d-flex align-items-center">
                    <FontAwesomeIcon icon={faChartLine} size="lg" />
                    <h3 className='m-3'>Progression</h3>
                </div>
            </div>

            {/* profile et paramètre */}
            <div className="mt-auto">
                <div className="d-flex align-items-center profile mb-5">
                    <div className="profile--image rounded-circle me-3"></div>
                    <h3>Axel KUHNEL</h3>
                </div>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faGear} size="lg" />
                    <h3 className='m-3'>Paramètres</h3>
                </div>
                <div className='d-flex align-items-center'>
                    <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                    <h3 className='m-3'>Déconnexion</h3>
                </div>
            </div>

            {/* Bouton fermer et ouvrir le menu */}
            <div className='navigation--opener opener bg-light rounded-circle d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon icon={faChevronRight} size="lg" className='navigation--opener--icon text-dark'/>
            </div>
        </div>
    )
}

export default Navigation;