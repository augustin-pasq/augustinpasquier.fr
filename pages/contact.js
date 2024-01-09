import Head from "next/head"
import Link from "next/link"
import SvgFactory from "@/components/SvgFactory"

export default function Contact() {
    return (<>
        <Head>
            <title>Augustin Pasquier</title>
            <meta name="description" content="Augustin Pasquier - Contact"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main id="contact">
            <section id="contact-header">
                <h1 className="contact-title">Besoin de me contacter ?</h1>
                <div className="text-container">
                    <p>
                        Vous pouvez m'envoyer un mail et me retrouver sur GitHub et LinkedIn.
                    </p>
                </div>
            </section>

            <section id="contact-section">
                <Link className="social-item" href="mailto:contact@augustinpasquier.fr">
                    <SvgFactory item="mail"/>
                    <span>Mail</span>
                </Link>

                <Link className="social-item" href="https://www.github.com/augustin-pasq">
                    <SvgFactory item="github"/>
                    <span>GitHub</span>
                </Link>

                <Link className="social-item" href="https://www.linkedin.com/in/augustin-pasquier-354a07228/">
                    <SvgFactory item="linkedin"/>
                    <span>LinkedIn</span>
                </Link>
            </section>
        </main>

        <footer></footer>
    </>)
}