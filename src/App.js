import React from "react";
import { useSelector } from "react-redux";
import Calendar from "./components/Calendar";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Notes from "./components/Notes";
import { Col, Container, Row } from "react-bootstrap";
import GoogleLogin from "./components/google";
// import KakaoLogin from "./components/KaKaoLogin";
// import { gapi } from "gapi-script";

function App() {
  const showUpdateNote = useSelector((state) => state.note.showUpdateNote);

  return (
    <body>
      <>
        <header>
          <h1>MENU</h1>
          <nav>
            <span
              onClick={() =>
                window.open(
                  "https://github.com/chayoonji/calendartodopa",
                  "_blank"
                )
              }
            >
              Menu1
            </span>
            <span>Menu2</span>
            <span>Menu3</span>
            <span className="aApp">
              <GoogleLogin
                success={(res) => console.log(res)}
                fail={(res) => console.log(res)}
              />
            </span>
          </nav>
        </header>
        <br></br>
        <br></br>
        <br></br>
        <div className="">
          <Container>
            <Row>
              <Col xs={40} md={50}>
                <Calendar />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Notes />
              </Col>
              <Col xs={12} md={6}>
                <AddNote />
              </Col>
              <Col xs={12} md={6}>
                {showUpdateNote && <UpdateNote />}
              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <footer>
          Copyright &copy; 2020 by Sumit Jangir. All Rights Reserved.
        </footer>
      </>
    </body>
  );
}

export default App;
