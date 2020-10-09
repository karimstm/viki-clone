import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "./header.module.scss";
import { useStateValue } from "../../config/StateProvider";
import UserDropDownAction from "./UserDropDownAction";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const [{ user }] = useStateValue();

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={`${styles.bgdark}`}>
      <Container fluid>
        <Link href="/">
          <Navbar.Brand>
            <img
              className="logo"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjIxcHgiIGhlaWdodD0iNDJweCIgdmlld0JveD0iMCAwIDIyMSA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTAuMiAoNTUwNDcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnZpa2lCbHVlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlJha3V0ZW5WaWtpLUxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNi4wMDAwMDAsIC0yMC4wMDAwMDApIiBmaWxsPSIjMEM5QkZGIj4KICAgICAgICAgICAgPGcgaWQ9InZpa2lCbHVlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMSIgcG9pbnRzPSIxMTIgMzUgMjggMzUgMzQuNjkxOTU0NSA0MiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLjcxMTYsMjUuNjY3IEMyNy44MjI2LDI1LjY2NyAyNS43MDc2LDIyLjgyMiAyNS43MDc2LDE5LjIzIEMyNS43MDc2LDE1LjYzOSAyNy44MjI2LDEyLjc5MyAzMC43MTE2LDEyLjc5MyBDMzMuNjA0NiwxMi43OTMgMzUuNjQyNiwxNS42MzkgMzUuNjQyNiwxOS4yMyBDMzUuNjQyNiwyMi44MjIgMzMuNjA0NiwyNS42NjcgMzAuNzExNiwyNS42NjcgWiBNMzUuNTY0Niw3Ljg4MyBMMzUuNTY0Niw4Ljg5IEMzNC4wMTE2LDcuOTAxIDMyLjYxODYsNy4zMjYgMzAuNzExNiw3LjMyNiBDMjQuODUzNiw3LjMyNiAyMC40MDI2LDEyLjY2OCAyMC40MDI2LDE5LjIzIEMyMC40MDI2LDI1Ljc5MiAyNC44NTM2LDMxLjEzMiAzMC43MTE2LDMxLjEzMiBDMzIuNjE4NiwzMS4xMzIgMzQuMDExNiwzMC41NTkgMzUuNTY0NiwyOS41NjggTDM1LjU2NDYsMzAuNTc0IEw0MC43MTM2LDMwLjU3NCBMNDAuNzEzNiw3Ljg4MyBMMzUuNTY0Niw3Ljg4MyBaIiBpZD0iRmlsbC0yIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzYuODE3Niw3Ljg4MjggTDc2LjgxNzYsMjEuMjEyOCBDNzYuODE3NiwyMy43MTI4IDc1LjA5OTYsMjUuODI0OCA3Mi41OTc2LDI1LjgyNDggQzcwLjA5NzYsMjUuODI0OCA2OC4zNzk2LDIzLjcxMjggNjguMzc5NiwyMS4yMTI4IEw2OC4zNzk2LDcuODgyOCBMNjMuMjI4Niw3Ljg4MjggTDYzLjIyODYsMjEuMjEyOCBDNjMuMjI4NiwyNi42ODE4IDY2Ljk3MDYsMzEuMTMxOCA3Mi40NDA2LDMxLjEzMTggQzc0Ljk3MzYsMzEuMTMxOCA3Ni44MTc2LDI5LjczMDggNzYuODE3NiwyOS43MzA4IEw3Ni44MTc2LDMwLjU3MzggTDgxLjk2NzYsMzAuNTczOCBMODEuOTY3Niw3Ljg4MjggTDc2LjgxNzYsNy44ODI4IFoiIGlkPSJGaWxsLTQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjQuODA0NCwzMC41NzQyIEwxMjQuODA0NCwxNy4yNDQyIEMxMjQuODA0NCwxNC43NDQyIDEyNi41MjI0LDEyLjYzMjIgMTI5LjAyNDQsMTIuNjMyMiBDMTMxLjUyNDQsMTIuNjMyMiAxMzMuMjQyNCwxNC43NDQyIDEzMy4yNDI0LDE3LjI0NDIgTDEzMy4yNDI0LDMwLjU3NDIgTDEzOC4zOTM0LDMwLjU3NDIgTDEzOC4zOTM0LDE3LjI0NDIgQzEzOC4zOTM0LDExLjc3NTIgMTM0LjY1MTQsNy4zMjUyIDEyOS4xODE0LDcuMzI1MiBDMTI2LjY0ODQsNy4zMjUyIDEyNC44MDQ0LDguNzI2MiAxMjQuODA0NCw4LjcyNjIgTDEyNC44MDQ0LDcuODgzMiBMMTE5LjY1NDQsNy44ODMyIEwxMTkuNjU0NCwzMC41NzQyIEwxMjQuODA0NCwzMC41NzQyIFoiIGlkPSJGaWxsLTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LjU1OTIsNy42MTAzIEw5LjA3NDIsNy42MTAzIEMxMS40OTMyLDcuNjEwMyAxMy40NzEyLDkuNTc3MyAxMy40NzEyLDEyLjAwMTMgQzEzLjQ3MTIsMTQuNDMxMyAxMS40OTMyLDE2LjM5NzMgOS4wNzQyLDE2LjM5NzMgTDUuNTU5MiwxNi4zOTczIEw1LjU1OTIsNy42MTAzIFogTTUuNTU5MiwzMC41NzQzIEw1LjU1OTIsMjEuNzgzMyBMOS4zNjkyLDIxLjc4MzMgTDE1Ljk2NDIsMzAuNTc0MyBMMjIuNzA2MiwzMC41NzQzIEwxNC43MzcyLDE5Ljk2NjMgQzE3LjIyMTIsMTguMTgzMyAxOC44NTEyLDE1LjI4NDMgMTguODUxMiwxMi4wMDEzIEMxOC44NTEyLDYuNjA4MyAxNC40NjcyLDIuMjI4MyA5LjA3NDIsMi4yMjgzIEwwLjE3MzIsMi4yMjgzIEwwLjE3MzIsMzAuNTc0MyBMNS41NTkyLDMwLjU3NDMgWiIgaWQ9IkZpbGwtOCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTk1Ljg0NzgsMjUuMjA1MSBDOTUuMzg1OCwyNS41MTgxIDk0LjgwMTgsMjUuNzYzMSA5NC4xMjU4LDI1Ljc2MzEgQzkzLjI4NDgsMjUuNzYzMSA5MS42OTc4LDI1LjEyMDEgOTEuNjk3OCwyMi45NzgxIEw5MS42OTc4LDEzLjI2ODEgTDk2LjEwMTgsMTMuMjY4MSBMOTYuMTAxOCw3Ljg4MzEgTDkxLjY5NzgsNy44ODMxIEw5MS42OTc4LDIuMjI4MSBMODYuNTQ3OCwyLjIyODEgTDg2LjU0NzgsNy44ODMxIEw4My44MjM4LDcuODgzMSBMODMuODIzOCwxMy4yNjgxIEw4Ni41NDc4LDEzLjI2ODEgTDg2LjU0NzgsMjMuMDU4MSBDODYuNTQ2OCwyOC4xMjUxIDkwLjM2MzgsMzEuMTUxMSA5NC4yMDM4LDMxLjE1MTEgQzk1LjYzNTgsMzEuMTUxMSA5Ny42MjE4LDMwLjY4MzEgOTkuMjQxOCwyOS43MjMxIEw5NS44NDc4LDI1LjIwNTEgWiIgaWQ9IkZpbGwtMTAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTEyIiBwb2ludHM9IjUzLjUxNjggMTguNTE5NSA2Mi4zNTA4IDcuODgyNSA1NS4xMzE4IDcuODgyNSA0OC45NTM4IDE1Ljc4NzUgNDguOTUzOCAwLjM1NDUgNDMuNjQ5OCAwLjM1NDUgNDMuNjQ5OCAzMC41NzQ1IDQ4Ljk1MzggMzAuNTc0NSA0OC45NTM4IDIxLjI1MjUgNTYuNTQ4OCAzMC41NzQ1IDYzLjc2NDggMzAuNTc0NSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExMi4yMzg5LDE2LjI5OTggTDEwMi45NjM5LDE2LjI5OTggQzEwNC4wNDc5LDEwLjk4NDggMTExLjIzNTksMTAuNjc5OCAxMTIuMjM4OSwxNi4yOTk4IE0xMDcuNzQyOSw3LjMwNjggQzEwMS43ODI5LDcuMzA2OCA5Ny41MDY5LDEyLjU0NDggOTcuNTA2OSwxOS4yMjg4IEM5Ny41MDY5LDI2LjI1NTggMTAyLjg3MzksMzEuMTUxOCAxMDguMjU0OSwzMS4xNTE4IEMxMTAuOTcwOSwzMS4xNTE4IDExNC40NTE5LDMwLjIyMDggMTE3LjM3NTksMjYuMDcxOCBMMTEyLjgyNjksMjMuNDQ1OCBDMTA5LjMwODksMjguNjMwOCAxMDMuNDQ1OSwyNS45OTg4IDEwMi43Njg5LDIwLjgxMzggTDExNy42MDM5LDIwLjgxNzggQzExOC44NzI5LDEyLjY2NjggMTEzLjYwMjksNy4zMDY4IDEwNy43NDI5LDcuMzA2OCIgaWQ9IkZpbGwtMTQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTE2IiBwb2ludHM9IjE1NC4xNDMyIDMuNjQ1NSAxNTkuNDE1MiAyMS4yODE1IDE2NC42MTEyIDMuNjQ1NSAxNzIuMzg2MiAzLjY0NTUgMTYyLjQ4ODIgMzAuNTc0NSAxNTYuMzQzMiAzMC41NzQ1IDE0Ni4zMzAyIDMuNjQ1NSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTgiIHBvaW50cz0iMTc0Ljg2OCAzMC41NzQgMTgyLjI2NCAzMC41NzQgMTgyLjI2NCAzLjY0NSAxNzQuODY4IDMuNjQ1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yMCIgcG9pbnRzPSIxODYuNDU3NyAzMC41NzQyIDE4Ni40NTc3IDMuNjQ1MiAxOTMuODUzNyAzLjY0NTIgMTkzLjg1MzcgMTMuODg2MiAyMDIuMDQ1NyAzLjY0NTIgMjEwLjM4OTcgMy42NDUyIDIwMC42MDM3IDE1LjcwNjIgMjExLjA3MTcgMzAuNTc0MiAyMDIuNTc1NyAzMC41NzQyIDE5NS45MDA3IDIwLjY3NTIgMTkzLjg1MzcgMjIuNzk5MiAxOTMuODUzNyAzMC41NzQyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yMSIgcG9pbnRzPSIyMTIuNjI3IDMwLjU3NCAyMjAuMDIzIDMwLjU3NCAyMjAuMDIzIDMuNjQ1IDIxMi42MjcgMy42NDUiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              alt="Viki"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">All shows</NavDropdown.Item>
              <NavDropdown.Item href="/">Movies</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Community</Nav.Link>
            <Nav.Link href="#link">Apps</Nav.Link>
          </Nav>
          <Nav>
            <div className={styles.search__input}>
              <input
                className={!showSearch && `${styles.w0}`}
                type="text"
                placeholder="Find shows, Celebrities..."
              />
              <span onClick={() => setShowSearch(!showSearch)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
            {user ? (
              <UserDropDownAction />
            ) : (
              <Link href="/login">
                <a className="nav-link">Log in</a>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
