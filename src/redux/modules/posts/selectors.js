export function dataSelector(dataResponse) {
  const filtered = dataResponse.map((item) => ({
    id: item.id,
    name: item.title,
    imageSrc:
      'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png',
    desc: item.body.substr(0, 50),
  }));
  return { total: filtered.length, data: filtered };
}
