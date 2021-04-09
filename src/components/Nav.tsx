import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      color: #bbb;
      width: 33.3%;
      text-align: center;
      > a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
        .icon{
          fill:#bbb;
          width: 24px;
          height: 24px;
        }
        &.selected{
          color:black;
          .icon{
            fill:black;
          }
        }
      }
    }
  }
`

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;