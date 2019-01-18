import React from 'react'

const Footer = (props) => {

  return(

    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand" href="#">&copy;{props.copyright}</a>
    </nav>

  )
}
export default Footer
