/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description <Header /> Component 
*/

import { useState, useContext } from 'react';
import { ThemeContext } from 'theme/context';
import Link from 'next/link';


const Header = ({ lang = "es" }) => {

	const [showMenu, setShowMenu] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);


	/**
	 * @description Toggle reponsive menu and prevent scrolling
	 * @param { Boolean } isOpen: Boolean Flag
	*/
	const handleMenu = isOpen => {

		setShowMenu(isOpen);
		isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

	};

	return (
		<header className = "header justify-center">
			<div className="container">
				<div className="row full align-center">
					<div className="left full row align-center">
						<div className="__menu-hamburger">
							<button onClick = { _ => handleMenu(!showMenu) }>
								<img src = { theme === 'dark' ? "/images/header/menu-dark.svg" : "/images/header/menu-light.svg" }  alt = "Menu"/>
							</button>
						</div>
						<div className="__logo row align-center">
							<img className = "--desktop" src = { theme === 'dark' ? "/images/header/logo-woonkly-dark.svg" : "/images/header/logo-woonkly-light.svg" }  alt="Woonkly Logo"/>
							<img className = "--mobile" src = "/images/header/logo-responsive.svg" alt = "Woonkly Logo"/>
						</div>
					</div>
					<nav className="right full row align-center">
						<div className="__nav-item __theme row align-center">
							<button className="__icon --sun responsive-img" 
								onClick = { _ => setTheme('light') }>
									<img src = { theme === 'dark' ? "/images/header/sun-dark.svg" : "/images/header/sun-light.svg" }  alt = "Tema claro" title = "Modo Diurno" />
							</button>
							<div className="__divider">
								<p className="font-text">
									/
								</p>
							</div>
							<button className="__icon --moon responsive-img"
								onClick = { _ => setTheme('dark') }>
									<img src = { theme === 'dark' ? "/images/header/moon-dark.svg" : "/images/header/moon-light.svg" } alt = "Tema oscuro" title = "Modo oscuro" />
							</button>
						</div>
                        <div className="__nav-item __lang row align-center">
							<div className="__icon --lang responsive-img">
								<img src = { theme === 'dark' ? "/images/header/world-dark.svg" : "/images/header/world-light.svg" } alt = "World Icon" />
							</div>
							<div className="--margin-left-8">
								<Link href = { lang === 'es' ? "/en" : "/" }>
									<a className="weight-semi color-black">
										{ lang === 'es' ? "EN" : "ES" }
									</a>
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="__mobile full column" style = {{ display: `${showMenu ? 'flex' : 'none'}` }}>
				<nav className="full column">
					<div className="__text">
						<p className = "weight-semi color-black">
							Mode
						</p>
					</div>
					<div className="__nav-item row align-center">
						<button className="__icon btn --btn-transparent --sun responsive-img" 
							onClick = { _ => setTheme('light') }>
							<img src = { theme === 'dark' ? "/images/header/sun-dark.svg" : "/images/header/sun-light.svg" }  alt = "Tema claro" title = "Modo Diurno" />
						</button>
						<div className="__divider">
							<p className="font-text">
								/
							</p>
						</div>
						<button className="__icon btn --btn-transparent --moon responsive-img"
							onClick = { _ => setTheme('dark') }>
							<img src = { theme === 'dark' ? "/images/header/moon-dark.svg" : "/images/header/moon-light.svg" } alt = "Tema oscuro" title = "Modo oscuro" />
						</button>
					</div>
					<div className="__text">
						<p className = "weight-semi color-black">
							Language
						</p>
					</div>
					<div className="__nav-item __lang row align-center">
						<div className="__icon responsive-img">
							<img src = { theme === 'dark' ? "/images/header/world-dark.svg" : "/images/header/world-light.svg" } alt = "Cambiar idioma" />
						</div>
						<div className="--margin-left-8">
							<Link href = { lang === 'es' ? "/en" : "/" }>
								<a className="weight-semi color-black">
									{ lang === 'es' ? "EN" : "ES" }
								</a>
							</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);

};

export default Header;