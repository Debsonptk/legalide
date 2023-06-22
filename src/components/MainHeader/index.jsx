import lawyer from '../assets/lawyer.png';
import './styles.css';

const MainHeader = () => (
  <section className="bg-banner">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 className="text-light pt-5 display-4">LEGAL PRO<br /> SERVICES</h1>
            <h6 className="text-light pt-3 pb-4">We know how large objects will act,<br />but things on a small scale</h6>
            <div className="d-flex flex-wrap">
              <button type="button" className="btn btn-warning text-light button-rounded button-color m-1">Get Quote Now</button>
              <button type="button" className="btn btn-outline-light text-light button-rounded m-1">Learn More</button>
            </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={lawyer} alt="agent" className="img-fluid" />
        </div>
      </div>
  </section>
);

export default MainHeader;