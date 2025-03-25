import "./App.css"
import Header from "./components/Header/Header"
import CardList from "./pages/CardList/CardList"
import CardDetails from "./pages/CardDetails/CardDetails.jsx"
import BookmakerDetails from "./pages/BookmakerDetails/BookmakerDetails.tsx"
import BookmakerList from "./pages/BookmakerList/BookmakerList.tsx"
import YandexMetrika from "./hooks/YandexMetrika.jsx"
import GoogleAnalytics from "./hooks/GoogleAnalytics.jsx"
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom"
import {getCards} from "../Cards.js"
import {useEffect} from "react"
import {bookmakerModels} from "../BookmakerModels.ts";

export default function App() {
    return (
        <Router>
            <MainApp />
        </Router>
    )
}

function MainApp() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    YandexMetrika()
    GoogleAnalytics()

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<CardList cards={getCards()} title="Прогнозы на футбол" />} />
                    <Route path="/:id" element={<CardDetails />} />

                    <Route path="/rpl" element={<CardList cards={getCards("rpl")} title="Прогнозы на РПЛ (чемпионат России)" />} />
                    <Route path="/rpl/:id" element={<CardDetails />} />

                    <Route path="/la-liga" element={<CardList cards={getCards("la-liga")} title="Прогнозы на Ла Лигу (чемпионат Испании)" />} />
                    <Route path="/la-liga/:id" element={<CardDetails />} />

                    <Route path="/apl" element={<CardList cards={getCards("apl")} title="Прогнозы на АПЛ (чемпионат Англии)" />} />
                    <Route path="/apl/:id" element={<CardDetails />} />

                    <Route exact path="/bookmakers" element={<BookmakerList bookmakers={bookmakerModels} title={"Букмекеры"} />} />
                    <Route path="/bookmakers/:id" element={<BookmakerDetails />} />
                </Routes>
            </main>
        </>
    )
}