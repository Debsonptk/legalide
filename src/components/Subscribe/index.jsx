import './styles.css';
import { FaHooli } from 'react-icons/fa';
import { FaLyft } from 'react-icons/fa';
import { FaPiedPiperHat } from 'react-icons/fa';
import { FaStripe } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';


const SubScribe= () => (
    <section className = 'bg-subscribe px-0 p-md-5'>
            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-6 pb-3'>
                <div className='col text-light d-flex justify-content-center'>
                    <FaHooli size="8em" />
                </div>
                <div className='col text-light d-flex justify-content-center'>
                    <FaLyft size="6em"/>
                </div>
                <div className='col text-light d-flex justify-content-center'>
                    <FaPiedPiperHat size="6em"/>
                </div>
                <div className='col text-light d-flex justify-content-center'>
                    <FaStripe size="6em"/>
                </div>
                <div className='col text-light d-flex justify-content-center'>
                    <FaAws size="6em"/>
                </div>
                <div className='col text-light d-flex justify-content-center'>
                    <FaRedditAlien size="6em"/>
                </div>
            </div>
            <nav className="navbar bg-body-tertiary card-subscribe p-4 d-flex flex-column flex-md-row align-items-center">
                    <h3 className="navbar-brand text-light text-wrap">
                        Subscribe For Latest Newsletter
                    </h3>
                    <form className="row g-0" role="search">
                        <div className="col-12 col-sm-8">
                            <input className="form-control p-3" type="search"
                                placeholder="Your Email" aria-label="Search" />
                        </div>
                        <div className="col-12 col-sm-4">
                            <button className="btn btn-subscribe text-light p-3 w-100"
                                type="submit">Subscribe
                            </button>
                        </div>
                    </form>
            </nav>
    </section>
);

export default SubScribe