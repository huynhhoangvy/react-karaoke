import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import classnames from 'classnames'

import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";


function DemoNavbar({ user, logout, token, query, setQuery, doFetch }) {

  const formRef = useRef(null);

  const [searchFocused, setSearchFocused] = useState(false);

    useEffect(() => {
      let headroom = new Headroom(document.getElementById("navbar-main"));
      headroom.init();
    }, []);

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Examples</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/landing" tag={Link}>
                      Landing
                      </DropdownItem>
                    <DropdownItem to="/home" tag={Link}>
                      Home
                      </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto navbar-nav-hover" navbar><div>
                <Form
                  style={{height: "44px"}}
                  ref={formRef}
                  onSubmit={event => {
                    event.preventDefault();
                    doFetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=${query},karaoke`);
                  }}>
                  <FormGroup
                    className={classnames({
                      focused: searchFocused
                    })}

                  >
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Search"
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                        onFocus={e => setSearchFocused(true)}
                        onBlur={e => setSearchFocused(false)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Form></div>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-hat-3" />
                  </DropdownToggle>
                  <DropdownMenu>
                    {user === 'guest' ?
                      <>
                        <DropdownItem to="/login" tag={Link}>
                          Login
                      </DropdownItem>
                        <DropdownItem to="/register" tag={Link}>
                          Register
                      </DropdownItem>
                      </>
                      :
                      <>
                        <DropdownItem to="/profile" tag={Link}>
                          {user}
                        </DropdownItem>
                        <Button type="button" onClick={() => logout(token)}>
                          Logout
                      </Button>
                      </>
                    }
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default DemoNavbar;
