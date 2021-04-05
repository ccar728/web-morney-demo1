import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import NotesSection from './Money/NotesSection';
import TagsSection from './Money/TagsSection';
import NumPadSection from './Money/NumPadSection';
import CategorySection from './Money/CategorySection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection />
      <NotesSection />
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumPadSection>
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumPadSection>
    </MyLayout>
  )
}

export default Money;