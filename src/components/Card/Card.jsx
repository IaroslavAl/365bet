import "./Card.css"
import PropTypes from "prop-types"

export function Card({card, isHorizontal}) {
    return (
        <>
            {isHorizontal && <HorizontalCard card={card}/>}
            {!isHorizontal && <VerticalCard card={card} />}
        </>
    )
}

function VerticalCard({card}) {
    return (
        <div className="verticalCard">
            <div className="verticalCardImageContainer">
                <img src={card.imageSrc} alt={card.title} className="verticalCardImage"/>
            </div>
            <h3 className="verticalCardTitle">{card.title}</h3>
            <p className="verticalCardText">{card.text}</p>
        </div>
    )
}

function HorizontalCard({card}) {
    return (
        <div className="horizontalCard">
            <div className="horizontalCardTextContainer">
                <h3 className="horizontalCardTitle">{card.title}</h3>
                <p className="horizontalCardText">{card.text}</p>
            </div>
            <div className="horizontalCardImageContainer">
                <img src={card.imageSrc} alt={card.title} className="horizontalCardImage"/>
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired,
    isHorizontal: PropTypes.bool.isRequired
}

VerticalCard.propTypes = {
    card: PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired
}

HorizontalCard.propTypes = {
    card: PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired
}