/* eslint-disable react/destructuring-assignment */
// @flow
// React related imports
import React, {Component} from 'react';

// Material-UI imports
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Translate, withLocalize} from 'react-localize-redux';
import webTranslations from './Translations/web.json';
import {buttonStyle} from '../Global/GlobalStyles';

type State = {
  bookmarkInfo?: {
    siteName?: string,
    folderName?: string,
    url?: string,
  },
};
type Props = {
  handleRequestCancel: () => mixed,
  webDialogIsOpen: boolean,
  handleRequestSave: () => mixed,
  handleRequestCancel: () => mixed,
  bookmarkInfo?: {
    siteName?: string,
    folderName?: string,
    url?: string,
  },
  addTranslation: (translations: {}) => {},
};

class WebAddBookmarkDialog extends Component<Props, State> {
  static defaultProps = {
    bookmarkInfo: {
      siteName: '',
      folderName: '',
      url: '',
    },
  };

  constructor(props) {
    super(props);
    this.props.addTranslation(webTranslations);
  }

  state = {
    bookmarkInfo: {
      siteName: this.props.bookmarkInfo.siteName,
      folderName: this.props.bookmarkInfo.folderName || 'Home',
      url: this.props.bookmarkInfo.url,
    },
  };

  handleFieldChange = (event) => {
    const newState = {
      bookmarkInfo: {
        [event.target.id]: event.target.value,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <Dialog
        onClose={this.props.handleRequestCancel}
        open={this.props.webDialogIsOpen}
        maxWidth='md'>
        <DialogTitle>
          <Translate id='web.addbookmark' />
        </DialogTitle>
        <DialogContent style={{display: 'flex', width: '650px'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <TextField
                id='siteName'
                label='Site Name'
                // className={classes.textField}
                value={this.state.bookmarkInfo.siteName}
                onChange={(event) => this.handleFieldChange(event)}
                margin='normal'
                style={{width: '550px', fontSize: '1rem'}}
              />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <TextField
                id='url'
                label='URL'
                disabled
                // className={classes.textField}
                value={this.state.bookmarkInfo.url}
                onChange={(event) => this.handleFieldChange(event)}
                margin='normal'
                style={{width: '550px', fontSize: '1rem'}}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            style={buttonStyle.standard.small}
            onClick={() => this.props.handleRequestCancel()}>
            <Translate id='web.cancel' />
          </Button>
          <Button
            style={buttonStyle.standard.small}
            onClick={() => this.props.handleRequestSave(this.state.bookmarkInfo)}>
            <Translate id='web.save' />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withLocalize(WebAddBookmarkDialog);
