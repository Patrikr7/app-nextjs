import { apiKey, apiBase } from '../../lib/tmdb';

export default async (req, res) => {
	const result = await fetch(`${apiBase}trending/all/day?api_key=${apiKey}&language=pt-BR`);
	const json = await result.json();

	res.status(200).json({
		list: json.results
	})
}
