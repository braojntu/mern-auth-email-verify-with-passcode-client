import React from "react";
import logo from "../assets/logo.jpg";

function FormContainer() {
  return (
    <div className="box-border">
      <div className="flex flex-col bg-gray-200 p-4">
        <div className="bg-white flex flex-col min-h-screen rounded-2xl bt-5 px-5 py-10">
          <div className="flex justify-center items-top font-bold mb-1 text-3xl">
            <span className="text-green-500">Mobile</span>First
          </div>
          <div className="flex justify-center items-top">
            <img src={logo} alt="logo" className="object-contain h-24 w-24" />
          </div>
          {/* <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-100 outline-none text-sm flex-1"
            />
          </div>
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <input
              type="password"
              name="password"
              placeholder="********"
              className="bg-gray-100 outline-none text-sm flex-1"
            />
          </div> 
        </div>*/}
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
