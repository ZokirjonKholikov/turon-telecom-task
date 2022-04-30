export function dataSelector(dataResponse) {
  const filtered = dataResponse.data.map((item) => ({
    id: item.movieId,
    name: item.movieTitle,
    year: item.year,
    imageSrc: item.files.posterUrl,
    ageLimit: item.params.ageLimit,
    genre: item.genres[0].genreName,
  }));
  return { total: Number(dataResponse?.meta?.totalItems), data: filtered };
}
