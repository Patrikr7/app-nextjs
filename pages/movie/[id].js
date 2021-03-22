import Header from '../../componentes/header'
import Footer from '../../componentes/footer'

export default function MovieItem({info}) {
	return (
		<>
			<Header title={`${info.title} - TheMovies`} />

			<main className="py-4">
				<div className="container">
					<header className="py-3">
						<h1 className="text-center">{info.title}</h1>
						<p className="text-center">Nota: {info.vote_average}</p>
					</header>
					<div className="row">
						<figure className="col-md-4 offset-md-4">
							<img className="img-fluid" src={info.backdrop_path ? `https://image.tmdb.org/t/p/original${info.backdrop_path}` : `https://app-themovie-nextjs.vercel.app/assets/img/tmdb.jpg`} alt={info.title}/>
						</figure>

						<div className="col-md-6 offset-md-3">
							<p className="mb-0">
								{info.overview}
							</p>
						</div>

					</div>
				</div>
			</main>

			<Footer/>
		</>
	)
}

export async function getServerSideProps(context) {
	const result = await fetch(`https://app-themovie-nextjs.vercel.app/api/movie/${context.params.id}`);
	const json = await result.json();

	return {
		props:{
			info: json.info
		}
	}
}
