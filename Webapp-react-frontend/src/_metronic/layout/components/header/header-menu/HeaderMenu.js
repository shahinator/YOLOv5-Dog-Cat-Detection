/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { checkIsActive } from "../../../../_helpers";
import { getUserInfo } from "../../../../utils/user.util";

export function HeaderMenu({ layoutProps }) {
    let userInfo = getUserInfo();
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    };

    return (
        <div
            id="kt_header_menu"
            className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
            {...layoutProps.headerMenuAttributes}
        >
            {/*begin::Header Nav*/}
            <ul className={`menu-nav ${layoutProps.ulClasses}`}>
                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-rel ${getMenuItemActive(
                        "/dashboard"
                    )}`}
                >
                    {/* <NavLink className="menu-link" to="/dashboard"> */}
                    <span className="menu-text">7cmg | {userInfo?.user?.role === "Admin" ? "Admin" : "Artist"}</span>
                    {layoutProps.rootArrowEnabled && (
                        <i className="menu-arrow" />
                    )}
                    {/* </NavLink> */}
                </li>
            </ul>
            {/*end::Header Nav*/}
        </div>
    );
}
