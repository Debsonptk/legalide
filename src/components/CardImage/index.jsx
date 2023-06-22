import './styles.css';

const CardImage = ({ title, description, image }) => (
  <div className="card h-100 rounded-0">
    <div className="card-body">
      <h5 className="card-title text-bg-main p-3 ">{title}</h5>
      <p className="card-text text-p-main p-3">{description}</p>
    </div>
    <img src={image} className="card-img-bottom custom-image rounded-0 img-fluid" alt="..." />
  </div>
);

export default CardImage;