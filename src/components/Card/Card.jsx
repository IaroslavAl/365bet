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
    const images = Object.fromEntries(
        Object.entries(import.meta.glob('/src/assets/images/*.jpg', { eager: true }))
            .map(([path, module]) => [path.replace('/src/assets/images/', ''), module.default])
    )

    return (
        <div className="verticalCard">
            <div className="verticalCardImageContainer">
                <img src={images[`${card.id}.jpg`]} alt={`Image ${card.id}`} className="verticalCardImage"/>
            </div>
            <h3 className="verticalCardTitle">{card.title}</h3>
            <p className="verticalCardText">{card.text}</p>
        </div>
    )
}

function HorizontalCard({card}) {
    const images = Object.fromEntries(
        Object.entries(import.meta.glob('/src/assets/images/*.jpg', { eager: true }))
            .map(([path, module]) => [path.replace('/src/assets/images/', ''), module.default])
    )

    return (
        <div className="horizontalCard">
            <div className="horizontalCardTextContainer">
                <h3 className="horizontalCardTitle">{card.title}</h3>
                <p className="horizontalCardText">{card.text}</p>
            </div>
            <div className="horizontalCardImageContainer">
                <img src={images[`${card.id}.jpg`]} alt={`Image ${card.id}`} className="horizontalCardImage"/>
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired,
    isHorizontal: PropTypes.bool.isRequired
}

VerticalCard.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired
}

HorizontalCard.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired
}