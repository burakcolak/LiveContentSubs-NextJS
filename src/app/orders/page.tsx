import React from "react";
import OrderList from "@/components/Orders/OrderList";

type Props = {
  searchParams: { [key: string]: string | string | string[] | undefined };
};
const MyOrders = async ({ searchParams }: Props) => {
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
