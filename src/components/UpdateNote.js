import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote, showUpdateNote } from '../actions'

function UpdateNote() {
  const note = useSelector((state) => state.note.editTile)
  const dispatch = useDispatch()

  function onUpdateClick() {
    if (!document.getElementById('formUpdateTitle').value.trim()) {
      alert('Please Enter Valid Title')
      return false
    }

    dispatch(
      updateNote({
        title: document.getElementById('formUpdateTitle').value.trim(),
        description: document
          .getElementById('formUpdateDescription')
          .value.trim(),
        date: note.date,
        key: note.key,
      })
    )
    document.getElementById('formUpdateTitle').value = ''
    document.getElementById('formUpdateDescription').value = ''
  }

  return (
    <Card className={'update-note-wrapper'}>
      <h3>{`수정 (${note.date})`}</h3>
      <Form>
        <Form.Group controlId="formUpdateTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            defaultValue={note && note.title}
          />
        </Form.Group>
        <Form.Group controlId="formUpdateDescription">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="내용"
            defaultValue={note && note.description.substring(0, 100)}
          />
        </Form.Group>
      </Form>
      <p>
        <Button variant="primary" onClick={onUpdateClick}>
          추가
        </Button>{' '}
        <Button
          variant="secondary"
          onClick={() => dispatch(showUpdateNote(false))}
        >
          비우기
        </Button>
      </p>
    </Card>
  )
}

export default UpdateNote
