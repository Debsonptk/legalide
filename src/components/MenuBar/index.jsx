import { FaBars } from 'react-icons/fa';

const MenuBar = () => (
    <div className="d-flex d-block d-lg-none">
        <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"><FaBars color='white'size={25}/>
        </button>
        <div
            className="offcanvas offcanvas-top"
            tabIndex="-1" id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
        <h5 id="offcanvasTopLabel">Menu</h5>
            <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
            </button>
        </div>
            <div className="offcanvas-body">
                <ul>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#praticeareas">Pratice areas</a>
                    </li>
                    <li className="nav-item ">
                        <a
                            className="nav-link"
                            href="#praticeadivices">Pratice Advice</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#WhoWeAre">Who we are</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#ContactUs">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default MenuBar;
