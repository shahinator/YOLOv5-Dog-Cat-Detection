import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute, LayoutSplashScreen } from "../_metronic/layout";
import User from "../_metronic/components/User/User";
import DashboardPage from "./pages/DashboardPage";
import CourseName from '../_metronic/components/CourseSelection/CourseName'
import CourseCategory from '../_metronic/components/CourseSelection/CourseCategory'
import CourseType from '../_metronic/components/CourseSelection/CourseType'
import VehicleCategory from '../_metronic/components/CourseSelection/VehicleCategory'
import VehicleSubCategory from '../_metronic/components/CourseSelection/VehicleSubCategory'
import Cms from '../_metronic/components/Cms/Cms'
import Information from '../_metronic/components/Information/Information'
import ContactUs from "../_metronic/components/ContactUs/ContactUs";
import Payment from "../_metronic/components/Payment/Payment";
import Announcement from "../_metronic/components/Announcement/Announcement";
import Banner from "../_metronic/components/Banner/Banner";
import Description from "../_metronic/components/Description/Description";
import Clients from "../_metronic/components/Clients/Clients";

import Feedback from "../_metronic/components/Feedback/Feedback";
import TimeSlot from "../_metronic/components/TimeSlot/TimeSlot";
import FAQ from "../_metronic/components/FAQ/FAQ";
import Batch from "../_metronic/components/Batch/Batch";
import { getUserInfo } from "../../src/utils/user.util";
import PaymentData from "../_metronic/components/PaymentForm/payment";
import Examiner from "../_metronic/components/Examiner/Examiner";
// import QuestionSet from "../_metronic/components/QuestionSet/QuestionSet";
import Question from "../_metronic/components/Question/Question";
import Menu from "../_metronic/components/Menu/menu";
import Assign from "../_metronic/components/Assign/Assign";
import TakeTest from "../_metronic/components/TakeTest/TakeTest";
import CheckQuestion from "../_metronic/components/CheckQuestion/CheckQuestion";
import CheckTest from "../_metronic/components/CheckQuestion/CheckQuestion";
import Testomonial from "../_metronic/components/Testomonial/Testomonial";
import HelpfulTips from "../_metronic/components/HelpfulTips/HelpfulTips";
import Request from "../_metronic/components/Request/Request";
import QuestionCategory from "../_metronic/components/QuestionCategory/QuestionCategory";
import Images from "../_metronic/components/Images/Images";
import Report from "../_metronic/components/Report/Report";
import CancleCourse from "../_metronic/components/CanleCourse/CancleCourse";
import Partial from "../_metronic/components/parsal/parsal";
import Course from "../_metronic/components/Course/Course";
import FAQCategory from "../_metronic/components/FAQCategory/FAQCategory";
import AllRequest from "../_metronic/components/AllRequest/AllRequest";
import RoleRequest from "../_metronic/components/AllRequest/RoleRequest";
import AssignMenuRequest from "../_metronic/components/AllRequest/AssignMenuRequest";
import Facilities from "../_metronic/components/Facilities/Facilities";
import PreLogin from "../_metronic/components/PreLogin/prelogin";

export default function BasePage() {
  let userInfo = getUserInfo()

  return (
    <>

      <Suspense fallback={<LayoutSplashScreen />}>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <ContentRoute exact path="/dashboard" component={DashboardPage} />
          <ContentRoute exact path="/menu" component={Menu} />
          <ContentRoute exact path="/assign" component={Assign} />


          <ContentRoute exact path="/about-us" component={Cms} />
          <ContentRoute exact path="/policy-& terms" component={Information} />
          <ContentRoute exact path="/coursename" component={CourseName} />
          <ContentRoute exact path="/coursecategory" component={CourseCategory} />
          <ContentRoute exact path="/coursetype" component={CourseType} />
          <ContentRoute exact path="/vehiclecategory" component={VehicleCategory} />
          <ContentRoute exact path="/vehiclesubcategory" component={VehicleSubCategory} />
          <ContentRoute exact path="/question-category" component={QuestionCategory} />
          <ContentRoute exact path="/registered-user" component={User} />
          <ContentRoute exact path="/payment-history" component={Payment} />
          <ContentRoute exact path="/take-test" component={TakeTest} />
          <ContentRoute exact path="/check-question" component={CheckTest} />
          <ContentRoute exact path="/testimonials" component={Testomonial} />
          <ContentRoute exact path="/helpful-tips" component={HelpfulTips} />
          <ContentRoute exact path="/recheck-request" component={Request} />
          <ContentRoute exact path="/question-images" component={Images} />
          <ContentRoute exact path="/reports" component={Report} />
          <ContentRoute exact path="/cancel-course" component={CancleCourse} />
          <ContentRoute exact path="/enrolled-user" component={Partial} />


          <ContentRoute exact path="/announcement" component={Announcement} />
          {/* /////////////////////////////////////////////////////////////////////////*/}
          <ContentRoute exact path="/home-page banner" component={Banner} />
          <ContentRoute exact path="/home-page content" component={Description} />
          <ContentRoute exact path="/clients" component={Clients} />

          <ContentRoute exact path="/timeslot-addition" component={TimeSlot} />
          <ContentRoute exact path="/feedback-records" component={Feedback} />
          <ContentRoute exact path="/faq-section" component={FAQ} />
          <ContentRoute exact path="/faq-category" component={FAQCategory} />
          <ContentRoute exact path="/batch-creation" component={Batch} />
          <ContentRoute exact path="/examiner" component={Examiner} />
          <ContentRoute exact path="/question-addition" component={Question} />
          <ContentRoute exact path="/how-to start a course" component={Course} />
          <ContentRoute exact path="/all-request" component={AllRequest} />
          <ContentRoute exact path="/role-request" component={RoleRequest} />
          <ContentRoute exact path="/assign-menu request" component={AssignMenuRequest} />
          <ContentRoute exact path="/facility" component={Facilities} />
          <ContentRoute exact path="/pre-login" component={PreLogin} />


          {/* /////////////////////////////////////////////////////////////////////////*/}

          <ContentRoute exact path="/contact-us" component={ContactUs} />
          <ContentRoute exact path="/role" component={Examiner} />




          <Redirect to="error/error-v6" />
        </Switch>
      </Suspense>

    </>
  );
}
