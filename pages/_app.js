import '../styles/globals.css'
import Link from "next/link";
import Services from "./services";

function MyApp({Component, pageProps}) {

    return (
        <div>
            <nav>
                <ul className="menu">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/contacts"><a>Contacts</a></Link></li>
                    <li><Link href="/services"><a>Services</a></Link></li>
                </ul>
            </nav>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
