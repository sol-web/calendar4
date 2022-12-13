import React from 'react'
import { useSelector } from 'react-redux'
import Calendar from './components/Calendar'
import AddNote from './components/AddNote'
import UpdateNote from './components/UpdateNote'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Notes from './components/Notes'
import { Card, Col, Container, Row } from 'react-bootstrap'
import GoogleLogin from './components/google'

function App() {
  const showUpdateNote = useSelector((state) => state.note.showUpdateNote)

  return (
    <body>
      <>
        <header>
          <h1>MENU</h1>
          <nav>
            <span
              onClick={() =>
                window.open('https://github.com/chayoonji/oodo.git', '_blank')
              }
            >
              차윤지
            </span>
            <span
              onClick={() =>
                window.open('https://github.com/QWOFTQ/PortFolio', '_blank')
              }
            >
              강채린
            </span>
            <span
              onClick={() =>
                window.open('https://github.com/sol-web/siteweb', '_blank')
              }
            >
              김솔
            </span>
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

        <Card>
          <h5>
            <br></br>
            <br></br>
            강채린(92113437) 백엔드+프론트엔드 | 김솔(92113542)
            백엔드+프론트엔드 | 차윤지(92113877) 백엔드+프론트엔드
            <br></br>
            <br></br>
            <br></br>
            <span
              onClick={() =>
                window.open('https://youtu.be/DplqQpflmy4', '_blank')
              }
            >
              소개 영상
            </span>
          </h5>
          <br></br>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <footer> WWW___2002</footer>
      </>
    </body>
  )
}

export default App
