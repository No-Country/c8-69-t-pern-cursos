import React from 'react';

const Header = () => {
  return (
    <div>
      <div style={{ background: 'url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)' }} className="jumbotron bg-cover text-white">
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold">Tech Courses</h1>
          <p className="font-italic mb-0">Aprende cuando quieras y donde quieras.</p>
          <br />
          <a href="#" role="button" className="btn btn-primary px-5">See All Courses</a>
        </div>
      </div>
    </div>
  )
}

export default Header