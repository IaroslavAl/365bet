import "./App.css"
import Header from "./components/Header/Header"
import Card from "./components/Card/Card"

export default function App() {
    return (
        <>
            <Header/>
            <Card
                imageSrc="https://s8.stc.all.kpcdn.net/sports/win/wp-content/uploads/sites/2/2024/12/krasnodar-lokomotiv-768x432.jpg"
                title="Прогноз на матч ФК «Краснодар» — ФК «Локомотив Москва» (08.12.2024)"
                text="«Краснодар» уверенно играет дома, забивая минимум дважды в большинстве матчей, но недавно прервал беспроигрышную серию. «Локомотив» борется с проблемами в обороне, пропустив 26 голов, но стабильно отличается результативностью в гостевых встречах. В прошлом очном матче «быки» выиграли 3:0, что подтверждает их преимущество."
            >
            </Card>
        </>
    )
}