import '../scss/styles.scss';
import Checklists from '../components/forms/checklists';
import Maintenance from '../components/forms/maintenance';
import VesselSpecs from '../components/forms/vessel_specs';
import { Button, Grid, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar } from '@material-ui/core';
import SideMenu from '../components/sideMenu'
import AppBar from '../components/appBar';
import MenuDrawer from '../components/menuDrawer'
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import fetch from 'isomorphic-unfetch';

const appName = 'Seaworthy'

class Home extends React.Component{
  constructor(){
    super();
    this.menuHandleClick = this.menuHandleClick.bind(this);
    this.state = {
      "activeComponent" : "maintenance"
    };
  }
  render(){
      return(
        <div>
          <AppBar appName={appName}/>
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

  loadComponent(comp){
    console.log('loading...', comp);
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