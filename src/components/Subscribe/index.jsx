import './styles.css';
import { FaHooli } from 'react-icons/fa';
import { FaLyft } from 'react-icons/fa';
import { FaPiedPiperHat } from 'react-icons/fa';
import { FaStripe } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';


const SubScribe= () => (
    <section className = 'bg-subscribe p-5'>
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-6 pb-3'>
                <div className='col text-light'>
                    <FaHooli size="8em" />
                </div>
                <div className='col text-light '>
                    <FaLyft size="6em"/>
                </div>
                <div className='col text-light '>
                    <FaPiedPiperHat size="6em"/>
                </div>
                <div className='col text-light'>
                    <FaStripe size="6em"/>
                </div>
                <div className='col text-light'>
                    <FaAws size="6em"/>
                </div>
                <div className='col text-light'>
                    <FaRedditAlien size="6em"/>
                </div>
            </div>
            <nav className="navbar bg-body-tertiary card-subscribe p-4">
                <div className="container-fluid ">
                    <h1 className="navbar-brand text-light">
                        Subscribe For Latest <br /> Newsletter
                    </h1>
                    <form className="d-flex col-5" role="search">
                        <input className="form-control p-3 " type="search"
                               placeholder="Your Email" aria-label="Search" />
                        <button className="btn  btn-subscribe text-light p-3"
                            type="submit">Subscribe
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    </section>
);

export default SubScribe