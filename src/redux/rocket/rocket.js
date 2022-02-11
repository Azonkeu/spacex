import axios from 'axios';

const initialState = [];

export const fetchRockets = (payload) => ({
  type: 'FETCH_ROCKETS',
  payload,
});

export const fetchRocketsApi = () => async (dispatch) => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const mapRockets = Object.entries(rockets.data).map(([id, rocket]) => {
    const { rocket_name, description, flickr_images } = rocket;
    return {
      id,
      rocket_name,
      description,
      flickr_images,
    };
  });
  dispatch(fetchRockets(mapRockets));
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROCKETS':
      return action.payload;
      /* eslint-disable no-labels, no-unreachable */
    default:
      return state;
  }
};

export default rocketReducer;
