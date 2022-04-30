/* eslint prefer-template: "off" */
/* eslint-env es6 */

import { useMemo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function useQuery({ fetchData }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [user, setUser] = useState('');

  const pageSizeQuery = useMemo(
    () => (pageSize ? `&itemsPerPage=${pageSize}` : ''),
    [pageSize]
  );
  const userQuery = useMemo(() => (user ? `&userId=${user}` : ''), [user]);

  const pageQuery = useMemo(
    () => `page=${user ? 1 : pageIndex + 1}`,
    [pageIndex, user]
  );

  const query = useMemo(
    () => `${pageQuery}${pageSizeQuery}${userQuery}`,
    [pageQuery, pageSizeQuery, userQuery]
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
    user,
    setUser,
    setPageIndex,
    setPageSize,
  };
}
