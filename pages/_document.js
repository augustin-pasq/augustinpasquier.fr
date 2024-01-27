import {Head, Html, Main, NextScript} from "next/document"
import {BreakpointProvider} from "react-socks";

export default function Document() {
    return (
        <Html lang="fr">
            <Head/>
            <body>
            <BreakpointProvider>
                <Main/>
                <NextScript/>
            </BreakpointProvider>
            </body>
        </Html>
    )
}