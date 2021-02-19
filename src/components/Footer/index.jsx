/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description <Footer /> Component
*/

import { useContext } from 'react';
import { ThemeContext } from 'theme/context';
import Link from 'next/link';


const Footer = ({ lang = "es" }) => {

    const { theme } = useContext(ThemeContext);

	return (
		<footer className = "footer justify-center">
			<div className="container">
				<div className="row-responsive full --to-column">
					<div className="left row-responsive">
						<a href="https://ai.woonkly.com/#/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="font-mini">
                            { lang === 'es' ? 'Términos del servicio' : 'Terms of Service' }
                        </a>
                        <a href="https://ai.woonkly.com/#/privacy" target="_blank" rel="noopener noreferrer" className="font-mini">
                            { lang === 'es' ? 'Políticas' : 'Policies' }
                        </a>
                        <a href="https://ai.woonkly.com/#/privacy" target="_blank" rel="noopener noreferrer" className="font-mini">
                            Cookies
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="font-mini color-primary">
                            { lang === 'es' ? 'Envíe su proyecto' : 'Submit Your project' }
                        </a>
					</div>
                    <div className="middle row">
                        <a href = "https://mtr.mkm.ee/taotluse_tulemus/547860?backurl=%40juriidiline_isik_show%3Fid%3D265533" target = "_blank" rel = "noopener noreferrer" className="font-mini weight-medium --margin-right-8">
                            { lang === 'es' ? 'Regulado por Unión Europea, Estonia, Licencias Cryptos - Número' : 'Regulated by European Union, Estonia, Crypto Licenses - Number' }
                            &nbsp;<span>FVT004340</span>
                        </a>
                        <div className="responsive-img --margin-left-4">
                            <img src = "/images/footer/union.png" alt = "Unión" />
                        </div>
                        <div className="__goto row align-center --margin-left-16">
                            <a href = "/" target="_blank" rel="noopener noreferrer" className="font-mini">
                                { lang === 'es' ? 'Ir a la plataforma' : 'Go to platform' }
                                <span className="--margin-left-4">
                                    { lang === 'es' ? '(Versión antigua)' : '(Old version)' }
                                </span>
                            </a>
                            <div className="responsive-img --margin-left-4">
                                <img src = "/images/footer/go-icon.svg" alt = "Go to" />
                            </div>
                        </div>
                    </div>
                    <div className="right row">
                        <div className="__social">
                            <Link href="https://www.facebook.com/woonkly/">
                                <a rel = "noopener noreferrer" target="_blank">
                                    <img src = { theme === 'dark' ? "/images/footer/facebook-dark.svg" : "/images/footer/facebook-light.svg" } alt = "Facebook" />
                                </a>
                            </Link>
                        </div>
                        <div className="__social">
                            <Link href="https://www.instagram.com/woonkly/">
                                <a rel = "noopener noreferrer" target="_blank">
                                    <img src = { theme === 'dark' ? "/images/footer/instagram-dark.svg" : "/images/footer/instagram-light.svg" } alt = "Instagram" />
                                </a>
                            </Link>
                        </div>
                        <div className="__social">
                            <Link href="https://twitter.com/woonklyes">
                                <a rel = "noopener noreferrer" target="_blank">
                                    <img src = { theme === 'dark' ? "/images/footer/twitter-dark.svg" : "/images/footer/twitter-light.svg" }  alt = "Twitter" />
                                </a>
                            </Link>
                        </div>
                        <div className="__social">
                            <Link href="https://t.me/woonkly">
                                <a rel = "noopener noreferrer" target="_blank">
                                    <img src = { theme === 'dark' ? "/images/footer/telegram-dark.svg" : "/images/footer/telegram-light.svg" } alt = "Telegram" />
                                </a>
                            </Link>
                        </div>
                    </div>
				</div>			
            </div>
		</footer>
	);

};

export default Footer;