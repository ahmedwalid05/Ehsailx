import React, { useState } from 'react';

import DateSelector from '../../components/DateSelector/DateSelector';
import Pictures from '../../components/Pictures';
import LoadingSpinner from '../../components/LoadingSpinner';

import useNasaPictures, {
  STATUSES,
} from '../../hooks/useNasaPictures/useNasaPictures';
import { getDaysAgo } from '../../utils';

const styles = {
  container: {
    paddingTop: '20px',
  },
};

const AVAILABLE_DATE_OPTIONS = {
  'Last Week': getDaysAgo(7),
  'Last Two Weeks': getDaysAgo(14),
  'Last Month': getDaysAgo(30),
};

const HomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    Object.keys(AVAILABLE_DATE_OPTIONS)[0]
  );

  const { error, status, pictures } = useNasaPictures(
    AVAILABLE_DATE_OPTIONS[selectedDate]
  );

  const renderPictures = () => {
    if (status === STATUSES.PENDING) return <LoadingSpinner />;
    if (status === STATUSES.ERROR) return <h1>{error}</h1>;
    return <Pictures pictures={pictures} />;
  };

  return (
    <div style={styles.container}>
      <DateSelector
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        dateOptions={AVAILABLE_DATE_OPTIONS}
      />
      {renderPictures()}
    </div>
  );
};

export default HomeScreen;
