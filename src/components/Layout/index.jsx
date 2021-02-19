/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description <Layout /> Component for pages
*/

import Head     from 'next/head';
import Header   from 'components/Header';
import Footer   from 'components/Footer';


const Layout = ({ title = "Talents Woonkly", description, keywords, children, lang = "es" }) => {

    return(
        <div className="app full column">
            <Head>

                <meta charSet="UTF-8" />
                <title>{ title }</title>
                <meta httpEquiv = "X-UA-Compatible" content = "ie=edge" />
                <meta name = "robots"       content   = "index" />
                <meta name = "author"       content = "Woonkly" />
                <meta name = "description"  content = { description || "Busca, encuentra y postula a oportunidades laborales en Woonkly" } />
                <meta name = "keywords"     content = { keywords || "Woop, Woonkly, Smart Chain, Jobs, Careers" } />
                <meta name = "theme-color"  content = "#20c0ff" />
                <meta name = "viewport"     content = "width=device-width, initial-scale=1.0" />
                <link rel = "icon"          href="/favicons/16.png" />

                {/* --- Open Graph --- */}

                <meta property = "og:type"    content = "website" />
                <meta property = "og:url"     content = "https://talent.woonkly.com/" />
                <meta property = "og:image"   content = "" />
                <meta property = "og:title"   content = { title } />
                <meta property = "og:description" content = { description || "Busca, encuentra y postula a oportunidades laborales en Woonkly" } />

                {/* -- IOS Meta -- */}

                <link rel  = "apple-touch-icon"                      href    = "" />
                <meta name = "apple-mobile-web-app-capable"          content = "yes" />
                <meta name = "apple-mobile-web-app-title"            content = "Talents Woonkly" />
                <meta name = "apple-mobile-web-app-status-bar-style" content = "black-translucent" />

                {/* --- Twitter --- */}

                <meta name = "twitter:card"           content = "summary" />
                <meta name = "twitter:url"            content = "https://talents.woonkly.com" />
                <meta name = "twitter:title"          content = { title } />
                <meta name = "twitter:image"          content = "" />
                <meta name = "twitter:description"    content = { description || "Busca, encuentra y postula a oportunidades laborales en Woonkly" } />

            </Head>
            <Header lang = { lang } />
            { children }
            <Footer lang = { lang } />
        </div>
    );

};

export default Layout;