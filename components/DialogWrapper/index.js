import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from '../LoginForm'

class DialogWrapper extends React.Component {


  render() {
    return (
      <div> 
        <Dialog
          open={this.props.open}
          onClose={this.props.closeDialog}
          aria-labelledby="form-dialog-title">
          {this.props.wrapThis}
        </Dialog>
      </div>
    );
  }
}

export default DialogWrapper
