/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useMemo, useState } from "react";
import { Formik } from "formik";
import { get, merge } from "lodash";
import GetAppIcon from "@material-ui/icons/GetApp";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers";
import { FormHelperText, Switch } from "@material-ui/core";
import clsx from "clsx";
// https://github.com/conorhastings/react-syntax-highlighter#prism
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// See https://github.com/PrismJS/prism-themes
import { coy as highlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  useHtmlClassService,
  setLayoutConfig,
  getInitLayoutConfig,
} from "../../layout";
import { Card, CardBody, CardHeader, Notice } from "../controls";
import Button from '@material-ui/core/Button';

const localStorageActiveTabKey = "builderActiveTab";

export function Builder({ className }) {
  const activeTab = localStorage.getItem(localStorageActiveTabKey);
  const [key, setKey] = useState(activeTab ? +activeTab : 0);
  const [isLoading, setIsLoading] = useState(false);
  const htmlClassService = useHtmlClassService();
  const initialValues = useMemo(
    () =>
      merge(
        // Fulfill changeable fields.
        getInitLayoutConfig(),
        htmlClassService.config
      ),
    [htmlClassService.config]
  );

  const saveCurrentTab = (_tab) => {
    localStorage.setItem(localStorageActiveTabKey, _tab);
  };

  return (
    <>
      <div className={`card card-custom ${className} mb-5`}>
        {/* Header */}
        <div className="card-header py-5">
          <div className="row">
            <h1 className="card-title font-weight-bolder">My Network</h1>
          </div>
        </div>
        <div className="card-header py-5">
          {/* Stat */}
          <div className="col col-12">

            <div className="row justify-content-between">
              <div className="row">
                <h4 className="card-title font-weight-bolder ">This Month</h4>
              </div>
              <div className="row">

                <Button color="success"><GetAppIcon />Report</Button>

              </div>
              <Button color="secondary">View pass report</Button>
            </div>
          </div>
        </div>
      </div>
      {/*Formic off site: https://jaredpalmer.com/formik/docs/overview*/}
      {/* <br/> */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setIsLoading(true);
          setLayoutConfig(values);
        }}
        onReset={() => {
          setIsLoading(true);
          setLayoutConfig(getInitLayoutConfig());
        }}
      >
           <div className="card card-custom">
              {/*Header*/}
              <div className="card-header card-header-tabs-line">
                <ul className="nav nav-dark nav-bold nav-tabs nav-tabs-line" data-remember-tab="tab_id" role="tablist"                >

                  <li className="nav-item">
                    <button
                      className={`nav-link bg-transparent ${key === 0 ? "active" : ""}`}
                      data-toggle="tab"
                      onClick={() => {
                        setKey(0);
                        saveCurrentTab(0);
                      }}
                    >
                      Forum
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link bg-transparent ${key === 1 ? "active" : ""}`}
                      data-toggle="tab"
                      onClick={() => {
                        setKey(1);
                        saveCurrentTab(1);
                      }}
                    >
                      Mentoring
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link bg-transparent ${key === 2 ? "active" : ""}`}
                      data-toggle="tab"
                      onClick={() => {
                        setKey(2);
                        saveCurrentTab(2);
                      }}
                    >
                      Jobs
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link bg-transparent ${key === 3 ? "active" : ""}`}
                      data-toggle="tab"
                      onClick={() => {
                        setKey(3);
                        saveCurrentTab(3);
                      }}
                    >
                      Business Directory
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link bg-transparent ${key === 4 ? "active" : ""}`}
                      data-toggle="tab"
                      onClick={() => {
                        setKey(4);
                        saveCurrentTab(4);
                      }}
                    >
                      Resources
                    </button>
                  </li>

                </ul>
              </div>

              <div className="card-body"></div>
            </div>
         
      </Formik>
    </>
  );
}
