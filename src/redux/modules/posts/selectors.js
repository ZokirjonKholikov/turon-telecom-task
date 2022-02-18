import moment from 'moment';

export function dataSelector(dataResponse) {
  const filtered = dataResponse.map((item) => ({
    id: item.subcategory_id,
    category: item.category_name,
    name: item.subcategory_name,
    description: item.description,
    status: item.status === 1 ? 'true' : 'false'
  }));
  return { total: filtered.length, data: filtered };
}
