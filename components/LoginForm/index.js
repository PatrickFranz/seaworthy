import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class LoginForm extends React.Component {
  
  state = {
    showPassword: false
  }

  handleClickShowPassword = () => {
    this.setState( state => ({showPassword : !state.showPassword}));
  }

  render(){

    return(
      <div className='loginForm'>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              id="username"
              margin="normal"
              variant="outlined"
              label="Username"
              type="text"
              fullWidth
              />
            <TextField
              id="password"
              margin="normal"
              variant="outlined"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Password"
              value={this.state.password}
              // onChange={this.handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword} >
  
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
  
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
  
          </DialogContent>
          
          <DialogActions>
            <Button onClick={this.props.closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.closeDialog} color="primary">
              Login
            </Button>
          </DialogActions>
      </div>
    )
  }
}
export default LoginForm;