import Head from "next/head"
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({subsets: ["latin"]})

export default function Home() {
    return (
        <>
            <Head>
                <title>Augustin Pasquier</title>
                <meta name="description" content="Augustin Pasquier - Site web"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={ `${montserrat.className}`}>
                Hello World!
            </main>
        </>
    )
}