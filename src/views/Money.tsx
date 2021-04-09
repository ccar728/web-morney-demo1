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
    tagIds: [] as number[],
    note: '',
    category: '-'as Category,
    amount: 0
  })

  type Selected = typeof selected
  const onChange = (obj:Partial<Selected>) =>{
    setSelected({
      ...selected,
      ...obj,
    })
  }

  return (
    <MyLayout>
      {selected.tagIds.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds)=>onChange({tagIds})}
      />
      <NotesSection value={selected.note}
                    onChange={(note)=>onChange({note})}
      />
      <CategorySection value={selected.category}
                       onChange={(category)=>onChange({category})}
      />
      <NumPadSection value={selected.amount}
                     onChange={(amount)=>onChange({amount})}
                     onOk={()=>{}}
      />
    </MyLayout>
  )
}

export default Money;