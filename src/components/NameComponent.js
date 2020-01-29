import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

class NameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            name: null
        }
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    save = () => {
        this.setState({open: false});
        this.props.setName(this.state.name);
    };

    setEnteredName = (event) => {
        this.setState({name: event.target.value});
    };

    render() {
        return (
            <div>
                <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Chat</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your name
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="name" onChange={this.setEnteredName}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.save} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default NameComponent;
