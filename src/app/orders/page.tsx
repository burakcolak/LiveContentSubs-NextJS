import React from "react";
import OrderList from "@/components/Orders/OrderList";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { AuthOnly } from "@/components/AuthOnly/AuthOnly";

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
      <AuthProvider>
        <AuthOnly>
          <OrderList pageNumber={page} pageSize={pageSize} />
        </AuthOnly>
      </AuthProvider>
    </>
  );
};

export default MyOrders;
