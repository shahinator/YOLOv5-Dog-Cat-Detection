import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { getLatLng } from "use-places-autocomplete";
import { ApiGet } from "../../../helpers/API/ApiData";
import { getUserInfo } from "../../../utils/user.util";
import DataTable, { defaultThemes } from "react-data-table-component";
import { Tooltip } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import logo from './1.jpeg';
import logo2 from './2.jpeg';
import logo3 from './3.jpeg';
import logo4 from './4.jpeg';
import logo5 from './5.jpeg';
import logo6 from './6.jpeg';
import logo7 from './7.jpeg';

import {
  MixedWidget1, StatsWidget11,
  // StatsWidget11,
  // StatsWidget12
} from "../widgets";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// import TextField from "@material-ui/core/TextField";
// import { Button } from "react-bootstrap";
// import { ApiPost } from "../../../helpers/API/ApiData";
export function Demo1Dashboard() {
  const [count, setCount] = useState();
  const [examinercount, setExaminerCount] = useState();
  const [dataenteryrcount, setDataEnteryCount] = useState();
  const [isViewMoreAboutus, setIsViewMoreAboutus] = useState(false);
  const [dataViewMore, setDataViewMore] = useState({});
  let userInfo = getUserInfo();


  const getAll = async () => {
    await ApiGet(
      `admin/count`
    )
      .then((res) => {
      
        setCount(res?.data?.payload);
      })
      .catch((err) => { });
  }
  const getAllDataEntry = async () => {
    const data = {
      Examiner: userInfo?.admin?._id,
    };
    await ApiGet(
      `batch/getBatchByDataEntry/${data?.Examiner}?page=1&limit=10`
    )
      .then((res) => {

        setDataEnteryCount(res?.data?.payload?.count);
      })
      .catch((err) => {
      
      });
  }
  const handleViewMoreClose = () => {
    setIsViewMoreAboutus(false);
    setDataViewMore({});
  };
  const getAllExaminer = async () => {
    const data = {
      Examiner: userInfo?.admin?._id,
    };
    await ApiGet(
      `batch/getBatchByExaminer/${data?.Examiner}?page=1&limit=10`
    )
      .then((res) => {

        setExaminerCount(res?.data?.payload?.count);
      })
      .catch((err) => {
      
      });
  }

  const data = [
    {
        sno: 1,
        date:'1 july',
        name: 'Cat',
        per:'0.97',
        image:<img
      src={logo}
      alt="dog"
    />
    },
    {
      sno: 2,
      date:'1 july',
      name: 'Dog',
      per:'0.80',
      image:<img
      src={logo2}
      alt="dog"
    />
  },
  {
    sno: 3,
    date:'1 july',
    name: 'Cat',
    per:'0.96',
    image:<img
    src={logo3}
    alt="cat"
  />
},
{
  sno: 4,
  date:'1 july',
  name: 'Dog',
  per:'0.94',
  image:<img
  src={logo4}
  alt="dog"
/>
},
{
  sno: 5,
  date:'1 july',
  name: 'Dog',
  per:'0.97',
  image:<img
  src={logo5}
  alt="dog"
/>
},
{
  sno: 6,
  date:'1 july',
  name: 'Cat',
  per:'0.96',
  image:<img
  src={logo6}
  alt="cat"
/>
},
  {
    sno: 7,
    date:'1 july',
    name: 'Dog',
    per:'0.87',
    image:<img
    src={logo7}
    alt="dog"
  />
},
]

  const filteredCourseName = [
    {
        name: '1',
        selector: row => row.SNo,
        sortable: true,
    },
    {
      name: '2',
      selector: row => row.SNo,
      sortable: true,
  },
  {
    name: '3',
    selector: row => row.SNo,
    sortable: true,
},
]

//   const filteredCourseName = [
//     {
//       name: "Designation",
//       cell: (row) => {
//           return <span>{"-"}</span>;
//       },
//       sortable: true,
//       width: "165px",
//   },
//   {
//     name: "Designation",
//     cell: (row) => {
//         return <span>{"-"}</span>;
//     },
//     sortable: true,
//     width: "165px",
// },
// {
//   name: "Designation",
//   cell: (row) => {
//       return <span>{"-"}</span>;
//   },
//   sortable: true,
//   width: "165px",
// },
// {
//   name: "Designation",
//   cell: (row) => {
//       return <span>{"-"}</span>;
//   },
//   sortable: true,
//   width: "165px",
// },
// {
//   name: "Designation",
//   cell: (row) => {
//       return <span>{"-"}</span>;
//   },
//   sortable: true,
//   width: "165px",
// },
// {
//   name: "Designation",
//   cell: (row) => {
//       return <span>{"-"}</span>;
//   },
//   sortable: true,
//   width: "165px",
// },
//   ]

  let i = 0;
  const columns = [
    {
      name: "Index",
    selector: (row) => row?.sno,
      width: "120px",
    },
  //   {
  //     name: "SNo",
  //     cell: (row, index) => index+1,
  //     width: "65px",
  // },
// {
//   name: "Date",
//   cell: (row) => {
//     return <span>{moment(row?.createdAt).format("ll")}</span>;
//   },
//   selector: (row) => row?.createdAt,
//   sortable: true,
//   // width: "65px",
// },
{
  name: "Date",
selector: (row) => row?.date,
  width: "120px",
},
{
  name: "Image Name",
selector: (row) => row?.name,
  width: "120px",
}
// ,
// {
//   name: "Image",
// selector: (row) => row?.image,
//   width: "65px",
// }
// ,

//       {
//           name: "Image Name",
//           cell: (row) => {
//               return <span>{"-"}</span>;
//           },
//           sortable: true,
//           width: "165px",
//       },
//       {
//           name: "Images",
//           cell: (row) => {
//               return <span>{"-"}</span>;
//           },
//           sortable: true,
//           width: "165px",
//       }
      ,
      {
        name: "Detection Percentage",
      selector: (row) => row?.per,
        width: "120px",
      },
      {
        name: "View Detail",
        cell: (row) => {
          return (
            <>
              <div
                  className="cursor-pointer pl-2"
                  onClick={() => {
                    setIsViewMoreAboutus(true);
                    setDataViewMore(row);
                  }}
                >
                  <Tooltip title="Show More" arrow>
                    <InfoOutlinedIcon />
                  </Tooltip>
                </div>
            </>
          );
        },
      },
  ];
  // * Table Style
  const customStyles = {
      header: {
          style: {
              minHeight: "56px",
          },
      },
      headRow: {
          style: {
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              borderTopColor: defaultThemes.default.divider.default,
          },
      },
      headCells: {
          style: {
              "&:not(:last-of-type)": {
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: defaultThemes.default.divider.default,
              },
          },
      },
      cells: {
          style: {
              "&:not(:last-of-type)": {
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                  borderRightColor: defaultThemes.default.divider.default,
              },
          },
      },
  };



  // useEffect(() => {
  
  //   if (userInfo?.admin?.role?.roleName === 'superadmin' || userInfo?.admin?.role?.roleName === 'admin') {
  //     getAll()
  //   }
  //   if (userInfo?.admin?.role?.roleName === 'Data Entry') {
  //     getAllDataEntry()
  //   }
  //   if (userInfo?.admin?.role?.roleName === 'Examiner') {
  //     getAllExaminer()
  //   }
  // }, [])
  return (
    <>



      {
        <div className="row align-items-center">
          {/* <div className="col-lg-4 col-xxl-4 mb-5 ">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>User</h1></div>
                  <div>
                    <h3>{count?.Users}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 mb-5">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>Vehicle Category</h1></div>
                  <div>
                    <h3>{count?.vehicleCategory}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 mb-5">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>Course Category</h1></div>
                  <div>
                    <h3>{count?.courseCategory}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 mb-5">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>Course Name</h1></div>
                  <div>
                    <h3>{count?.courseName}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 mb-5">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>Course Type</h1></div>
                  <div>
                    <h3>{count?.courseType}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 mb-5">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>Data Entry</h1></div>
                  <div>
                    <h3>{count?.dataEntrys}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-4 mb-5">
            <div className="card card-custom py-5">
              <div className="card-body p-0 text-center">
                <div className="">
                  <div className="mb-3"><h1>Examiner</h1></div>
                  <div>
                    <h3>{count?.examiners}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                        style={{
                            marginTop: "-3rem",
                        }}
                        // progressPending={isLoaderVisible}
                        // progressComponent={
                        //     <Loader type="Puff" color="#334D52" height={30} width={30} />
                        // }
                        highlightOnHover
                        pagination
                        paginationServer
                        paginationTotalRows={count}
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[10, 20, 25, 50, 100]}
                        paginationDefaultPage={1}
                        // onChangePage={(page) => {
                        //     setPage(page);
                        // }}
                        // onChangeRowsPerPage={(rowPerPage) => {
                        //     setCountPerPage(rowPerPage);
                        // }}
                    />

        </div>
      }

     {isViewMoreAboutus === true ? (
      <Dialog
      fullScreen
      open={isViewMoreAboutus}
      onClose={handleViewMoreClose}
      TransitionComponent={Transition}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleViewMoreClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <List>
              <div className="honda-container">
                <div className="other-information-child-text-style1">
                  <h2>Detalied Information  </h2>
                </div>
                <div className="honda-text-grid12 honda-text-grid-border">
                <div className="honda-text-grid-items">
                    <span>Index Number</span>
                    {<div>{dataViewMore?.sno}</div>}
                  </div>
                  
                  <div className="honda-text-grid-items">
                    
                    <div className="honda-text-grid-items">
                      <span>Captured Date:</span>
                      {
                        <div>
                          {dataViewMore?.date}
                        </div>
                      }
                    </div>
                    <span>Image Name:</span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: dataViewMore?.name,
                      }}
                      className=""
                    />
                  </div>
                  <div className="honda-text-grid-items">
                    <span>Detection Percentage</span>
                    {<div>{dataViewMore?.per}</div>}
                  </div>
                  <div className="honda-text-grid-items">
                    <span>Image</span>
                    {<div>{dataViewMore?.image}</div>}
                  </div>
                  
                  
                </div>
              </div>
              </List>
        </Dialog>
            ) : null}
     

    </>
  );
}
