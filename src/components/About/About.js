import React from "react";
import AppLogo from "../../assets/images/AppLogo.svg";
import reactJSLogo from "../../assets/images/ReactJSLogo.svg";
import css3Html5Logo from "../../assets/images/CSS3_&_HTML5_Logos.svg";

const About = (props) => {
	return (
		<div className="About">
			<div className="About__text_container">
				<p>
					La aplicación <strong>Covid19-Stats</strong> surge como un proyecto
					personal para aplicar conocimientos de&nbsp;
					<a href="https://reactjs.org/" target="blank">
						React JS
					</a>
					,&nbsp;
					<a
						href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"
						target="blank"
					>
						CSS3
					</a>
					&nbsp;y&nbsp;
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
						target="blank"
					>
						HTML5
					</a>
					, adquiridos previamente y durante el estado de cuarentena que se vive
					en el año 2020 debido a la pandemia ocasionada por el virus&nbsp;
					<a href="https://es.wikipedia.org/wiki/SARS-CoV-2" target="blank">
						SARS-CoV-2
					</a>
					&nbsp;(
					<a href="https://es.wikipedia.org/wiki/COVID-19" target="blank">
						Covid19&nbsp;-&nbsp;Coronavirus
					</a>
					).
				</p>
				<p>
					Adicionalmente, pretende servir como herramienta de información y/o
					actualización acerca del estado, alcance y comportamiento de dicha
					pandemia.
				</p>
			</div>
			<div className="About__tech_logos_container">
				<img src={reactJSLogo} alt="React JS Logo" />
				<img src={css3Html5Logo} alt="CSS3 and HTML5 Logo" />
			</div>

			<div className="About__app_logo_container">
				<img src={AppLogo} alt="App Logo" />
			</div>

			<div className="About__text_container">
				<p>
					Esta aplicación fué desarrollada aplicando&nbsp;
					<a
						href="https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable"
						target="blank"
					>
						diseño web adaptable (Responsive Design)
					</a>
					&nbsp;para ofrecer una mejor experiencia de usuario al utilizar un
					navegador web en un PC o un dispositivo móvil. También, cuenta con
					soporte como{" "}
					<a
						href="https://es.wikipedia.org/wiki/Progressive_Web_Apps"
						target="blank"
					>
						aplicación web progresiva (Progressive Web App - PWA)
					</a>{" "}
					y de esta manera, permite emular el funcionamiento de una aplicación
					nativa en dispositivos móviles.
				</p>
				<p>
					El código fuente de esta aplicación puede encontrarse en un
					repositorio de&nbsp;
					<a href="https://github.com/" target="blank">
						Github
					</a>{" "}
					en el siguiente enlace:
				</p>

				<p>
					<a href="https://github.com/marcelomnc/covid19-info" target="blank">
						https://github.com/marcelomnc/covid19-info
					</a>
				</p>

				<p>
					Para comentarios y/o sugerencias puedes contactarme enviando un
					email&nbsp;<a href="mailto:marcelomnc@gmail.com">aquí</a>. Toda
					retroalimentación es bien recibida !
				</p>

				<p>
					Cuidate y #QuedateEnCasa !
				</p>
			</div>
		</div>
	);
};

export default About;
