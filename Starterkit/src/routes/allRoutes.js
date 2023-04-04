import AboutUs from "pages/AboutUs/AboutUs"
import ContactUs from "pages/ContactUs/ContactUs"
import Dashboard from "pages/Dashboard"
import EmailCompose from "pages/Email/email-compose"
import EmailInbox from "pages/Email/email-inbox"
import EmailRead from "pages/Email/email-read"
import EmailTemplateBilling from "pages/EmailTemplate/email-template-billing"
import MapsGoogle from "pages/Maps/MapsGoogle"
import React from "react"
import { Redirect } from "react-router-dom"
import AddInquiry from "../pages/Forms/AddInquiry"
import PagesGallery from "../pages/Utility/PagesGallery"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import DatatableTables from "../pages/Tables/DatatableTables"
import EditableTables from "../pages/Tables/EditableTables"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  //aboutus
  { path: "/about-us", component: AboutUs },

  //contactus
  { path: "/contact-us", component: ContactUs },

  //calendar
  { path: "/calendar", component: Dashboard },

  // //profile
  { path: "/profile", component: Dashboard },

  //Email
  { path: "/email-inbox", component: EmailInbox },
  { path: "/email-read", component: EmailRead },
  { path: "/email-compose", component: EmailCompose },

  // Email Template
  { path: "/email-template-billing", component: EmailTemplateBilling },

  // Maps
  { path: "/maps-google", component: MapsGoogle },

  // Forms
  { path: "/add-inquiry", component: AddInquiry },

  // Ui
  { path: "/pages-gallery", component: PagesGallery },

  //table
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-editable", component: EditableTables },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  // { path: "/", exact: true, component: () => <Redirect to="/pages-gallery" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register },
  // { path: "/pages-maintenance", component: PagesMaintenance },
  // { path: "/pages-comingsoon", component: PagesComingsoon },
  // { path: "/pages-404", component: Pages404 },
  // { path: "/pages-500", component: Pages500 },
  // Authentication Inner
  // { path: "/pages-login", component: Login1 },
  // { path: "/pages-login-2", component: Login2 },
  // { path: "/pages-register", component: Register1 },
  // { path: "/pages-register-2", component: Register2 },
  // { path: "/page-recoverpw", component: Recoverpw },
  // { path: "/page-recoverpw-2", component: Recoverpw2 },
  // { path: "/pages-forgot-pwd", component: ForgetPwd1 },
  // { path: "/auth-lock-screen", component: LockScreen },
  // { path: "/auth-lock-screen-2", component: LockScreen2 },
  // { path: "/page-confirm-mail", component: ConfirmMail },
  // { path: "/page-confirm-mail-2", component: ConfirmMail2 },
  // { path: "/auth-email-verification", component: EmailVerification },
  // { path: "/auth-email-verification-2", component: EmailVerification2 },
  // { path: "/auth-two-step-verification", component: TwostepVerification },
  // { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
]

export { userRoutes, authRoutes }
