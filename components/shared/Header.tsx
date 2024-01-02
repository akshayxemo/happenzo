import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            width={128}
            height={38}
            alt="Happenzo Logo"
          />
        </Link>

        <div className="w-32 flex justify-end gap-3"></div>
      </div>
    </header>
  );
};
