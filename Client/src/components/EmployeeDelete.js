import React from 'react';

class EmployeeDelete extends React.Component {

    deleteEmployee(id) {
        const url = '/api/employees/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteEmployee(this.props.id)}}>削除</button>
        )
    }
}

export default EmployeeDelete;