import './styles.css';

const ContactUs = () => (
    <section className='bg-contact pt-5'>
        <div className='container'>
            <div className='container-fluid row  justify-content-between'
                 id="ContactUs">
                <div className = 'col text-light p-5'>
                    <h3 className='text-contact d-none d-sm-block'>Request A Free Consultation</h3>
                    <p className='par-contact'>the quick fox jumps over the lazy dog</p>
                </div>
                <div className='col text-light p-5 d-flex justify-content-end'>
                    <button type="button"
                        className="btn btn-contact text-light align-items-center"> Contact Us
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default ContactUs