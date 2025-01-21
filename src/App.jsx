import "./App.css"
import Header from "./components/Header/Header"
import CardList from "./components/CardList/CardList"
import { cards } from "../Mocks.js"

export default function App() {
    return (
        <>
            <Header/>
            <CardList cards={cards} title={"Прогнозы на РПЛ (чемпионат России)"}/>
        </>
    )
}