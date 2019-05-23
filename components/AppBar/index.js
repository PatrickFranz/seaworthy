
const AppBar = (props) => (
  <nav className="blue">
  <div className="nav-wrapper">
      <a href="#!" className="left brand-logo">
        <img src="/static/img/logo.png" alt="Seaworthy Logo" />
        <span className="grey-text text-darken-4">Seaworthy</span>
      </a>
  
    <ul className="right">
      <li>
        <a onClick={props.handleLogin}>
          <i className="material-icons">account_circle</i>
        </a>
      </li>
      <li>
        <a>
          <i className="material-icons">more_vert</i>
        </a>
      </li>
    </ul>
  </div>
  <style jsx>{`
    
    .brand-logo{
      height: 100%;
    }
    .brand-logo img{
      max-height: 100%;
      padding: 2px 10px 2px 2px;

    }

  `}</style>
</nav>
);



export default AppBar;