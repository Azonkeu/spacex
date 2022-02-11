import axios from 'axios';

const initialState = [];

export const fetchMissions = (payload) => ({
  type: 'FETCH_MISSIONS',
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

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return action.payload;
    /* eslint-disable no-labels, no-unreachable */
    default:
      return state;
  }
};

export default missionsReducer;
