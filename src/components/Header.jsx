import React from "react";
 const Header = () => {
    return (
        <>
            <div className="header flex gap-5 justify-between py-3 border-b border-solid border-gray-300">
                <h1 className="font-bold text-3xl"> Knowledge Cafe </h1>
                <div className="user">
                    <span> <img src="https://i.ibb.co/vwGwnhT/boy2.jpg" alt="Image" className="w-14 h-14 p-1 border border-solid border-gray-300 rounded-full" /> </span>
                </div>
            </div>
        </>
    )
 }
 export default Header;