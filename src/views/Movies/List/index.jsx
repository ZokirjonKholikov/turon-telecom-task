import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../../components/Pagination';
import { useQuery } from '../../../hooks';
import { fetchData } from '../../../redux/modules/movies/actions';
import Spinner from '../../../components/Spinner';
import Card from '../../../components/Movies';
// import Filter from '../../../components/Movies/FilteredBody';

export default () => {
  const { pageIndex, setPageIndex, pageSize, setPageSize, user, setUser } =
    useQuery({
      fetchData,
    });
  const [users, setUsers] = useState([]);
  const { total, data, loading } = useSelector((state) => state.moviesReducer);

  if (loading) return <Spinner />;
  return (
    <div
      className='mx-auto flex justify-center flex-col items-center'
      style={{
        backgroundColor: '#f9f9f9',
      }}
    >
      <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2 max-w-8xl'>
        {/* <Filter users={users} setUser={setUser} user={user} /> */}
        <Card data={data} movie />
        <Pagination
          pageIndex={pageIndex}
          pageCount={Math.ceil(total / pageSize)}
          canPreviousPage={pageIndex > 0}
          canNextPage={pageIndex < 9}
          gotoPage={(e) => setPageIndex(e)}
          pageSize={pageSize}
          setPageSize={setPageSize}
          nextPage={() => setPageIndex((prev) => prev + 1)}
          previousPage={() => setPageIndex((prev) => prev - 1)}
        />
      </div>
    </div>
  );
};
