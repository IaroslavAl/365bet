import "./App.css"
import Header from "./components/Header/Header"
import CardList from "./components/CardList/CardList"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from "react"
import {cards} from "../Mocks.js"

export default function App() {
    const [tab, setTab] = useState("football");

    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route
                        path=""
                        element={<CardList cards={cards} title="Прогнозы на футбол"/>}
                    />
                    <Route
                        path="/rpl"
                        element={<CardList cards={cards} title="Прогнозы на РПЛ (чемпионат России)"/>}
                    />
                    <Route
                        path="/la-liga"
                        element={<CardList cards={cards} title="Прогнозы на Ла Лигу (чемпионат Испании)"/>}
                    />
                    <Route
                        path="/apl"
                        element={<CardList cards={cards} title="Прогнозы на АПЛ (чемпионат Англии)"/>}
                    />
                </Routes>
            </main>
        </Router>
    )
}