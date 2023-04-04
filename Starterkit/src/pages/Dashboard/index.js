import PropTypes from "prop-types"
import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap"
import { Link } from "react-router-dom"

// Custom Scrollbar
import SimpleBar from "simplebar-react"

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png"
import servicesIcon2 from "../../assets/images/services-icon/02.png"
import servicesIcon3 from "../../assets/images/services-icon/03.png"
import servicesIcon4 from "../../assets/images/services-icon/04.png"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"
import user5 from "../../assets/images/users/user-5.jpg"
import user6 from "../../assets/images/users/user-6.jpg"
import smimg1 from "../../assets/images/small/img-1.jpg"
import smimg2 from "../../assets/images/small/img-2.jpg"

// Charts
import LineAreaChart from "../AllCharts/apex/lineareachart"
import RadialChart from "../AllCharts/apex/apexdonut"
import Apexdonut from "../AllCharts/apex/apexdonut1"
import SparkLine from "../AllCharts/sparkline/sparkline"
import SparkLine1 from "../AllCharts/sparkline/sparkline1"
import Salesdonut from "../AllCharts/apex/salesdonut"

import "chartist/dist/scss/chartist.scss"

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Dashboard | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
}

export default withTranslation()(Dashboard)
