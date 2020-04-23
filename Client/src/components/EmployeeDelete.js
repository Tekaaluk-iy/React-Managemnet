import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';

class EmployeeDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
          open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    deleteEmployee(id) {
        const url = '/api/employees/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>削除</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        削除警告
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            選択した社員情報を削除します。
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteEmployee(this.props.id)}}>削除</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>閉じる</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default EmployeeDelete;