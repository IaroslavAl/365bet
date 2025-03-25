import "./BookmakerList.css"
import BookmakerCell from "../../components/BookmakerCell/BookmakerCell"
import {BookmakerModel} from "../../../BookmakerModels";
import {Link} from "react-router-dom"

export default function BookmakerList({bookmakers, title}: {bookmakers: BookmakerModel[], title: string}) {
    return (
        <>
            <h2 className="bookmakerTitle">{title}</h2>
            <div className="bookmaker-list">
                {bookmakers.map((bookmaker, index) => (
                    <BookmakerCell bookmaker={bookmakers[index]} />
                ))}
            </div>
        </>
    )
}