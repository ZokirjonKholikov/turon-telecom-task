export function dataSelector(dataResponse) {
  const filtered = dataResponse.data.map((item) => ({
    id: item.streamId,
    name: item.streamName,
    year: '',
    imageSrc: item.files.imageUrl,
  }));
  return { total: Number(dataResponse?.meta?.totalItems), data: filtered };
}
