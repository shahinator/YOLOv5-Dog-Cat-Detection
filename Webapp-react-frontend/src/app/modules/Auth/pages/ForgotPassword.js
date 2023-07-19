import React, { useState } from "react";
import { useFormik } from "formik";
import { ApiPostNoAuth } from "../../../../helpers/API/ApiData";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import * as auth from "../_redux/authRedux";
// import { requestPassword } from "../_redux/authCrud";

const initialValues = {
  email: "",
};

function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");
  const [invalid, setinvalid] = useState("");

  const [isRequested] = useState(false);
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is Required"),
    role: Yup.string().required("Role is Required."),
  });

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      // setLoading(true);
      const data = {
        email: values.email,
      };
      const role = values.role;
      await ApiPostNoAuth(`users/forget-password?type=${role}`, data)
        .then((res) => {
          try {
            if (parseInt(res.data.status / 100) === 2) {
              toast.success("We will send you an email to reset your password");
              history.push("/auth/login");

              // setLoading(true);
              setSubmitting(false);
            } else {
              // setLoading(false);
              setSubmitting(false);
              setStatus("Login Credentials are incorrect.");
              toast.error("Can't Login");
            }
          } catch (err) {
            // setLoading(false);
            setSubmitting(false);
            setStatus("Error connecting to network.");
          }
        })
        .catch((err) => {
          toast.error("Could not Login");
        });
    },
  });

  // const PostData = () => {
  //   if (email === "") {
  //     seterror("Please Enter the email");
  //   } else {
  //     if (
  //       !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //         email
  //       )
  //     ) {
  //       // M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
  //       return;
  //     }
  //     initialValues,
  //      validationSchema: LoginSchema,

  //     const role = values.role;
  //     fetch( `http://192.168.29.53:5500/api/users/forget-password?type=${role}`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.message === "Please Enter Valid Email-Id..!") {
  //        toast.error(data.message);
  //           //   M.toast({html: data.error,classes:"#c62828 red darken-3"})
  //         } else {
  //           //    M.toast({html:data.message,classes:"#43a047 green darken-1"})

  //           console.log("newemail",data.message)
  //           toast.success(data.message);

  //           history.push("/email");

  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      {isRequested && <Redirect to="/auth" />}
      {!isRequested && (
        <div className="login-form login-forgot" style={{ display: "block" }}>
          <div className="text-center pb-8">
            <h3 className="font-size-h1">Forgotten Password ?</h3>
            <div className="text-muted font-weight-bold">
              Please enter your email address. We will send you an email to
              reset your password.
            </div>
            <div className="pt-6">
              <img
                className="m-2"
                src={require("../../../../_metronic/layout/components/brand/7th.png")}
                width="170px"
                height="170px"
              ></img>
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
          >
            {formik.status && (
              <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                <div className="alert-text font-weight-bold">
                  {formik.status}
                </div>
              </div>
            )}
            <div className="form-group fv-plugins-icon-container">
              <input
                type="email"
                className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                  "email"
                )}`}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.email}</div>
                </div>
              ) : null}
            </div>

            <div className="form-group fv-plugins-icon-container">
              <select
                className={`form-control form-control-lg form-control-solid ${getInputClasses(
                  "role"
                )}`}
                name="role"
                {...formik.getFieldProps("role")}
              >
                <option>Select Role...</option>
                <option value="admin">Admin </option>
                <option value="artist">Artist</option>
                <option value="manager">Manager</option>
                <option value="partner">Affiliates</option>
              </select>
              {formik.touched.role && formik.errors.role ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.role}</div>
                </div>
              ) : null}
            </div>

            <div className="form-group d-flex flex-wrap flex-center">
              <button
                id="kt_login_forgot_submit"
                type="submit"
                className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
              <Link to="/auth">
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
