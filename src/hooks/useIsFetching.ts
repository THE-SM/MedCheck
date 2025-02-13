import { useState, useEffect } from 'react';

const useIsFetching = () => {
  const [isFetching, setIsFetching] = useState(false);

  const startFetching = () => setIsFetching(true);
  const stopFetching = () => setIsFetching(false);

  return { isFetching, startFetching, stopFetching };
};

export default useIsFetching;
