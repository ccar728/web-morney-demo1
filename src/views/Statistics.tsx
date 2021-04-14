import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import useRecords from '../hooks/useRecords';
import newRecords from '../hooks/useRecords';
import useTags from '../hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background: white;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
  const [category, setCategory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()

  const hash:{// @ts-ignore
    [K:string]:newRecords[]} = {}
  const selectedRecord = records.filter((r: { category: string; }) => r.category === category)

  selectedRecord.map((r: { createdAt?: any; tagIds?: number[]; note?: string; category?: "+" | "-"; amount?: number; })=>{
    const key = day(r.createdAt).format('YYYY-MM-DD')
    if(!(key in hash)){
      hash[key] = []
    }
    // @ts-ignore
    hash[key].push(r as newRecords)
  })

  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0] === b[0]) return 0
    if(a[0] > b[0]) return -1
    if(a[0] < b[0]) return 1
    return 0
  })

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={(value)=>setCategory(value)}
        />
      </CategoryWrapper>

      {array.map(([date, records]) => <div>
        <Header>
          {date}
        </Header>
        <div>
          {records.map((r: { tagIds: number[]; note: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; amount: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; createdAt: day.ConfigType | undefined; })=>{
            return <Item>
              <div className="tags oneLine">
                {
                  r.tagIds.map((tagId: number)=> <span key={tagId}>{getName(tagId)}</span>)
                  .reduce((result, span, index, array) =>
                    result.concat(index<array.length-1? [span, '，']:[span]), [] as ReactNode[])
                }
              </div>
              {r.note && <div className="note">
                {r.note}
              </div>}
              <div className="amount">
                ￥{r.amount}
              </div>
            </Item>
          })}
        </div>
      </div>)}
    </Layout>
  )
}

export default Statistics