import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Card, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import NoteTile from "./NoteTile";

function Notes() {
  const notes = useSelector((state) => state.note.notes);

  const [showNotes, setshowNotes] = useState({
    active: 1,
    notes: notes,
  });

  const showCurrentNotes = useCallback(() => {
    const today = new Date();
    setshowNotes({
      active: 1,
      notes: [
        ...notes.filter(
          (n) =>
            Date.parse(n.date) ===
            Date.parse(
              `${
                today.getMonth() + 1
              }/${today.getDate()}/${today.getFullYear()}`
            )
        ),
      ],
    });
  }, [notes]);

  const showPastNotes = useCallback(() => {
    const today = new Date();
    setshowNotes({
      active: 0,
      notes: [
        ...notes.filter(
          (n) =>
            Date.parse(n.date) <
            Date.parse(
              `${
                today.getMonth() + 1
              }/${today.getDate()}/${today.getFullYear()}`
            )
        ),
      ],
    });
  }, [notes]);

  const showFutureNotes = useCallback(() => {
    const today = new Date();
    setshowNotes({
      active: 2,
      notes: [
        ...notes.filter(
          (n) =>
            Date.parse(n.date) >
            Date.parse(
              `${
                today.getMonth() + 1
              }/${today.getDate()}/${today.getFullYear()}`
            )
        ),
      ],
    });
  }, [notes]);

  useEffect(() => {
    switch (showNotes.active) {
      case 0:
        showPastNotes();
        break;
      case 1:
        showCurrentNotes();
        break;
      case 2:
        showFutureNotes();
        break;
      default:
        showCurrentNotes();
        break;
    }
  }, [
    showNotes.active,
    notes,
    showCurrentNotes,
    showFutureNotes,
    showPastNotes,
  ]);

  return (
    <Card className="notes-wrapper">
      <Row>
        <Col>
          <h3>메모장</h3>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <ButtonGroup size="sm">
            <Button
              variant="success"
              onClick={showPastNotes}
              active={showNotes.active === 0}
            >
              지난 일정
            </Button>
            <Button
              variant="success"
              onClick={showCurrentNotes}
              active={showNotes.active === 1}
            >
              현재 일정
            </Button>
            <Button
              variant="success"
              onClick={showFutureNotes}
              active={showNotes.active === 2}
            >
              이후 일정
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {showNotes.notes && showNotes.notes.length ? (
        showNotes.notes.map((n, index) => (
          <NoteTile note={n} key={index} id={index + 1} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <h4>일정이 없습니다.</h4>
          <h5>우측 페이지를 통해 등록해주세요</h5>
        </div>
      )}
    </Card>
  );
}

export default Notes;
