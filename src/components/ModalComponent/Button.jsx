import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
  if (props.href) {
    return (
      <Link
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'} ${props.mono && 'button--mono'} ${
          props.post && 'button--post'
        } ${props.face && 'button--face'}  ${props.mon && 'button--mon'}`}
        href={props.href}
      >
        {props.children}
      </Link>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'} ${
          props.mono && 'button--mono'
        }  ${props.face && 'button--face'} ${props.post && 'button--post'}  ${
          props.mon && 'button--mon'
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || 'default'} ${
        props.inverse && 'button--inverse'
      } ${props.danger && 'button--danger'}  ${props.face && 'button--face'} ${
        props.mono && 'button--mono'
      }  ${props.mon && 'button--mon'} ${props.post && 'button--post'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
