import Footer from "../footer/Footer"
import Header from "../header/Header"

function AppLayout({children}) {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default AppLayout
