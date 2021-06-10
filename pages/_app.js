import '../styles/globals.scss'
import Link from "next/link";
import Services from "./services";

function MyApp({Component, pageProps}) {

    return (
        <div className="">
            <header className="bg-black p-4">
                <nav className="flex items-center justify-between">
                    <Link href="./"><a>LOGO</a></Link>
                    <ul className="menu flex">
                        <li className=""><Link href="/"><a>Home</a></Link></li>
                        <li className="mx-4"><Link href="/about"><a>About</a></Link></li>
                        <li className="mx-4"><Link href="/contacts"><a>Contacts</a></Link></li>
                        <li className="mx-4"><Link href="/services"><a>Services</a></Link></li>
                    </ul>
                    <div>
                        <Link href=""><a>FB</a></Link>
                        <Link href=""><a>IN</a></Link>
                        <Link href=""><a>LI</a></Link>
                    </div>
                </nav>
            </header>
            <div className="mx-auto my-8 w-8/12">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
