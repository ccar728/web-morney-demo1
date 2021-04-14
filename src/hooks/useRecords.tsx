import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';

export type newRecords = {
  tagIds: number[]
  note:string
  category:'+'|'-'
  amount:number
}

type Records = newRecords & {
  createdAt:string
}

const useRecords = ()=>{
  const [records, setRecords] = useState<Records[]>([])

  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])

  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecord = (newRecord:newRecords)=>{
    const record = {...newRecord, createdAt:(new Date()).toISOString()}
    setRecords([...records, record])
  }

  return {records, addRecord}
}

export default useRecords