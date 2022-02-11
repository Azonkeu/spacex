import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="block-prof">
      <div className="rock-table margin">
        <h2>My Missions</h2>
        <table className="tablex table-box tbody">
          <tbody>
            {missions
              .filter((mission) => mission.reserved)
              .map((mission) => (
                <tr key={mission.mission_id}>
                  <td className="roc-mis">{mission.mission_name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
