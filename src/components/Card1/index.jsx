import './styles.css';

const Card1 = ({ description, icon }) => (
    <section className="bg-cards-areas">
            <div className=" d-flex justify-content-center">
                <div className="card text-dark bg-light m-3 mb-5 card-area">
                    <div className="card-body text-center">
                        <div className="icon-color text-center">{icon}</div>
                        <h5 className="icon-color card-text ">{description}</h5>
                    </div>
                </div>
            </div>
    </section>
);

export default Card1;