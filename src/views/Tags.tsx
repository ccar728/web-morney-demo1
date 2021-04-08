import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    margin-right: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #777777;
  border-radius: 4px;
  color: whitesmoke;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Space = styled.div`
  height: 16px;
`

function Tags() {
  const {tags,setTags} = useTags()
  return (
    <Layout>
      <TagList>
        {
          tags.map(tags=>
          <li key={tags}>
            <Link to={'/tags/'+tags}>
              <span className="oneLine">{tags}</span>
              <Icon name="right"/>
            </Link>

          </li>
          )
        }
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}

export default Tags