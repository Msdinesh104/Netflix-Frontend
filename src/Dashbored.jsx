import React from "react";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Hero from "./assets/netflix.jpg";
import Recent1 from "./assets/recent1.jpeg";
import Recent2 from "./assets/recent2.jpeg";

const Dashbored = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-20">
        <h1 className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-wide cursor-pointer">
          NETFLIX
        </h1>

        <div className="gap-8 text-neutral-300 font-medium hidden md:flex">
          <p className="cursor-pointer hover:text-white transition">Movies</p>
          <p className="cursor-pointer hover:text-white transition">Series</p>
          <p className="cursor-pointer hover:text-white transition">TV Shows</p>
        </div>

        <div className="flex items-center gap-5 text-lg">
          <FaSearch className="cursor-pointer hover:text-red-500 transition" />
          <FaBell className="cursor-pointer hover:text-red-500 transition" />
          <div className="border border-gray-500 rounded-full p-2 hover:bg-gray-700 transition cursor-pointer">
            <FaUser />
          </div>
        </div>
      </nav>

      <section className="flex">
        {/* SIDE MENU */}
        <div className="w-64 px-8 py-10 text-neutral-300 hidden md:block border-r border-gray-800 bg-black/30">
          <h2 className="mb-4 text-lg font-semibold text-white">MENU</h2>
          <div className="flex flex-col gap-3 font-medium">
            <p className="hover:text-red-500 cursor-pointer transition">Home</p>
            <p className="hover:text-red-500 cursor-pointer transition">
              Discovery
            </p>
            <p className="hover:text-red-500 cursor-pointer transition">
              Coming Soon
            </p>
            <p className="hover:text-red-500 cursor-pointer transition">
              Community
            </p>
          </div>

          <h2 className="mt-10 mb-4 text-lg font-semibold text-white">
            GENERAL
          </h2>
          <div className="flex flex-col gap-3 font-medium">
            <p className="hover:text-red-500 cursor-pointer transition">
              Settings
            </p>
            <p className="hover:text-red-500 cursor-pointer transition">Help</p>
          </div>

          <button
            className="mt-10 text-red-500 font-semibold hover:text-red-600 transition underline text-left"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-6 md:px-12 relative">
          {/* HERO */}
          <h1 className="text-2xl font-semibold mb-4 mt-6">Trending Movies</h1>

          <div className="relative group">
            <img
              src={Hero}
              alt="Hero"
              loading="lazy"
              className="rounded-xl w-full shadow-lg shadow-red-900/20 transition group-hover:brightness-75"
            />

            <button className="absolute bottom-4 left-6 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow-md">
              Watch Now
            </button>
          </div>

          {/* RECENTLY WATCHED */}
          <h2 className="text-xl font-semibold mb-6 mt-10">Recently Watched</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[Recent1, Recent2].map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-48 rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                loading="lazy"
              />
            ))}
          </div>

          {/* RECOMMENDED */}
          <h2 className="text-xl font-semibold mb-6 mt-6">
            Recommended Movies
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-10">
            <div className="text-gray-400">
              📌 Add your recommend images here
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#141414] py-10 px-6 md:px-36 space-y-5 border-t border-gray-800">
        <p className="text-white text-sm md:text-lg">
          Questions? Call 000-800-919-1743
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 underline text-sm md:text-base">
          <a>FAQ</a>
          <a>Help Center</a>
          <a>Terms of Use</a>
          <a>Privacy</a>
          <a>Cookie Preferences</a>
          <a>Corporate Information</a>
        </div>

        <select className="bg-[#252424] text-white border px-2 py-1 rounded cursor-pointer">
          <option>English</option>
        </select>
      </footer>
    </div>
  );
};

export default Dashbored;
