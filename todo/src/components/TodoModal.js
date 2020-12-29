import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from './../models/config'
import firebase from 'firebase'

const TodoModal = (props) => {

    const [input, setInput] = useState('')
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        props.setOpenStateHandler(true);
    };
    const handleClose = () => {
        props.setOpenStateHandler(false);
    };
    const updateTodo = (todoID) => {
        db.collection('todos').doc(todoID).set({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, {merge: true})
        setInput('')
        handleClose()
    }

    return (
        <div>
        <Dialog open={props.openState} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit TODO</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Current Todo: <i>{props.currentTodo.todo}</i>
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Edit TODO"
                type="text"
                fullWidth
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={() => {
                updateTodo(props.currentTodo.id)
                }} color="primary">
                Update
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default TodoModal
