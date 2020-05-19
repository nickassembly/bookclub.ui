import React, {Fragment, Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core';
import {blue} from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {green} from '@material-ui/core/colors';
import AddBookForm from './AddBookForm';

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: 10,
  },
  checkBox: {
    color: 'black',
  },
});

class UserBooklist extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loading: true,
    showModal: false,
    books: [],
    checkedBooks: this.props.checkedBooks,
    selectedBooks: this.props.selectedBooks,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      checkedBook: nextProps.checkedBook,
      selectedBooks: nextProps.selectedBooks,
    });
  }

  async componentDidMount() {
    const url = 'https://bookclubapi.azurewebsites.net/api/v1/books';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({book: data, loading: false});
  }

  handleClickCheckbox = (event) => {
    this.props.handleChange(event.target.checked);
  };

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.checked});
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <Fragment>
            <h1> Book Want List</h1>
            <TableContainer component={Paper}>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Selected</TableCell>
                    <TableCell align='center'>Isbn </TableCell>
                    <TableCell align='center'>Author</TableCell>
                    <TableCell align='center'>Title</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.book.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>
                        <Checkbox
                          className={classes.checkBox}
                          checked={this.state.checkedBook}
                          onChange={this.handleChange('checkedBook')}
                          value='checkedBook'
                          icon={<CheckBoxOutlineBlank className={classes.checkBox} />}
                          checkedIcon={<CheckBoxIcon className={classes.checkBox} />}
                        />
                      </TableCell>
                      <TableCell align='center'>{book.isbn} </TableCell>
                      <TableCell align='center'>{book.author}</TableCell>
                      <TableCell align='center'>{book.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div>
              <Button className={classes.button} size='small' color='primary' variant='outlined'>
                Add Book
              </Button>
              <Button className={classes.button} size='small' color='secondary' variant='outlined'>
                Delete Book
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(UserBooklist);
