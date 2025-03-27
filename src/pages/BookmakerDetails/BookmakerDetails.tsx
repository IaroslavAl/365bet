import "./BookmakerDetails.css"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {getBookmaker} from "../../../Bookmakers"
import {useParams} from "react-router-dom"

export default function BookmakerDetails() {
    const {id} = useParams();

    if (!id) {
        return <div>Error: ID is undefined</div>;
    }

    const bookmaker = getBookmaker(id);

    if (!bookmaker) {
        return <div>Bookmaker not found</div>;
    }

    return (
        <>
            <h2 className="bookmakerDetailsTitle">{bookmaker.name}</h2>
            <div className="bookmakerDetails">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {bookmaker.details}
                </ReactMarkdown>
            </div>
        </>
    );
}