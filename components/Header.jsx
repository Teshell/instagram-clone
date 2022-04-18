import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-white max-w-6xl">
        {/* Left */}
        <div className="hidden lg:inline-grid relative h-24 w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
