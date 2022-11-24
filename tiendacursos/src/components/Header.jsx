import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div style={{ background: 'url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)' }} className="jumbotron bg-cover text-white">
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold">Tech Courses</h1>
          <p className="font-italic mb-0">Aprende cuando quieras y donde quieras.</p>
          <br />
          <Link to='/courses' role="button" className="btn btn-primary px-5"> See All Courses</Link>
        </div>
      </div>
    </div>
  )
}

export default Header