import React from 'react';

class Employee extends React.Component {
    render() {
        return (
            <div>
                <EmployeeProfile number={this.props.number} image={this.props.image} name={this.props.name}/>
                <EmployeeInfo sex={this.props.sex} position={this.props.position}/>
            </div>
        )
    }
}

class EmployeeProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.number})</h2>
            </div>
        )
    }
}

class EmployeeInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.sex}</p>
                <p>{this.props.position}</p>
            </div>
        )
    }
}
export default Employee;