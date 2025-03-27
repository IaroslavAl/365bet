import "./BookmakerList.css"
import BookmakerCell from "../../components/BookmakerCell/BookmakerCell"
import {BookmakerModel} from "../../../BookmakerModel";

export default function BookmakerList({bookmakers, title}: {bookmakers: BookmakerModel[], title: string}) {
    return (
        <>
            <h2 className="bookmakerTitle">{title}</h2>
            <div className="bookmaker-list">
                {bookmakers.map((_, index) => (
                    <BookmakerCell bookmaker={bookmakers[index]} />
                ))}
            </div>
        </>
    )
}