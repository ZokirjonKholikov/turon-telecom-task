import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../../components/Pagination';
import { useQuery } from '../../../hooks';
import { fetchData } from '../../../redux/modules/posts/actions';
import Spinner from '../../../components/Spinner';
import Posts from '../../../components/Posts';
import PostsFilter from '../../../components/Posts/FilteredBody';
import service from '../../../services/users';

export default () => {
  const { pageIndex, setPageIndex, pageSize, setPageSize, user, setUser } =
    useQuery({
      fetchData,
    });
  const [users, setUsers] = useState([]);
  const { total, data, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    service
      .getAll()
      .then((resp) => {
        const newData = resp.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        setUsers(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <Spinner />;
  return (
    <div
      className='mx-auto'
      style={{
        backgroundColor: '#f9f9f9',
      }}
    >
      <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2'>
        <PostsFilter users={users} setUser={setUser} user={user} />
        <Posts data={data} />
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
