import {useEffect, useState} from 'react';
import createId from './lib/createId';

const defaultTags = [
  {id:createId(), name:'衣'},
  {id:createId(), name:'食'},
  {id:createId(), name:'住'},
  {id:createId(), name:'行'},
]

const useTags =()=>{
  const [tags, setTags] = useState<{id:number; name:string}[]>([])
  useEffect(()=>{
    setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
  }, [])
  useEffect(()=>{
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id:number)=>{
    let result = -1
    for(let i = 0; i<tags.length; i++){
      if(tags[i].id===id){
        result = i
        break
      }
    }
    return result
  }
  const updateTag = (id:number, obj:{name:string}) => {
    setTags(tags.map(tags => tags.id === id? {id, name:obj.name} : tags))
  }
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tags => tags.id !== id))
  }
  const addTag = ()=>{
    const tagName = window.prompt('新标签的名称为：')
    if(tagName !== null){
      setTags([...tags,{id:createId(), name:tagName}])
    }
  }

  return{
    tags,
    setTags,
    addTag,
    findTag,
    updateTag,
    findTagIndex,
    deleteTag
  }
}

export default  useTags