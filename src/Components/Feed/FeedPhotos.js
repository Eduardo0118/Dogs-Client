import React from 'react';
import styles from './FeedPhotos.module.css';

import useFetch from 'Hooks/useFetch';
import { PHOTO_GET } from 'Services/Api';

import FeedPhotosItem from './FeedPhotosItem';
import Error from 'Components/Helper/Error';
import Loading from 'Components/Helper/Loading';

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);

      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data &&
        data.map((photo) => <FeedPhotosItem key={photo.id} photo={photo} />)}
    </ul>
  );
};

export default FeedPhotos;
