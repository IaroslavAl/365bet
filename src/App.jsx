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
import {foreignBookmakers, legalBookmakers} from "../Bookmakers.ts";

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

                    <Route exact path="/legal-bookmakers" element={<BookmakerList bookmakers={legalBookmakers} title={"Легальные букмекеры"} />} />
                    <Route path="/legal-bookmakers/:id" element={<BookmakerDetails />} />

                    <Route exact path="/foreign-bookmakers" element={<BookmakerList bookmakers={foreignBookmakers} title={"Зарубежные букмекеры"} />} />
                    <Route path="/foreign-bookmakers/:id" element={<BookmakerDetails />} />
                </Routes>
            </main>
        </>
    )
}