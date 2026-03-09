"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function SmartPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const getPages = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      // tampilkan semua jika total page kecil
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1); // selalu tampilkan page 1

      // jika currentPage jauh dari awal
      if (currentPage > 4) pages.push("ellipsis");

      // tampilkan page sekitar currentPage
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      // jika currentPage jauh dari akhir
      if (currentPage < totalPages - 3) pages.push("ellipsis");

      pages.push(totalPages); // selalu tampilkan page terakhir
    }

    return pages;
  };

  const pages = getPages();

  return (
    <Pagination>
      <PaginationContent className='justify-center mt-10 flex-wrap gap-2'>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {/* Pages */}
        {pages.map((page, idx) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href='#'
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page as number);
                }}
                className={
                  page === currentPage
                    ? "bg-primary text-white border-none"
                    : ""
                }>
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
