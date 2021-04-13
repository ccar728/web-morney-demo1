import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import NotesSection from './Money/NotesSection';
import TagsSection from './Money/TagsSection';
import NumPadSection from './Money/NumPadSection';
import CategorySection from './Money/CategorySection';
import useRecords from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-'as Category,
  amount: 0
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData)

  type Selected = typeof selected
  const onChange = (obj:Partial<Selected>) =>{
    setSelected({
      ...selected,
      ...obj,
    })
  }

  const {addRecord} = useRecords()
  const submit = ()=>{
    addRecord(selected)
    alert('保存成功！')
    setSelected(defaultFormData)
  }

  return (
    <MyLayout>
      {selected.tagIds.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <hr/>
      {JSON.stringify(selected)}
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
                     onOk={submit}
      />
    </MyLayout>
  )
}

export default Money;