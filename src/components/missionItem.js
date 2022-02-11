import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { confirmLeaveMission, confirmMission } from '../redux/missions/missions';

const MissionItem = (props) => {
  const {
    mission: {
      id,
      mission_name,
      description,
      reserved,
    },
  } = props;

  const dispatch = useDispatch();
  const reserveMissionFromStore = () => {
    if (reserved === true) {
      dispatch(confirmLeaveMission({ id }));
    } else {
      dispatch(confirmMission({ id }));
    }
  };

  return (
    <tr className="table-box bax">
      <td className="table-box flex spectwo"><h3>{mission_name}</h3></td>
      <td className="pad table-box">{description}</td>
      <td className="table-box spec">
        {reserved === true ? (
          <button type="button" className="but-inactive but-active">Active Member</button>
        ) : (
          <button type="button" className="but-inactive">NOT A MEMBER</button>
        )}
      </td>
      <td className="table-box spec">
        {reserved === true ? (
          <button type="button" className="but-join but-leave" key={id} onClick={reserveMissionFromStore}>
            Leave Mission
          </button>
        ) : (
          <button type="button" className="but-join" key={id} onClick={reserveMissionFromStore}>
            Join Mission
          </button>
        )}
      </td>
    </tr>

  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
