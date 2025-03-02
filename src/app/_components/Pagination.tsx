"use client";
import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
// import { useSearchParams } from "react-router";
import ReactPaginate from "react-paginate";

// interface CustomEventPageClick {
//   selected: number;
// }

type Props = {
  pageCount: number;
  // handlePageClick: (event: CustomEventPageClick) => void;
};

const Pagination: React.FC<Props> = (props) => {
  const { pageCount } = props;
  const [width, setWidth] = useState(window.innerWidth);
  // const [searchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(0);

  // useEffect(() => {
  //   const page = Number(searchParams.get("page")) || 1;
  //   setCurrentPage(page - 1);
  // }, [searchParams]);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.target as Window).innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack direction="horizontal" className="">
      <ReactPaginate
        breakLabel={width <= 640 ? null : "..."}
        nextLabel=">"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={width <= 340 ? 1 : 2}
        marginPagesDisplayed={width <= 640 ? 0 : 2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        // forcePage={currentPage}
        forcePage={1}
        containerClassName="paginations__container flex gap-3 justify-center items-center"
        breakClassName="paginations__points"
        pageClassName="paginations__page border-2 border-primary-400/20 rounded-[8px] w-8 h-8 flex justify-center items-center text-primary-300 hover:border-primary-300 hover:text-primary-200 transition-colors"
        activeClassName="paginations__page--active border-primary-300 text-primary-200"
        previousClassName="paginations__page--prev text-primary-300"
        nextClassName="paginations__page--next text-primary-300"
        disabledClassName="paginations__page--disabled text-primary-400 border-primary-500"
        pageLinkClassName="paginations__link"
        activeLinkClassName="paginations__link--active"
        previousLinkClassName="paginations__link paginations__link--prev"
        nextLinkClassName="paginations__link paginations__link--next"
        disabledLinkClassName="paginations__link--disabled"
        hrefAllControls={true}
      />
    </Stack>
  );
};

export default React.memo(Pagination);
