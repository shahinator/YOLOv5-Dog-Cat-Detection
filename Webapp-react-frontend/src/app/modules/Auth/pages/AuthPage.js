/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Switch, Redirect, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import Changepassword from "../pages/changepassowrd"
import { Dashboard } from "../../../../_metronic/_partials";


export function AuthPage() {
  const today = new Date().getFullYear();
  return (
    <>
      <div className="">
        {/*begin::Login*/}
        <div
          className=""
          id="kt_login"
        >
          {/*begin::Aside*/}
        
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden" style={{height:"100vh"}}>
            {/*begin::Content header*/}
            {/* {path === "/auth/registration" ? (
              <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10" onClick={() => setData()}>
                <span className="font-weight-bold text-dark-50">
                  Don't have an account yet?
                </span>
                <Link
                  to="/auth/registration"
                  className="font-weight-bold ml-2"
                  id="kt_login_signup"
                >
                  Sign Up!
                </Link>
              </div>
            ) : (
              <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
                <span className="font-weight-bold text-dark-50">
                  already have an account yet?
                </span>
                <Link
                  to="/auth/login"
                  className="font-weight-bold ml-2"
                  id="kt_login_signup"
                >
                  Sign In!
                </Link>
              </div>
            )} */}

            {/*end::Content header*/}
           
            {/* begin::Content body */}
          
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
         <div>
         <div className="my-5 d-flex justify-content-center">
                <img
                  alt="Logo"
                  className=""
                  style={{width:"400px"}}
                  src={toAbsoluteUrl("/media/logos/logo.svg")}
                />
              </div>
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <ContentRoute
                  path="/changepassword"
                  component={Changepassword}
                />

             
              

                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
         </div>
            </div>
            {/*end::Content body*/}

            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
