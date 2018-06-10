import React from 'react';

import bn from 'utils/bemnames';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink as BSNavLink,
  // UncontrolledTooltip,
  Collapse,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import {
  MdDashboard,
  MdWidgets,
  MdTextFields,
  MdNotificationsActive,
  MdBorderAll,
  MdRadioButtonChecked,
  MdWeb,
  MdStar,
  MdGroupWork,
  MdArrowDropDownCircle,
  MdBrush,
  MdViewDay,
  MdChromeReaderMode,
  MdViewList,
  MdInsertChart,
  MdExtension,
  MdSend,
  MdKeyboardArrowDown,
} from 'react-icons/lib/md';
import FaGithub from 'react-icons/lib/fa/github';

import SourceLink from 'components/SourceLink';

import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import logo200Image from 'assets/img/logo/logo_200.png';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};



const navItems = [
  { to: '/', name: 'home', exact: true, Icon: MdDashboard },
  { to: '/3p', name: '3P 전략', exact: false, Icon: MdWeb },
  { to: '/market', name: '시장 세분화', exact: false, Icon: MdInsertChart },
  { to: '/map', name: '포지셔닝 맵', exact: false, Icon: MdViewDay },
  { to: '/opinion', name: '소비자 오피니언 분석', exact: false, Icon: MdStar },
  { to: '/question', name: '소비자에게 물어 BO:M', exact: false, Icon: MdSend },

];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                BO:M
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}>
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}



          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
