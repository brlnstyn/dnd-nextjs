'use client';

import { createContext } from 'react'

import '../styles/App.css'
import Content from '@/components/Content'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function Home() {
  return (
    <div className='App'>
      <h1 className='big-title'>React drag and drop</h1>
      <DndProvider backend={HTML5Backend}>
        <Content/>
      </DndProvider>
    </div>
  )
}