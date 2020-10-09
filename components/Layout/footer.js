import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faInstagram,
  faViber,
  faTwitter,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import styles from "./footer.module.scss";
import { Form, Nav } from "react-bootstrap";

library.add(fab);

function Footer(props) {
  return (
    <footer className={`${styles.footer__container}`}>
      <div className={styles.languages}>
        <span>Choose Your Language</span>
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Control as="select" defaultValue="Choose...">
              <option>English</option>
              <option>Deutsch</option>
              <option>Deutsch</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className={styles.social__media}>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        </span>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
        </span>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        </span>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
        </span>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faViber} />
        </span>
      </div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Help Center</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Press Center</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Viki Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Work With Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Soompi</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Distribution Partners</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Advertisers</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav
        className={`justify-content-center ${styles.footer__last}`}
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link eventKey="link-3">Terms of Use</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Privacy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Cookies Policy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Copyright Policy</Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
}

export default Footer;
