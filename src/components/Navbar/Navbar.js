import React, { useRef, useState, useCallback } from 'react';
import { useOnClickOutside } from '../../hooks';
import Menu from './Menu';
import Burger from './Burger';
import CornerLink from './CornerLink';
import { ThemeProvider }from 'styled-components';
import { theme } from '../../theme';

function NavBar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const toggleOpen = useCallback(() => {
    setOpen(currentOpen => {
      return !currentOpen
    })
  }, [])

  return (
    <ThemeProvider theme={theme} >
      <header ref={node}>
        <Menu open={open} toggleOpen={toggleOpen} />
        <Burger open={open} toggleOpen={toggleOpen} />
        <CornerLink />
      </header>
    </ThemeProvider>
  );
}

export default NavBar;