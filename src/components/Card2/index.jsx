import './styles.css';

const Card2 = ({icon, email1, email2, h5, placeholder}) => (
    <div className="card text-center rounded-0" >
        <div className=" card-body w-100 h-100">
            <div className="icon-color2 card-title pb-1">{icon}</div>
            <h6 className="icon-color2 card-text pb-1">{email1}</h6>
            <h6 className="icon-color2 card-text pb-3">{email2}</h6>
            <h5 className='icon-color2 pb-3'>{h5}</h5>
            <a href="index.jsx"
                className="icon-color2 btn btn-outline-dark mb-5">{placeholder}</a>
        </div>
  </div>
);

export default Card2