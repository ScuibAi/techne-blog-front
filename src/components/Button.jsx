import React from 'react'
import PropTypes from "prop-types";

const Button = ({children,  }) => {
  return (
    <React.Fragment>
        <button className={`button`}>
          {children}
        </button>
    </React.Fragment>
  )
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};



export default Button