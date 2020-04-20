
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import WaveBorder from '../material-ui/wave.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  waveBorder: {
    paddingTop: theme.spacing(4)
  }
}));


const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">FishBits</a>    
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/create" className="nav-link">New Event</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Log Out</a>
            </li>
          </ul>
        </div>
      
      </nav>
      <WaveBorder
        upperColor="#333a3f"
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={3}
      />
    </div>
  );
}
export default Header;