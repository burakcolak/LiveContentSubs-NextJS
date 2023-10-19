import Image from "next/image";
import React from "react";

type Props = {
  image: React.ComponentProps<typeof Image>;
  title?: string;
  description: string;
};

const Cart = ({ image, title, description }: Props) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900 hover:scale-105 hover:bg-kick-green ">
      <div className="flex justify-center">
        <Image {...image} className="object-cover object-center rounded-md" />
      </div>
      <div className="mt-6 mb-2">
        {title && (
          <h2 className="text-xl font-semibold text-center">{title}</h2>
        )}
      </div>
      <p className="text-gray-800 text-center">{description}</p>
    </div>
  );
};

export default Cart;
