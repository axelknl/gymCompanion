import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'


const Goal = () => {
    return (
        <div className='col-2 bg-dark px-3 py-4 rounded text-light'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div>
                    <h6>74kg</h6>
                    <p>Perte de poids</p>
                </div>
                <FontAwesomeIcon icon={faChartLine} size="lg" />
            </div>

            <div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p>84</p>
                    <p>50%</p>
                </div>
                <div className='progress'>
                    <div className='progress-bar' role="progressbar" style={{width : "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export default Goal;