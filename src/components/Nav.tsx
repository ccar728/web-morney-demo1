import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('../icons/money.svg');
require('../icons/tags.svg');
require('../icons/statistics.svg')


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      width: 33.3%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg className='icon'>
            <use xlinkHref="#tags"/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref="#money" />
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className='icon'>
            <use xlinkHref="#statistics" />
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;