import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { ProfileCard } from "./components/ProfileCard";

export default function UserProfilePage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Organization profile");
  return (
    <div className="row">
      <div className="col-md-12">
        <ProfileCard></ProfileCard>
      </div>
    </div>
  );
}
