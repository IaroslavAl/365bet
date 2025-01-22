import PropTypes from "prop-types"
import "./Card.css"

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isHorizontal: PropTypes.bool.isRequired
}

VerticalCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

HorizontalCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export function Card({imageSrc, title, text, isHorizontal}) {
    return (
        <>
            {isHorizontal && <HorizontalCard
                imageSrc={imageSrc}
                title={title}
                text={text}
            />}
            {!isHorizontal && <VerticalCard
                imageSrc={imageSrc}
                title={title}
                text={text}
            />}
        </>
    )
}

function VerticalCard({imageSrc, title, text}) {
    return (
        <div className="verticalCard">
            <div className="verticalCardImageContainer">
                <img src={imageSrc} alt={title} className="verticalCardImage"/>
            </div>
            <h3 className="verticalCardTitle">{title}</h3>
            <p className="verticalCardText">{text}</p>
        </div>
    )
}

function HorizontalCard({imageSrc, title, text}) {
    return (
        <div className="horizontalCard">
            <div className="horizontalCardTextContainer">
                <h3 className="horizontalCardTitle">{title}</h3>
                <p className="horizontalCardText">{text}</p>
            </div>
            <div className="horizontalCardImageContainer">
                <img src={imageSrc} alt={title} className="horizontalCardImage"/>
            </div>
        </div>
    )
}