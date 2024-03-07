import {Head, Html, Main, NextScript} from "next/document"

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta name="description" content="👋, moi c'est Augustin Pasquier, et je suis étudiant en BUT informatique, développeur web en alternance et passionné par la programmation."/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:url" content="https://augustinpasquier.fr"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Augustin Pasquier | Portfolio"/>
                <meta property="og:site_name" content="Augustin Pasquier | Portfolio"/>
                <meta property="og:description" content="👋, moi c'est Augustin Pasquier, et je suis étudiant en BUT informatique, développeur web en alternance et passionné par la programmation."/>
                <meta property="og:image" content="https://augustinpasquier.fr/images/opengraph-image.png"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="augustinpasquier.fr"/>
                <meta property="twitter:url" content="https://augustinpasquier.fr"/>
                <meta property="twitter:title" content="Augustin Pasquier | Portfolio"/>
                <meta property="twitter:description" content="👋, moi c'est Augustin Pasquier, et je suis étudiant en BUT informatique, développeur web en alternance et passionné par la programmation."/>
                <meta property="twitter:image" content="https://augustinpasquier.fr/images/opengraph-image.png"/>

                <script async src="https://eu.umami.is/script.js" data-website-id="cfd04839-e5f4-4908-a244-776d717cd220"></script>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}