import './styles.css';

const SectionTitle = ({ title, description, align = "center", className='', noPadding=false }) => (
    <div className={`${noPadding? '':'py-5'} text-${align} text-light bg-section-title ${className} `} >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
);

export default SectionTitle