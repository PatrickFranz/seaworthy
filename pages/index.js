import '../scss/styles.scss';
import Checklists from '../components/forms/checklists';
import Maintenance from '../components/forms/maintenance';
import VesselSpecs from '../components/forms/vessel_specs';
import SideMenu from '../components/sideMenu'
import AppBar from '../components/AppBar'
import DialogWrapper from '../components/DialogWrapper';
import LoginForm from '../components/LoginForm';

const appName = 'Seaworthy'

class Home extends React.Component{
  constructor(){
    super();
    this.menuHandleClick = this.menuHandleClick.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);

    this.state = {
      "activeComponent" : "vessel_specs",
      "isDialog": false
    };
  }
  render(){
      return(
        <div>
          <AppBar appName={appName}
                  handleLogin={this.openDialog}
          />
          <DialogWrapper open={this.state.isDialog}
                         openDialog={this.openDialog}
                         closeDialog={this.closeDialog}
                         wrapThis={<LoginForm />}
          />

          <div className="body_grid">
            <SideMenu menuHandler={this.menuHandleClick}/>
            <div className="mainWindow">
              {this.loadComponent()}
            </div>
          </div>
        </div>
      )
    }

  menuHandleClick(e){
    this.setState({"activeComponent": e.currentTarget.attributes.href.nodeValue});
  }

  openDialog(e){
    console.log('open')
    e.preventDefault();
    this.setState({isDialog: true});
  }

  closeDialog(e){
    console.log("close")
    this.setState({isDialog: false})
  }

  loadComponent(comp){
    let component;
    switch(this.state.activeComponent){
      case 'maintenance':
        component = <Maintenance />;
        break;
      case 'vessel_specs':
        component = <VesselSpecs />;
        break;
      case 'checklists':
        component = <Checklists />;
        break;
    }
    return component;
  }
}

export default Home;