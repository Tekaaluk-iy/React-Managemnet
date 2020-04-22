import React from 'react';
import './App.css';
import Employee from './components/Employee';
import EmployeeAdd from './components/EmployeeAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

/*
리액트 라이프사이클
1 constructor()
2 componentWillMount()
3 render()
4 componentDidMount()

props or state => shouldComponentUpdate()
*/

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    employees: '',
    completed: 0
  }
}

stateRefresh = () => {
  this.setState({
    employees: '',
    completed: 0
  });
  this.callApi()
  .then(res => this.setState({employees: res}))
  .catch(err => console.log(err));
}

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({employees: res}))
    .catch(err => console.log(err));
  }

  //비동기
  callApi = async () => {
    const response = await fetch('/api/employees');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render () {
  const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
              <TableCell>順番</TableCell>
                <TableCell>写真</TableCell>
                <TableCell>社員番号</TableCell>
                <TableCell>名前</TableCell>
                <TableCell>性別</TableCell>
                <TableCell>職級</TableCell>
                <TableCell>設定</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            { this.state.employees ? this.state.employees.map(e => { 
              return (
                <Employee 
                  stateRefresh={this.stateRefresh}
                  key={e.ID} id={e.ID} image={e.IMAGE} number={e.NUMBER} name={e.NAME}
                  sex={e.SEX} 
                  position={e.POSITION}
                  />)
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>}
            </TableBody>
          </Table>
        </Paper>
        <EmployeeAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);