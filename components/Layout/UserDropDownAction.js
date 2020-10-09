import React from "react";
import { Dropdown } from "react-bootstrap";
import { auth } from "../../config/firebase";
import Avatar from "./avatar";
import styles from "./userDropDownAction.module.scss";

function UserDropDownAction() {
  const handleSignOut = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <Dropdown className={styles.dropdow__wraper} alignRight={true}>
      <Dropdown.Toggle
        as={Avatar}
        id="dropdown-custom-components"
      ></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Subscription and settings</Dropdown.Item>
        <Dropdown.Item href="#">Profile</Dropdown.Item>
        <Dropdown.Item href="#">Messages</Dropdown.Item>
        <Dropdown.Item href="#">Following</Dropdown.Item>
        <Dropdown.Item href="#">My Collections</Dropdown.Item>
        <Dropdown.Item href="#">Help</Dropdown.Item>
        <Dropdown.Item href="#" onClick={handleSignOut}>
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropDownAction;
