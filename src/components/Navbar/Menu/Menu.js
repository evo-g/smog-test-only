import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, toggleOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to='/' onClick={toggleOpen}>Home</Link>

      <Link to='/locations' onClick={toggleOpen}>Locations</Link>

      <Link to='/tips'onClick={toggleOpen}>Tips</Link>

      <Link to='/coupon' onClick={toggleOpen}>Coupon</Link>

      <Link to='/contact' onClick={toggleOpen}>Contact</Link>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
  toggleOpen: func.isRequired
};

export default Menu;
