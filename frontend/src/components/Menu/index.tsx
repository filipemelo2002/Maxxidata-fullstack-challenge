import React from 'react';

import { Container } from '../../styles/menu';
import logo from '../../assets/iso-logo.png';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { VscGroupByRefType } from 'react-icons/vsc';
import { FaPowerOff } from 'react-icons/fa';
const Menu: React.FC = () => {
  return (
    <Container>
      <img src={logo} />
      <ul>
        <li>
          <BsFillPersonLinesFill size={30} color="#fff" />
        </li>
        <li>
          <VscGroupByRefType size={30} color="#fff" />
        </li>
        <li>
          <FaPowerOff size={20} color="#fff" />
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
