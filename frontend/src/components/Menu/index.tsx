import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/menu';
import logo from '../../assets/iso-logo.png';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { VscGroupByRefType } from 'react-icons/vsc';
import { FaPowerOff } from 'react-icons/fa';
const Menu: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} />
      </Link>
      <ul>
        <li>
          <Link to="/professional">
            <BsFillPersonLinesFill size={30} color="#fff" />
          </Link>
        </li>
        <li>
          <Link to="/professional-type">
            <VscGroupByRefType size={30} color="#fff" />
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => localStorage.clear()}>
            <FaPowerOff size={20} color="#fff" />
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
