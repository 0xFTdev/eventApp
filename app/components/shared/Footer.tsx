import Link from "next/link";
import Logo from "@/app/components/shared/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="flex-center wrapper flex-between flex flex-col text-center sm:flex-row">
        <Link href={"/"}>
          <Logo width={128} />
        </Link>
        <p>2024 Eventful - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
