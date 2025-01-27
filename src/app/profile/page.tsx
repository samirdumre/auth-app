"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

  async function logout() {
    try {
      await axios.get("/api/users/log out");
      // toast.success("Logout successful")
      router.push("/login");
    } catch (err: any) {
      // console.error("Error logging out", err.message);
      toast.error(err.message);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col text-2xl">
      <div>
        <h1>Profile Page</h1>
      </div>
      <br />
      <div>
        <button
          onClick={logout}
          className="bg-blue-500 p-2 text-white font-bold rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
