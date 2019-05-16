import { List, ListItem, Link} from '@material-ui/core';

const menuItems = [
  {"name": "Vessel Specs", "url": "vessel_specs"},
  {"name": "Maintenance", "url": "maintenance"},
  {"name": "Checklists", "url": "checklists"}
];

const sideMenu = (props) => (
  <div className="menu-container">
    <List>
      {menuItems.map( item => (
        <ListItem button
                  key={item.name}
                  id={item.name}
                  href={item.url}
                  onClick={props.menuHandler}>
          {item.name}
        </ListItem>
      ))}
    </List>
  </div>
)

function handleMenuClick(e){
  console.log("Clicked: ", e.target.id, e.target.href);
}

export default sideMenu;