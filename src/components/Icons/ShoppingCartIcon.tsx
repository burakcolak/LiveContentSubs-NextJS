import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const ShoppingCartIcon = () => {
  ///put icon into button

  return (
    <Link href={"/shopping-cart"}>
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
    </Link>
  );
};
