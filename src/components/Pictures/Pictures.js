import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const styles = {
  cardsContainer: {
    padding: '1rem',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '50px',
  },
};

const Pictures = ({ pictures }) => {
  if (!pictures || pictures.length === 0) return null;
  return (
    <div style={styles.cardsContainer}>
      {pictures.map((picture) => (
        <Card key={picture.date} picture={picture} />
      ))}
    </div>
  );
};

Pictures.propTypes = {
  pictures: PropTypes.array,
};

export default Pictures;
