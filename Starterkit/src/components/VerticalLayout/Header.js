import PropTypes from "prop-types"
import React, { useState } from "react"
import "./Header.css"

import { connect } from "react-redux"
import {
  Form,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
  Button,
} from "reactstrap"

import { Link } from "react-router-dom"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import logodarkImg from "../../assets/images/logo-dark.png"
import logosmImg from "../../assets/images/logo-sm.png"
import logolightImg from "../../assets/images/logo-light.png"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"

const Header = props => {
  const [search, setsearch] = useState(false)
  const [singlebtn, setSinglebtn] = useState(false)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    var body = document.body
    if (window.screen.width <= 992) {
      body.classList.toggle("sidebar-enable")
    } else {
      body.classList.toggle("vertical-collpsed")
      body.classList.toggle("sidebar-enable")
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logodarkImg} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logolightImg} alt="" height="18" />
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle()
              }}
              data-target="#topnav-menu-content"
            >
              <i className="mdi mdi-menu"></i>
            </button>
          </div>
          <div className="d-flex">
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="fa fa-search"></span>
              </div>
            </form>
            <Dropdown
              className="d-inline-block d-lg-none ms-2"
              onClick={() => {
                setsearch(!search)
              }}
              type="button"
            >
              <DropdownToggle
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                tag="button"
              >
                <i className="mdi mdi-magnify"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                <Form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <Button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Form>
              </DropdownMenu>
            </Dropdown>
            <Button className="gobalBtn hearderBtn">
              <Link to="/add-inquiry">
                Inquiry &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 14q0-3.75 2.625-6.375T18 5v2q-2.925 0-4.963 2.038T11 14H9Zm4 0q0-2.075 1.463-3.538T18 9v2q-1.25 0-2.125.875T15 14h-2ZM5 6q-.825 0-1.413-.588T3 4q0-.825.588-1.413T5 2q.825 0 1.413.588T7 4q0 .825-.588 1.413T5 6Zm-3 5V8.5q0-.625.438-1.063T3.5 7h3q1.125 0 1.938-.713T9.45 4.5h2q-.15 1.5-1.1 2.65T8 8.75V11H2Zm17 6q-.825 0-1.413-.588T17 15q0-.825.588-1.413T19 13q.825 0 1.413.588T21 15q0 .825-.588 1.413T19 17Zm-3 5v-2.25q-1.4-.45-2.35-1.6t-1.1-2.65h2q.2 1.075 1.012 1.787T17.5 18h3q.625 0 1.063.438T22 19.5V22h-6Z"
                  />
                </svg>
              </Link>
            </Button>

            <LanguageDropdown />
            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen()
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>

            <button className="gobalBtn hearderBtn">
              <Link to="/login">
                Log in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.944 18.432a2.577 2.577 0 0 1-2.729 2.5c-2.153.012-4.307 0-6.46 0a.5.5 0 0 1 0-1c2.2 0 4.4.032 6.6 0c1.107-.016 1.589-.848 1.589-1.838V5.63a1.545 1.545 0 0 0-.969-1.471a3.027 3.027 0 0 0-1.061-.095h-6.159a.5.5 0 0 1 0-1c2.225 0 4.465-.085 6.688 0a2.566 2.566 0 0 1 2.5 2.67Z"
                  />
                  <path
                    fill="currentColor"
                    d="M15.794 12.354a.459.459 0 0 0 .138-.312a.3.3 0 0 0 .006-.042a.29.29 0 0 0-.006-.041a.455.455 0 0 0-.138-.313l-3.669-3.668a.5.5 0 0 0-.707.707l2.816 2.815H3.492a.5.5 0 0 0 0 1h10.742l-2.816 2.815a.5.5 0 0 0 .707.707Z"
                  />
                </svg>
              </Link>
            </button>

            <ProfileMenu />
            {/* <div
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar)
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-cog-outline"></i>
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
