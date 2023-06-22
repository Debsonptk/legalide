import './styles.css';

const SectionTitle = ({ title, description, align = "center" }) => (
    <div className={`py-5 text-${align} text-light bg-section-title`} >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
);

export default SectionTitle