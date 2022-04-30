import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../../components/Pagination';
import { useQuery } from '../../../hooks';
import { fetchData } from '../../../redux/modules/streams/actions';
import Spinner from '../../../components/Spinner';
import Card from '../../../components/Movies';

export default () => {
  const { pageIndex, setPageIndex, pageSize, setPageSize } = useQuery({
    fetchData,
  });
  const { total, data, loading } = useSelector((state) => state.streamsReducer);

  if (loading) return <Spinner />;
  return (
    <div
      className='mx-auto'
      style={{
        backgroundColor: '#f9f9f9',
      }}
    >
      <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2'>
        <Card data={data} />
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
