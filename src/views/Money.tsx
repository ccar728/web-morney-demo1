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
      <CategorySection />
      <NumPadSection />
    </MyLayout>
  )
}

export default Money;