import React from 'react';
import './App.css';
import Employee from './components/Employee';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const employees = [
  {
  'number': '20200413001',
  'image':'https://placeimg.com/128/128/1',
  'name': '가나다',
  'sex': '男性',
  'position':'社員'
  },
  {
    'number': '20200413002',
    'image':'https://placeimg.com/128/128/2',
    'name': '라마바',
    'sex': '男性',
    'position':'社員'
  },
  {
    'number': '20200413003',
    'image':'https://placeimg.com/128/128/3',
    'name': '사아자',
    'sex': '女性',
    'position':'社員'
  }
]

class App extends React.Component {
  render () {
  const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>写真</TableCell>
              <TableCell>社員番号</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職級</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { employees.map(e => { return (
              <Employee
                key={e.number}
                image={e.image}
                number={e.number}
                name={e.name}
                sex={e.sex}
                position={e.position}
                />)
          }) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);