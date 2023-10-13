import React from "react";
import { getOrderList } from "@/lib/services/OrderService";
import OrderRow from "./OrderRow";
import Pagination from "../Pagination/Pagination";

type Props = {
  pageNumber: number;
  pageSize: number;
};

const OrderList: (props: Props) => Promise<JSX.Element> = async ({
  pageNumber,
  pageSize,
}: Props) => {
  const orderResponse = await getOrderList({ pageNumber: pageNumber });

  if (
    !orderResponse ||
    !orderResponse.orders ||
    orderResponse.orders.length === 0 ||
    orderResponse.totalCount === 0
  ) {
    return <div>No orders found</div>;
  }

  const orders = orderResponse.orders;
  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading">Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Order No #</th>
                <th className="p-3">Order Date</th>
                <th className="p-3">Checkout Date</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => {
                  return <OrderRow key={order.identifier} order={order} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        currentPage={pageNumber}
        itemsPerPage={pageSize}
        totalItems={orderResponse.totalCount}
      />
    </>
  );
};

export default OrderList;
