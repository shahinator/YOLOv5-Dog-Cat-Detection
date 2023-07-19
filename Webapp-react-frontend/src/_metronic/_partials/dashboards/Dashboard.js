import React from "react"; 
import { Demo1Dashboard } from "./Demo1Dashboard";
import  { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//step="0.01"
export function Dashboard() {
  return (
    <>
      <div >
        <ToastContainer/>
        <Demo1Dashboard />
      </div>
    </>
  );
}
