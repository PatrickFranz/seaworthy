import { List, ListItem, Link} from '@material-ui/core';

const menuItems = [
  {"name": "Vessel Specs", "url": "vessel_specs", "material_icon":"directions_boat"},
  {"name": "Maintenance", "url": "maintenance", "material_icon":"build"},
  {"name": "Checklists", "url": "checklists", "material_icon":"check"}
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
          <i className="material-icons">{item.material_icon}</i>
          <span className="menuItem">{item.name}</span>
        </ListItem>
      ))}
    </List>
    <style jsx>{`
      i{
        padding: 10px;
      }

      .menuItem{
        font-size: 1.2rem;
      }
    `}</style>
  </div>
)

function handleMenuClick(e){
  console.log("Clicked: ", e.target.id, e.target.href);
}

export default sideMenu;