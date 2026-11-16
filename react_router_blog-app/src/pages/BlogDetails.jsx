import React from 'react';
import { useParams } from 'react-router';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <article>
      <h2>Blog Details Page</h2>
      <p>Blog {id}</p>
    </article>
  );
};

export default BlogDetails;