import React from "react";

type Props = {
  color: string;
  label: string;
};

const OrderStatusChip = ({ color, label }: Props) => {
  return (
    <span
      className={`px-3 py-1 font-semibold rounded-md ${color} text-gray-50`}
    >
      <span>{label}</span>
    </span>
  );
};

export default OrderStatusChip;
