import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Rockets = (props) => {
  const { rockets } = props;
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        margin: '2% 0 0 0',
        padding: '1% 3% 0 3%',
      }}
    >
      {rockets.map((rocket) => (
        <Item rocket={rocket} key={rocket.id} />
      ))}
    </main>
  );
};

Rockets.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rockets: PropTypes.array.isRequired,
};

export default Rockets;
