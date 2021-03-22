import Head from 'next/head'
import { useState } from 'react'


export default function Header({title}) {
	const [searchText, setSearchText] = useState('');

	const handleSearch = async () => {
		if(searchText !== ''){
			//const searchReplace = searchText.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/,?\s+/g, "-");
			window.location.href = `https://app-themovie-nextjs.vercel.app/busca/${searchText}`;
		}
	};

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>

			<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
				<div className="container">
					<a className="navbar-brand" href="/">TheMovies</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
							aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarColor01">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/dia">Destaque do Dia</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/sobre">Sobre Mim</a>
							</li>
						</ul>
						<div className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Ex: Titanic" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
							<button className="btn btn-light my-2 my-sm-0" onClick={handleSearch}>Buscar ...</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
