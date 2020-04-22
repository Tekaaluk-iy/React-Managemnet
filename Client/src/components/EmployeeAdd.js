import React from 'react';
import { post }  from 'axios';

class EmployeeAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            username: '',
            number: '',
            gender: '',
            job: '',
            fileName:''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addEmployee()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
            this.setState({
                file: null,
                username: '',
                number: '',
                gender: '',
                job: '',
                fileName:''
            })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addEmployee = () => {
        const url = '/api/employees';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('name', this.state.username);
        formData.append('number', this.state.number);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>社員追加</h1>
                プロフィール写真: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                名前: <input type="text" name="username" value={this.state.username} onChange={this.handleValueChange}/><br/>
                社員番号: <input type="text" name="number" value={this.state.number} onChange={this.handleValueChange}/><br/>
                性別: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                職級 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">社員追加</button>
            </form>
        )
    }
}

export default EmployeeAdd