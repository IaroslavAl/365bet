import "./CardDetails.css"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {getCard} from "../../../Mocks.js";
import {useParams} from "react-router-dom";

export default function CardDetails() {
    const { id } = useParams()
    const card = getCard(id)

    return (
        <>
            <h2 className="cardDetailsTitle">{card.title}</h2>
            <div className="cardDetails">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >{card.details}</ReactMarkdown>
            </div>
        </>
    )
}