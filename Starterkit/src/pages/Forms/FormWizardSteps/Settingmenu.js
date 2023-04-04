import { Component } from "react"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

class SettingMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.setting_menu}
          toggle={() =>
            this.setState({ setting_menu: !this.state.setting_menu })
          }
        >
          <DropdownToggle
            color="primary"
            className="arrow-none waves-effect waves-light"
          >
            <i className="mdi mdi-settings ms-2" /> Settings
          </DropdownToggle>
          <DropdownMenu className="language-switch" right>
            <DropdownItem tag="a" href="add-inquiry">
              Solved Inquiry
            </DropdownItem>
            <DropdownItem tag="a" href="add-inquiry">
              Unsolved Inquiry
            </DropdownItem>
            <DropdownItem tag="a" href="add-inquiry">
              Completed Inquiry
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

export default SettingMenu
