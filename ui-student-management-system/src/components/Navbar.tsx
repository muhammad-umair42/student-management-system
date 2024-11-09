import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCHBAR  */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={'/search.png'} width={14} alt="searchpng" height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER  */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
          <Image src={'/message.png'} width={20} height={20} alt="image" />
        </div>
        <div className="relative bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
          <Image src={'/announcement.png'} width={20} height={20} alt="image" />
          <div className="absolute -right-3 -top-3 w-5 h-5 bg-purple-500 text-xs  rounded-full flex items-center justify-center text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3 ">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src={'/avatar.png'}
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
