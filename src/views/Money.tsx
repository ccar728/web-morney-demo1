import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import NotesSection from './Money/NotesSection';
import TagsSection from './Money/TagsSection';
import NumPadSection from './Money/NumPadSection';
import CategorySection from './Money/CategorySection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-'as Category,
    amount: 0
  })
  return (
    <MyLayout>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <TagsSection value={selected.tags}
                   onChange={(tags)=>setSelected({
                     ...selected,
                     tags:tags
                   })}/>
      <NotesSection value={selected.note}
                    onChange={(note)=>{
                      setSelected({
                        ...selected,
                        note: note
                      })
                    }}
      />
      <CategorySection />
      <NumPadSection />
    </MyLayout>
  )
}

export default Money;