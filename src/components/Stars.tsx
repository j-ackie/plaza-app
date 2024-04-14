import { FC } from 'react';
import PlazaText from './PlazaText';

type StarsProps = {
  rating: number;
};

const Stars: FC<StarsProps> = ({ rating }) => {
  const stars = Array.from({ length: rating }, () => '⭐️');

  return <PlazaText>{stars}</PlazaText>;
};

export default Stars;
