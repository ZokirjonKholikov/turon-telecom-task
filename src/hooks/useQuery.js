/* eslint prefer-template: "off" */
/* eslint-env es6 */

import { useMemo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function useQuery({ fetchData }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(12);
  const [pageIndex, setPageIndex] = useState(0);

  const pageSizeQuery = useMemo(
    () => (pageSize ? `&itemsPerPage=${pageSize}` : ''),
    [pageSize]
  );

  const pageQuery = useMemo(() => `page=${pageIndex + 1}`, [pageIndex]);

  const query = useMemo(
    () => `${pageQuery}${pageSizeQuery}`,
    [pageQuery, pageSizeQuery]
  );

  useEffect(() => {
    dispatch(
      fetchData({
        isSearch: true,
        query: `${query}${search ? '&search=' + search : ''}`,
      })
    );
    // eslint-disable-next-line
  }, [dispatch, search]);

  useEffect(() => {
    if (pageSize > 0) {
      dispatch(
        fetchData({
          isSearch: false,
          query: `${query}${search ? `&search=${search}` : ''}`,
        })
      );
    }
    // eslint-disable-next-line
  }, [query, dispatch]);

  return {
    query,
    search,
    pageIndex,
    pageSize,
    setSearch,
    setPageIndex,
    setPageSize,
  };
}
