import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { ApiPost, ApiPostNoAuth } from "../../../../helpers/API/ApiData";
import * as authUtil from "../../../../utils/auth.util";
import * as userUtil from "../../../../utils/user.util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormattedMessage } from "react-intl";
import { number } from "prop-types";


const initialValues = {
  phone: "",
  // password: "",
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const LoginSchema = Yup.object().shape({
    phone: Yup.string()
      // .phone("Wrong phone format")
      // .min(10, "Minimum 10 symbols")
      // .max(10, "Maximum 10 symbols")
      // .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, "Please enter valid number")
      .required("Email or Phone is Required"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is Required"),
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
    validationSchema: LoginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      const data = {
        phone: String(values.phone),
        password: values.password,
        // role:'61aa037f803e260c3821ad0f'
      };
      await ApiPostNoAuth("admin/login", data)
        .then((res) => {
          if (res.data.result === -1) {
            toast.error(res.data.message);
          } else {
            authUtil.setToken(res.data.payload.token);
            userUtil.setUserInfo(res.data.payload);

            window.location.reload();
            setLoading(true);
            setSubmitting(false);

            // history.push({
            //     pathname:"/dashboard",
            //     state:{phone:data?.phone},
            //     state:{password:data?.password}
            // })

          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
    },
  });


  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h2 className="" style={{ fontSize: "30px" }}>
          {/* <FormattedMessage id="AUTH.LOGIN.TITLE" /> */}
          Login Account
        </h2>
        <p className="text-muted font-weight-bold">
          Enter your Phone Number and Password

        </p>
      </div>
      {/* end::Head */}
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
      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
          ""
        )}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email or Phone"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "phone"
            )}`}
            name="phone"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.phone}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-center align-items-center">
          {/* <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            forgot password?
          </Link> */}
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary btn-login font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
          </button>
        </div>

        {/* <div className="d-flex justify-content-center">
          <span className="font-weight-bold text-dark-50">
            Read our <Link>Onboarding Policy</Link> here.
          </span>
        </div> */}
      </form>

      {/*end::Form*/}
    </div>
  );
}
