import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline"; // Ensure you have @heroicons/react installed
import "./Header.scss";

const Header = () => {
  return (
    <header className="header bg-black text-white flex justify-between items-center p-4">
      {/* Hamburger Menu Icon */}
      <MenuIcon className="h-6 w-6 md:hidden" />

      {/* Logo */}
      <h1 className="text-xl font-bold">audiophile</h1>

      {/* Shopping Cart Icon */}
      <ShoppingCartIcon className="h-6 w-6" />
    </header>
  );
};

export default Header;
