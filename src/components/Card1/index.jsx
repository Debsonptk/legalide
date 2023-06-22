import './styles.css';

const Card1 = ({ description, icon }) => (
    <div className="mx-auto card text-dark bg-light m-3 mb-5 justify-contents-center">
            <div className="card-body text-center">
                <div className="icon-color text-center">{icon}</div>
                <h5 className="icon-color card-text ">{description}</h5>
            </div>
    </div>

);

export default Card1;