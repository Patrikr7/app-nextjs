import Header from '../componentes/header'
import Footer from '../componentes/footer'

export default function About() {
	return (
		<>
			<Header title="Sobre Mim - TheMovies"/>

			<main className="py-4">
				<div className="container">
					<header className="py-3">
						<h1 className="text-center">Sobre Mim</h1>
					</header>

					<div className="row">
						<section className="col-md-6 offset-md-3">
							<header className="text-center">
								<h4>Emerson Patrik</h4>
							</header>
							<div className="content">
								<p>Formado em Técnio de Informática e dedicado em estudar Desenvolvimento Web.</p>
								<p>Momento atual desenvolve sites: institucionais, blog, sistemas web e outros. Todo o desenvolvimento é planejado e estruturado pensando sempre em criar projetos de resultados.</p>
								<p>Este projeto foi desenvolvido com Framework Next.Js com intuito de aprendizado assistiando a aula do professor Bonieky.</p>
								<iframe width="560" height="315" src="https://www.youtube.com/embed/xjrDEZQ5LnA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
						</section>
					</div>

				</div>
			</main>

			<Footer/>
		</>
	)
}