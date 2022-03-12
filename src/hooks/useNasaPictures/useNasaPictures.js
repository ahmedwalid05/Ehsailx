import { useEffect, useMemo, useState } from 'react';
import { getDaysAgo } from '../../utils';
import { getNasaPictures } from './NasaAPI';

export const STATUSES = {
  IDLE: 0,
  PENDING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

const useNasaPictures = (startDate) => {
  const [status, setStatus] = useState(STATUSES.IDLE);
  const [pictures, setPictures] = useState(null);
  const [error, setError] = useState(null);

  const filteredPictures = useMemo(
    () =>
      pictures?.filter((picture) => {
        const pictureDate = new Date(picture.date);
        pictureDate.setHours(0, 0, 0, 0);
        return pictureDate >= startDate;
      }),
    [pictures, startDate]
  );

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (!isMounted) return;
      setStatus(STATUSES.PENDING);
      setPictures(null);
      setError(null);
      const { pictures, error } = await getNasaPictures(getDaysAgo(30));
      if (pictures) {
        setPictures(pictures);
        setStatus(STATUSES.SUCCESS);
      } else {
        setError(error);
        setStatus(STATUSES.ERROR);
      }
    })();
    return () => (isMounted = false);
  }, []);
  return { status, pictures: filteredPictures, error };
};

export default useNasaPictures;
