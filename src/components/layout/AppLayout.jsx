import Footer from "../footer/Footer"
import Header from "../header/Header"

function AppLayout({children}) {
    return (
        <div>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </div>
    )
}

export default AppLayout
