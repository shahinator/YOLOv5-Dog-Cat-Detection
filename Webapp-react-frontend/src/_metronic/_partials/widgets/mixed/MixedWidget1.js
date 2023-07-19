import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../../../utils/user.util";
import { ApiGet } from "../../../../helpers/API/ApiData";
import User from "../../../components/User/User";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

// import Inventory from "../../../components/Inventory/Inventory";
// import MarketPlace from "../../../components/MarketPlace/MarketPlace";
// import Order from "../../../components/Order/Order";


export function MixedWidget1({ className }) {
  let userInfo = getUserInfo();

  const [selectedTable, setSelectedTable] = useState("Users");
  const [countData, setCountData] = useState({});
  const [countDataAll, setCountDataAll] = useState("");
  const [title, setTitle] = useState("");
  const [monthData, setMonthData] = useState();


  useEffect(() => {
    document.title = "Honda | Dashboard";
    setTitle("Dashboard | Honda");
  }, []);

  // useEffect(() => {
  //   getcount();
  // }, []);

  // const getcount = async () => {
  //   // if (userInfo?.admin?.role === "superadmin") {
  //   await ApiGet(`user/count`)
  //     .then((res) => {
  //       console.log("getcountAdmin", res);
  //       setCountData(res?.data?.payload);
  //       // setMonthData(res?.data?.payload?.countProperty);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // }
  // };



  return (
    <div >
      {/* Header */}
      <div >
        <div className="honda-logo-center-alignment-page">
          <img src={toAbsoluteUrl("/media/logos/honda-logo.png")} />
          {/* Stat */}
          <div

          >
          </div>
          {userInfo?.role === "admin" && (
            <>
              <div className="card-spacer">
                <div className="row m-5">
                  <div className="col bg-light-warning px-6 py-8 rounded-xl mr-5">
                    <span className="text-warning font-weight-bold font-size-h3 d-block my-2">
                      {countData?.allUser}
                    </span>
                    <a
                      href="#"
                      className="text-warning font-weight-bold font-size-h6"
                      onClick={() => setSelectedTable("Users")}
                    >
                      Total Number Of Users
                    </a>
                  </div>
                  {/* <div className="col bg-light-danger px-6 py-8 rounded-xl mr-5">
                    <span className="text-danger font-weight-bold font-size-h3 d-block my-2">
                      {countData?.allInventory}
                    </span>
                    <a
                      href="#"
                      className="text-danger font-weight-bold font-size-h6 mt-2"
                      onClick={() => setSelectedTable("Inventory")}
                    >
                      Total Number Of Inventory
                    </a>
                  </div> */}
                  {/* <div className="col bg-light-danger px-6 py-8 rounded-xl mr-5">
                    <span className="text-danger font-weight-bold font-size-h3 d-block my-2">
                      {countData?.allMarketPlace}
                    </span>
                    <a
                      href="#"
                      className="text-danger font-weight-bold font-size-h6 mt-2"
                      onClick={() => setSelectedTable("MarketPlace")}
                    >
                      Total Number Of MarketPlace
                    </a>
                  </div> */}
                  {/* <div className="col bg-light-warning px-6 py-8 rounded-xl mr-5">
                    <span className="text-warning font-weight-bold font-size-h3 d-block my-2">
                      {countData?.allOrder}
                    </span>
                    <a
                      href="#"
                      className="text-warning font-weight-bold font-size-h6"
                      onClick={() => setSelectedTable("Order")}
                    >
                      Total Number Of Order
                    </a>
                  </div> */}
                </div>
              </div>
              {/* <div className="card-spacer">
                <div className="row m-5">
                <div className="col bg-light-warning px-6 py-8 rounded-xl mr-5">
                    <span className="text-warning font-weight-bold font-size-h3 d-block my-2">
                      3
                    </span>
                    <a
                      href="#"
                      className="text-warning font-weight-bold font-size-h6"
                      onClick={() => setSelectedTable("Order")}
                    >
                      All Order
                    </a>
                  </div>
                  <div className="col bg-light-danger px-6 py-8 rounded-xl mr-5">
                    <span className="text-danger font-weight-bold font-size-h3 d-block my-2">
                      8
                    </span>
                    <a
                      href="#"
                      className="text-danger font-weight-bold font-size-h6 mt-2"
                      onClick={() => setSelectedTable("MarketPlace")}
                    >
                      All MarketPlace
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="my-5 mx-5">
                {selectedTable === "Users" ? (
                  <User title={title} getNewCount={getcount} />)
                // ) : selectedTable === "Inventory" ? (
                //   <Inventory title={title} getNewCount={getcount} />
                // ) : selectedTable === "Order" ? (
                //   <Order title={title} />
                // ) : selectedTable === "MarketPlace" ? (
                //   <MarketPlace title={title} />
                // ) 
                :(
                  <></>
                )}
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
