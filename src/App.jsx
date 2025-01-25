import "./App.css"
import Header from "./components/Header/Header"
import CardList from "./pages/CardList/CardList"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {getCards} from "../Mocks.js"
import CardDetails from "./pages/CardDetails/CardDetails.jsx";

export default function App() {
    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    {/*Главная страницы*/}
                    <Route
                        path=""
                        element={
                            <CardList
                                cards={getCards()}
                                title="Прогнозы на футбол"
                            />
                        }
                    />

                    {/* Списки по разделам */}
                    <Route
                        path="/rpl"
                        element={
                            <CardList
                                cards={getCards("rpl")}
                                title="Прогнозы на РПЛ (чемпионат России)"
                            />
                        }
                    />
                    <Route
                        path="/la-liga"
                        element={
                            <CardList
                                cards={getCards("la-liga")}
                                title="Прогнозы на Ла Лигу (чемпионат Испании)"
                            />
                        }
                    />
                    <Route
                        path="/apl"
                        element={
                            <CardList
                                cards={getCards("apl")}
                                title="Прогнозы на АПЛ (чемпионат Англии)"
                            />
                        }
                    />

                    {/*Детали по разделам*/}
                    <Route path="/:id" element={<CardDetails/>}/>
                    <Route path="/rpl/:id" element={<CardDetails/>}/>
                    <Route path="/la-liga/:id" element={<CardDetails/>}/>
                    <Route path="/apl/:id" element={<CardDetails/>}/>
                </Routes>
            </main>
        </Router>
    )
}