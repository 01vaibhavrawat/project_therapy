import {useState} from 'react'
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


const NavCom = (args) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">Project Therapy</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/story">Story</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
                {/*<UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>*/}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  export default NavCom