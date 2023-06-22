import './styles.css';

const ContactUs = () => (
    <section className='bg-contact pt-5'>
        <div className='row d-flex align-items-center' id="ContactUs">
            <div className = 'col text-light p-md-5'>
                <h3 className='text-contact'>Request A Free Consultation</h3>
                <p className='par-contact'>the quick fox jumps over the lazy dog</p>
            </div>
            <div className='col text-light p-5 d-flex justify-content-center justify-content-md-end'>
                <button type="button"
                    className="btn btn-contact text-light align-items-center"> Contact Us
                </button>
            </div>
        </div>
    </section>
);

export default ContactUs