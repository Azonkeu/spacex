import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsApi } from './redux/missions/missions';
import planet from './images/planet.png';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsApi());
  }, [dispatch]);

  const missions = useSelector((state) => state.missionsReducer);
  return (
    <Router>
      <div style={{ maxWidth: '100%' }}>
        <nav style={{
          maxWidth: '100%',
          height: '3rem',
          backgroundColor: 'white',
        }}
        >
          <ul className="header-ul">
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
              marginLeft: '35%',
            }}
            >
              <NavLink activeclassname="active" to="/Rockets" style={{ color: '#69b0ff' }}>
                Rockets
              </NavLink>
            </li>
            <li style={{
              fontWeight: 'bold',
              fontSize: '1.3em',
              marginLeft: '6%',
            }}
            >
              <NavLink activeclassname="active" to="/Missions" style={{ color: '#69b0ff' }}>
                Missions
              </NavLink>
            </li>
            <li style={{
              marginLeft: '2%',
            }}
            >
              <span className="span" />
            </li>
            <li style={{
              fontWeight: 'bold',
              fontSize: '1.3em',
              marginLeft: '2%',
            }}
            >
              <NavLink activeclassname="active" to="/MyProfile" style={{ color: '#69b0ff' }}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Rockets" element={<Rockets />} />
          <Route path="/Missions" element={<Missions missions={missions} />} />
          <Route path="/MyProfile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
