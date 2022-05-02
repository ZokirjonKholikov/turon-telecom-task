/* eslint react/prop-types: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Container, PageButtons, Button, ChangeButton, Wrapper } from './style';

import { useButtons } from './useButtons';
import SelectSize from './SelectSize';

const Pagination = ({
  canPreviousPage,
  canNextPage,
  gotoPage,
  nextPage,
  previousPage,
  pageCount,
  pageIndex,
  pageSize,
  setPageSize,
}) => {
  const buttons = useButtons({ pageCount, pageIndex });

  const handlePageChange = (title) => {
    if (title !== '...') gotoPage(Number(title));
  };

  return (
    <Wrapper className='flex-col sm:flex-row p-2 items-end'>
      <div className='hidden sm:block'>
        <SelectSize size={pageSize} setPageSize={setPageSize} />
      </div>
      <Container>
        <div className='hidden sm:block'>
          <ChangeButton
            color={!canPreviousPage ? '#C4C4C4' : '#2563eb'}
            disabled={!canPreviousPage}
            onClick={previousPage}
          >
            <ChevronLeftIcon
              // color={!canPreviousPage ? '#C4C4C4' : '#262626'}
              fontSize='medium'
            />
          </ChangeButton>
        </div>
        <PageButtons repeat={pageCount > 7 ? 7 : pageCount}>
          {buttons.map((title, index) => (
            <Button
              key={`${index + 1}`}
              onClick={() => handlePageChange(title)}
              // eslint-disable-next-line eqeqeq
              active={pageIndex == title}
            >
              {title !== '...' ? title + 1 : title}
            </Button>
          ))}
        </PageButtons>
        <div className='hidden sm:block'>
          <ChangeButton
            color={!canNextPage ? '#C4C4C4' : '#2563eb'}
            disabled={!canNextPage}
            onClick={nextPage}
          >
            <ChevronRightIcon
              // color={!canPreviousPage ? '#C4C4C4' : '#262626'}
              fontSize='medium'
            />
          </ChangeButton>
        </div>
      </Container>
    </Wrapper>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number,
};
Pagination.defaultProps = {
  pageCount: 40,
};

export default Pagination;
