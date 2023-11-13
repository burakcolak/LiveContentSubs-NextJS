import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { PagePaths } from "@/models/pagePaths";

export const ShoppingCartIcon = () => {
  return (
    <Link href={PagePaths.ShoppingCart}>
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} />
    </Link>
  );
};
