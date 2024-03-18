import { ApolloError } from '@apollo/client';
import { FC } from 'react';
import PlazaText from './PlazaText';

interface ErrorProps {
  error: ApolloError;
}

const Error: FC<ErrorProps> = ({ error }) => {
  console.error(error);

  return <PlazaText>Something went wrong: {error.message}</PlazaText>;
};

export default Error;
