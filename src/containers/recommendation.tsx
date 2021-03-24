import React, { useState, useEffect } from 'react';
import { Episode, Recommendation } from '../components';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { ShowOverview } from '../constants/types';

type RecommendationContainerType = {
	category: string;
	openId: string;
};
function RecommendationContainer({ category, openId }: RecommendationContainerType) {
	const [ recommendations, setRecommendations ] = useState<ShowOverview>();
	const [ showAll, setShowAll ] = useState(false);

	useEffect(
		() => {
			const endpoint =
				category === 'series'
					? SECTIONS.series.helpers.fetchTVRecommendations.replace('{{tv_id}}', openId)
					: SECTIONS.movies.helpers.fetchMovieRecommendations.replace('{{movie_id}}', openId);
			movieHttp
				.get(endpoint)
				.then((response) => setRecommendations(response.data.results))
				.catch((e) => console.log(e));
		},
		[ category, openId ]
	);

	const truncate = (string: string, length: number) => {
		return string.length > length ? string.substr(0, length - 1) + '...' : string;
	};

	return recommendations && recommendations.length > 0 ? (
		<Recommendation.Container>
			<Recommendation.Header>More Like This</Recommendation.Header>
			{recommendations && (
				<Recommendation.Grid>
					{recommendations.map(
						({ id, backdrop_path, overview, name, title, first_air_date, release_date }: any, i: number) =>
							(showAll || (!showAll && i < 9)) && (
								<Recommendation key={id}>
									<Recommendation.Banner src={backdrop_path} />
									<Recommendation.Details>
										<Recommendation.Title>{name || title}</Recommendation.Title>
										<Recommendation.Year>{new Date(first_air_date || release_date).getFullYear()}</Recommendation.Year>
										<p>{truncate(overview, 175)}</p>
									</Recommendation.Details>
								</Recommendation>
							)
					)}
				</Recommendation.Grid>
			)}
			{recommendations &&
			recommendations.length > 9 && (
				<Recommendation.ShowMoreWrapper>
					<Episode.ShowMore onClick={() => setShowAll((showAll) => !showAll)} showAll={showAll} />
				</Recommendation.ShowMoreWrapper>
			)}
		</Recommendation.Container>
	) : null;
}

export default RecommendationContainer;
