import Header from '../componentes/header'
import Footer from '../componentes/footer'

export default function Home({list}) {
	return (
        <>
			<Header title="Destaques da Semana - TheMovies"/>

			<main className="py-4">
				<div className="container">
					<header className="py-3">
						<h1 className="text-center">Destaques da Semana</h1>
					</header>

					<div className="row">
						{list.map(item => (
							<article className="col-md-2">
								<a href={`/movie/${item.id}`}>
									<img className="img-fluid mb-4 rounded" src={item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : `http://localhost:3000/assets/img/tmdb.jpg`} alt={item.title} title={item.title}/>
								</a>
							</article>
						))}
					</div>

				</div>
			</main>

			<Footer/>
        </>
	)
}

export async function getServerSideProps() {
	const result = await fetch('http://localhost:3000/api/trending');
	const json = await result.json();

	return {
		props:{
			list: json.list
		}
	}
}
