import React from 'react';
import PropTypes from 'prop-types';
import MissionItem from './missionItem';

const Missions = (props) => {
  const { missions } = props;
  return (
    <table className="table table-box">
      <thead>
        <tr className="table-box white">
          <th className="table-box thwidth">Mission</th>
          <th className="table-box th-two">Description</th>
          <th className="table-box th-three">Status</th>
          <th className="table-box th-four" aria-label="Mute volume" />
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem mission={mission} key={mission.id} />
        ))}

      </tbody>
    </table>
  );
};

Missions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  missions: PropTypes.array.isRequired,
};

export default Missions;
