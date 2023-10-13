import {
  OrderListResponse,
  OrderListResponseItem,
} from "@/lib/services/OrderService";
import { getOrderStatusDisplayName } from "@/models/orderStatus";
import React from "react";
import OrderStatusChip from "./OrderStatusChip";

type Props = {
  order: OrderListResponseItem;
};

const OrderRow = ({ order }: Props) => {
  return (
    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
      <td className="p-3">
        <p>{order.orderNo}</p>
      </td>
      <td className="p-3">
        <p>{order.createdDate ?? "N/A"}</p>
      </td>
      <td className="p-3">
        <p>{order.checkoutDate ?? "N/A"}</p>
      </td>
      <td className="p-3 text-right">
        <p>{`${order.currency} ${order.totalAmount}`}</p>
      </td>
      <td className="p-3 text-center">
        <OrderStatusChip
          color="bg-teal-600"
          label={getOrderStatusDisplayName(order.status)}
        />
      </td>
      <td>
        <button
          disabled
          className="px-3 py-1 font-semibold rounded-md bg-teal-600 text-gray-50"
        >
          <span>View</span>
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
