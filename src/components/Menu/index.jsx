import {FaBars} from "react-icons/fa";

const Menu = () => (
    <section className = 'bg-header' >
        <div className = 'container d-flex justify-content-between'>
            <div className = 'text-light fs-3 pt-5'>
                <div className="navbar-brand" href="index.js">Legalide</div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light pt-5">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-light"
                                   href="#praticeareas">Pratice areas</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light"
                                   href="#praticeadivices">Pratice Advice</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light"
                                   href="#WhoWeAre">Who we are</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light"
                                   href="#ContactUs">Contact</a>
                            </li>
                        </ul>
                        <ul className="d-block d-md-none d-lg-none">
                            <li className="nav-item">
                                <a className="nav-link text-light"
                                   href="index.js"
                                   tabIndex="-1"><FaBars /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>
);

export default Menu;

