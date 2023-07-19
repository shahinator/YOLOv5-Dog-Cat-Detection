import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { QuickUserToggler } from "../extras/QuiclUserToggler";
import { getUserInfo } from "../../../../utils/user.util";

export function Topbar() {
    let userInfo = getUserInfo();
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            viewSearchDisplay: objectPath.get(
                uiService.config,
                "extras.search.display"
            ),
            viewNotificationsDisplay: objectPath.get(
                uiService.config,
                "extras.notifications.display"
            ),
            viewQuickActionsDisplay: objectPath.get(
                uiService.config,
                "extras.quick-actions.display"
            ),
            viewCartDisplay: objectPath.get(
                uiService.config,
                "extras.cart.display"
            ),
            viewQuickPanelDisplay: objectPath.get(
                uiService.config,
                "extras.quick-panel.display"
            ),
            viewLanguagesDisplay: objectPath.get(
                uiService.config,
                "extras.languages.display"
            ),
            viewUserDisplay: objectPath.get(
                uiService.config,
                "extras.user.display"
            ),
        };
    }, [uiService]);

    return (
        <div className="topbar d-flex justify-content-between w-100 align-items-center">
            <div>
                {/*begin::Header Nav*/}

                {/* <NavLink className="menu-link" to="/dashboard"> */}
                <span className="menu-text">Cloud 
                    {/* {userInfo?.admin?.role?.roleName === "superadmin" && ("Admin")} */}
                </span>
                {/* </NavLink> */}

                {/*end::Header Nav*/}
            </div>
            {layoutProps.viewUserDisplay && <QuickUserToggler />}
        </div>
    );
}
