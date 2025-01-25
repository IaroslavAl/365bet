import "./CardList.css"
import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import {useInView} from "react-intersection-observer"
import {Card} from "../../components/Card/Card.jsx"
import {Link} from "react-router-dom"

export default function CardList({cards, title}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);

    // Обновление состояния при изменении размера окна
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 880)
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <>
            <h2 className="cardTitle">{title}</h2>
            <div className="card-list">
                {cards.map((card, index) => (
                    <Link to={`${card.id}`} key={index}>
                        <LazyCard
                            key={index}
                            card={card}
                            isHorizontal={!isMobile && index === 0}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}

function LazyCard({card, isHorizontal}) {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div ref={ref} style={{minHeight: "200px"}}>
            {inView && (
                <Card card={card} isHorizontal={isHorizontal}/>
            )}
        </div>
    )
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            imageSrc: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
}

LazyCard.propTypes = {
    card: PropTypes.shape({
        imageSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    }).isRequired,
    isHorizontal: PropTypes.bool,
}