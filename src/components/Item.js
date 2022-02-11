import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { confirmReservation, confirmCancelReservation } from '../redux/rocket/rocket';

const Item = (props) => {
  const {
    rocket: {
      id,
      rocket_name,
      description,
      flickr_images,
      reserved,
    },
  } = props;

  const dispatch = useDispatch();
  const reserveRocketFromStore = () => {
    if (reserved === true) {
      dispatch(confirmCancelReservation({ id }));
    } else {
      dispatch(confirmReservation({ id }));
    }
  };

  return (
    <div className="block-rocket">
      <div className="img-rocket">
        <img alt="rocket" src={flickr_images[0]} className="pic" />
      </div>
      <div className="text-rocket">
        <h2 className="title">{rocket_name}</h2>
        <div className="reserv">
          <p className="pi-text">
            {reserved === true ? (
              <button type="button" className="res" key={id}>Reserved</button>
            ) : (
              <p />
            )}
            {description}
          </p>
        </div>
        {reserved ? (
          <button type="button" className="reserve cancel" onClick={reserveRocketFromStore}>
            Cancel Reservation
          </button>
        ) : (
          <button type="button" className="reserve" onClick={reserveRocketFromStore}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Item.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default Item;
