import { Button, Col, Row } from "react-bootstrap";
import IconButton from "./components/IconButton";

export default function App() {
  return (
    <Row>
      <Col
        sm={1}
        className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
        style={{ position: "sticky", top: 0 }}
      >
        <IconButton className="bi bi-house" isTop />
        <IconButton className="bi bi-search" />
        <IconButton className="bi bi-compass" />
        <IconButton className="bi bi-film" />
        <IconButton className="bi bi-chat" />
        <IconButton className="bi bi-heart" />
        <IconButton className="bi bi-plus-square" />
        <IconButton className="bi bi-person-circle" />
        <IconButton className="bi bi-list" isBottom />
      </Col>
      <Col sm={11}>Main</Col>
    </Row>
  )
}