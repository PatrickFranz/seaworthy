import '../scss/styles.scss';
import { Button, Grid, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar } from '@material-ui/core'
import AppBar from '../components/appBar'
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import fetch from 'isomorphic-unfetch';

const appName = 'Next JS Starter'
const currentTech = [
  {"name": "Next.JS", "url": "https://nextjs.org/"},
  {"name": "Material UI", "url": "https://material-ui.com"},
  {"name": "next-sass", "url": "https://github.com/zeit/next-plugins/tree/master/packages/next-sass"}
];
let imageUrl = null;

const Home = (props) => {

    return(
      <div>
      <AppBar title={appName} />
      <div className="title">
        <Typography variant="h2" align='center' gutterBottom>
          A NextJS Starter Repo
        </Typography>
      </div>
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <Paper>
            <div className="paper">
              <Typography variant="headline" gutterBottom>
                Purpose
              </Typography>
              <Typography variant="body1" gutterBottom>
                I'm creating this starter repo as a quick launch point for creating apps using NextJS, SASS, and Materialize. I may add other frameworks as needs arise or change.
              </Typography>
              <Typography variant="body1">
                This page, all components, and contents of the <code>/scss</code> directory are only included to serve as examples. Feel free to remove and/or modify as needed. The <code>_app.js</code> and <code>_document.js</code> files in the <code>pages</code> directory (may) contain elements that make the technology work. Edit at your own discretion.
              </Typography>
            </div>
          </Paper>
            <Paper>
              <div className="paper">
                <Typography variant="headline" gutterBottom>
                  Currently the included techologies include:
                </Typography>
                  <List>
                    {currentTech.map(tech => (
                    <Link href={tech.url}
                          key={tech.name}
                          variant="button" 
                          rel="noopener" 
                          target="_blank" 
                          color="inherit">
                      <ListItem button>
                        <ListItemIcon>
                          <LinkIcon/>
                        </ListItemIcon>  
                          <ListItemText primary={tech.name} />
                      </ListItem>
                        </Link>
                    )) }
                  </List>
              </div>
          </Paper>
          <Paper>
            <div className="paper">
              <Typography variant="headline" gutterBottom>
                Usage
              </Typography>
              <Typography variant="body1">
                  Feel free to fork and use this repo if you find it helpful. <br/><br/>
              </Typography>
              <Typography variant='subheading'>Install</Typography>
              <List>
                <ListItem>
                  1. Create a directory
                </ListItem>
                <ListItem>
                  2. Open that directory in your terminal
                </ListItem>
                <ListItem>
                  3. Clone the Repo using the instructions below</ListItem>
                <ListItem>
                  <Typography variant='body1'>
                    <code>> git clone git@github.com:PatrickFranz/NextJS-Starter.git</code> <br/>
                  </Typography>
                </ListItem>
                <ListItem>
                  4. Run the project
                </ListItem>
                <ListItem>
                  <code>> npm run dev</code>
                </ListItem>
              </List>
            </div>
          </Paper>
          <Paper>
            <div className="paper">
              <Typography variant="headline" gutterBottom>
                Fork It
              </Typography>
              <Typography variant="body1">
                  Grab it from my Github page. <br/><br/>
              </Typography> 
              <Link href="https://github.com/PatrickFranz/NextJS-Starter"
                      variant="body1"
                      rel="noopener" 
                      target="_blank"  
                      color='inherit'
                      align="center"
                      justify='center'>
                <Grid container
                      direction="row"
                      alignItems="center">
                  <Grid item>
                    <Avatar alt="Patrick Franz" 
                            src={props.data.avatar_url} 
                            className="bio_avatar"/>
                  </Grid>
                  <Grid item>
                      NextJS Starter @ Github
                  </Grid>
                </Grid>
            </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
  }

Home.getInitialProps = async function(){
  const result = await fetch("https://api.github.com/users/patrickfranz"  );
  const data = await result.json();

  return {
    data
  }
}

export default Home;