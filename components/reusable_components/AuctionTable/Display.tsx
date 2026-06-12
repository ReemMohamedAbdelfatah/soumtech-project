import { data } from '@/components/reusable_components/AuctionTable/data'
import AuctionTable from '@/components/reusable_components/AuctionTable/AuctionTable'
import AuctionPagination from '@/components/reusable_components/AuctionTable/pagination'



export default function Display({page}: {page: string})  {
    const pageSize = 20;
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (Number(page || 1) - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);
  return <>
      <AuctionTable status="upcoming" currentData={currentData } />

      {totalPages > 1 && (
        <AuctionPagination totalPages={totalPages} currentPage={page || '1'} />
      )}
  </>; 
}