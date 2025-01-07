import React, { useEffect, useState } from "react";

function Header() {
  // Retrieve the saved theme or default to 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Apply theme to the HTML root element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save the theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="header flex justify-between">
      <div className="logo_container w-32">
        <img src="./catlogo.png" alt="" />
      </div>
      <div className="">
        <ul className="flex text-xl">
          <li className="px-8 mt-8">
            <button
              onClick={toggleTheme}
              className="px-2 bg-[#321C0F] dark:bg-[#B49986] text-[#B49986] dark:text-[#321C0F] font-semibold rounded-lg shadow-md  dark:hover:bg-[#B49986] transition"
            >
              Mode
            </button>
          </li>
          <li className="px-8 mt-8">Home</li>
          <li className="px-8 mt-8">About Us</li>
          <li className="px-8 mt-8">Contact Us</li>
          <li className="px-8 mt-8">Search</li>
          <li className="px-8 mt-8">Profile</li>
          <li className="px-8 mt-8">Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
