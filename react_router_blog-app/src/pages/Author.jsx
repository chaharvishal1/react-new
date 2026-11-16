import React from 'react';
import { Link, useParams } from 'react-router';

const Author = () => {
  const { id } = useParams();

  return (
    <section>
      <h2>Author Page</h2>
      <p>Author {id}</p>
    </section>
  );
};

export default Author;