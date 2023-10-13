import React from "react";
import OrderList from "@/components/Orders/OrderList";

const MyOrders = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const pageSize = searchParams.pageSize
    ? parseInt(searchParams.pageSize as string)
    : 10;
  return (
    <>
      <OrderList pageNumber={page} pageSize={pageSize} />
    </>
  );
};

export default MyOrders;
