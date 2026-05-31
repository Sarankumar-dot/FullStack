import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <p>404 not found enter correct url</p>
      <a className='btn btn-outline-secondary' href="/">home</a>
        {/* here 'a' tag refreshes the entire screen while going to another page
        but link component does not reload and go to another page  */}
      <Link className='btn btn-outline-success' to={'/'}> home </Link>
    </>
  );
}

export default Error