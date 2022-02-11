import axios from 'axios';

const initialState = [];

export const fetchMissions = (payload) => ({
  type: 'FETCH_MISSIONS',
  payload,
});

export const joinMission = (payload) => ({
  type: 'JOIN_MISSION',
  payload,
});

export const confirmMission = (id) => (dispatch) => {
  dispatch(joinMission(id));
};

export const leaveMission = (payload) => ({
  type: 'LEAVE_MISSION',
  payload,
});

export const fetchMissionsApi = () => async (dispatch) => {
  const missions = await axios.get('https://api.spacexdata.com/v3/missions');
  const mapMissions = Object.entries(missions.data).map(([id, mission]) => {
    const { mission_name, description } = mission;
    return {
      id,
      mission_name,
      description,
    };
  });
  dispatch(fetchMissions(mapMissions));
};

export const confirmLeaveMission = (id) => (dispatch) => {
  dispatch(leaveMission(id));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return action.payload;
    /* eslint-disable no-labels, no-unreachable */
    case 'JOIN_MISSION':
      return state.map((mission) => {
        if (mission.id !== action.payload.id) return mission;
        return { ...mission, reserved: true };
      });
      /* eslint-disable no-labels, no-unreachable */
    case 'LEAVE_MISSION':
      return state.map((mission) => {
        if (mission.id !== action.payload.id) return mission;
        return { ...mission, reserved: false };
      });
      /* eslint-disable no-labels, no-unreachable */
    default:
      return state;
  }
};

export default missionsReducer;
