import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = (props) => {
	return (
		<Container className="About" fluid="md">
			<Row className="About__row_app_version">
				<p>
					{process.env.REACT_APP_CODEBASE_VERSION
						? process.env.REACT_APP_CODEBASE_VERSION
						: "VersionNotSet"}
				</p>
			</Row>
			<Row>
				<Col>
					<p>
						La aplicación <strong>Covid-19 Stats</strong> surge como un proyecto
						personal para aplicar conocimientos de&nbsp;
						<a href="https://reactjs.org/" target="blank">
							React-JS
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
						, adquiridos previamente y durante el estado de cuarentena que se
						vive en el año 2020 debido a la pandemia ocasionada por el
						virus&nbsp;
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
					<p>
						Esta aplicación fue desarrollada aplicando&nbsp;
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
							GitHub
						</a>{" "}
						en el siguiente enlace:
					</p>
					<p>
						<a
							href="https://github.com/marcelomnc/covid19-stats"
							target="blank"
						>
							https://github.com/marcelomnc/covid19-stats
						</a>
					</p>
					<p>
						Mi nombre es <strong>Marcelo Echeverri</strong>, para comentarios
						y/o sugerencias puedes contactarme enviando un email&nbsp;
						<a href="mailto:marcelomnc@gmail.com">aquí</a>. Toda
						retroalimentación es bien recibida.
					</p>
					<p>Cuídate y #QuedateEnCasa!</p>
				</Col>
			</Row>
			<Row className="About__row_img">
				<Col>
					<div className="About__img_container"></div>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
