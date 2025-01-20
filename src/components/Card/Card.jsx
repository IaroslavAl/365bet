import PropTypes from "prop-types"
import "./Card.css"

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default function Card({imageSrc, title, text}) {
    return (
        <div className="card">
            <div className="card_image-container">
                <img src={imageSrc} alt={title} className="card_image"/>
            </div>
            <h3 className="card_title">{title}</h3>
            <p className="card_text">{text}</p>
        </div>
    )
}