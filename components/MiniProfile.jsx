import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://links.papareact.com/3ke"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">zinedine_hamadi</h2>
        <h1 className="text-sm text-gray-400">Welcome to Instagram</h1>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
