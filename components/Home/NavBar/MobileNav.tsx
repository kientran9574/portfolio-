import { NavLinks } from "@/constants/nav";
import Link from "next/link";
interface IProps {
  handleOffMenu: () => void;
  showMenuBar: boolean;
}
const MobileNav = ({ handleOffMenu, showMenuBar }: IProps) => {
  const navBar = showMenuBar ? "translate-x-0" : "translate-x-full";
  return (
    <div>
      <div
        className={`fixed inset-0 ${navBar} transform  transition-all duration-500 w-full lg:hidden h-screen bg-black opacity-70 z-40`}
      ></div>
      <div
        className={`bg-cyan-300 w-[70%] ${navBar} sm:w-[60%] h-screen absolute right-0 transform transition-all lg:hidden duration-500 delay-300  z-50 `}
      >
        <button onClick={() => handleOffMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-black absolute right-0 mx-4 cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="p-8 mt-10">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.url}
                className="flex flex-col gap-4 text-black font-bold text-2xl mb-6 hover:scale-110 transition-all duration-300"
                key={link.id}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
