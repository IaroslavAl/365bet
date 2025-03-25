import "./BookmakerCell.css"
import {BookmakerModel} from "../../../BookmakerModels";
import CellButton from "../CellButton/CellButton.jsx"
import {Link} from "react-router-dom";

export default function BookmakerCell({bookmaker}: { bookmaker: BookmakerModel }) {
    const images = Object.fromEntries(
        Object.entries(import.meta.glob('/src/assets/bookmakerImages/*.webp', {eager: true}))
            .map(
                ([path, module]) => [
                    path.replace('/src/assets/bookmakerImages/', ''), (module as { default: string }).default
                ]
            )
    )

    return (
        <div className="bookmakerCell">
            <img
                src={images[`${bookmaker.id}.webp`]}
                alt={`Image ${bookmaker.id}`}
                className="bookmakerCellImage"
            />
            <div className="bookmakerCellButtonGroup">
                <li><Link to={`${bookmaker.id}`}><CellButton
                    isActive={true}>О букмекере</CellButton></Link></li>
                <li><Link to={`${bookmaker.url}`}><CellButton
                    isActive={true}>Получить бонус</CellButton></Link></li>
            </div>
        </div>
    );
};