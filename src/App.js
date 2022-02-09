import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import planet from './images/planet.png';
import './App.css';

const App = () => (
  <Router>
    <div style={{ maxWidth: '100%' }}>
      <nav style={{
        maxWidth: '100%',
        height: '3rem',
        backgroundColor: 'white',
      }}
      >
        <ul style={{
          display: 'flex',
          height: '3rem',
          width: '100%',
          alignItems: 'center',
          paddingLeft: '4%',
          backgroundColor: 'white',
        }}
        >
          <li style={{
            fontWeight: 'bold',
            fontSize: '2em',
          }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                color: '#313538',
                textDecoration: 'none',
                alignItems: 'center',
              }}
            >
              <img
                alt="planet"
                src={planet}
                style={{
                  maxWidth: '10%',
                  maxHeight: '5rem',
                  marginRight: '3%',
                }}
              />
              Space Travelers&apos; Hub
            </Link>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            marginLeft: '12%',
          }}
          >
            <NavLink activeclassname="active" to="/Rockets" style={{ color: '#95c6ff' }}>
              Rockets
            </NavLink>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            marginLeft: '6%',
          }}
          >
            <NavLink activeclassname="active" to="/Missions" style={{ color: '#95c6ff' }}>
              Missions
            </NavLink>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            marginLeft: '6%',
          }}
          >
            <NavLink activeclassname="active" to="/My profile" style={{ color: '#95c6ff' }}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<Profile />} />
      </Routes>
    </div>
  </Router>
);

export default App;
