import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const ShoppingCartIcon = () => {
  return (
    <Link href={"/shopping-cart"}>
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
    </Link>
  );
};
