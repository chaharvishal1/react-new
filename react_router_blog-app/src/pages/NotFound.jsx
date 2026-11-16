import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <section>
    <h2>Page not found</h2>
    <Link to="/">Go home</Link>
  </section>
);

export default NotFound;