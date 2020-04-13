import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Employee extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.number}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.sex}</TableCell>
                <TableCell>{this.props.position}</TableCell>
            </TableRow>
        )
    }
}

export default Employee;