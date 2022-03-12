import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';

const CARD_SIZE = 450;

const styles = {
  cardContainer: {
    width: `${CARD_SIZE}px`,
    height: `${CARD_SIZE}px`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: 'black',
    overflow: 'hidden',
    boxShadow: '0px 2px 8px 4px rgba(0,0,0,0.2)',
    borderRadius: 5,
  },
  imageContainer: {
    maxHeight: '80%',
    minHeight: '80%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  image: {
    minHeight: '90%',
    width: '100%',
    objectFit: 'cover',
  },
  metaContainer: {
    zIndex: 1,
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    background: 'white',
    padding: '20px',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: '50%',
    margin: 0,
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '18px',
  },
  copyright: {
    minWidth: '50%',
    textAlign: 'right',
    margin: 0,
    fontSize: '14px',
  },
  date: {
    zIndex: 1,
    background: '#735dd0',
    color: 'white',
    position: 'absolute',
    top: '20px',
    left: '10px',
    padding: '0.25rem 0.5rem',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 500,
  },
};

const Card = ({ picture }) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={styles.cardContainer}>
      <div style={styles.date}>{picture.date}</div>
      <div style={styles.imageContainer}>
        <img style={styles.image} alt={picture.explanation} src={picture.url} />
      </div>
      <div style={styles.metaContainer}>
        <h4 style={{ ...styles.title, color: theme.colors.text.primary }}>
          {picture.title}
        </h4>
        {picture.copyright && (
          <p
            style={{ ...styles.copyright, color: theme.colors.text.secondary }}
          >
            {picture.copyright}
          </p>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  picture: PropTypes.shape({
    hdurl: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    copyright: PropTypes.string,
    explanation: PropTypes.string,
  }),
};

export default Card;
