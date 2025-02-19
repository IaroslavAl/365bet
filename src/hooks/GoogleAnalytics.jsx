import { useEffect } from "react"

const GoogleAnalytics = () => {
    useEffect(() => {
        // Добавляем Google Tag Manager скрипт динамически
        const script = document.createElement("script")
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-HHFMTT0TH6`
        document.head.appendChild(script)

        // Настраиваем gtag
        window.dataLayer = window.dataLayer || []
        function gtag() {
            window.dataLayer.push(arguments)
        }
        gtag("js", new Date())
        gtag("config", "G-HHFMTT0TH6")

    }, [])

    return null
}

export default GoogleAnalytics
