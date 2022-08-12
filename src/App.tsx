import { useState } from 'react'
import { AppContainer } from "./styles"
import './App.css'
import Column from "./Column";
import Card from "./Card";
import AddNewItem from "./AddNewItem";
import { useAppState } from "./AppStateContext"

function App() {
    const {state} = useAppState()
  // @ts-ignore
    // @ts-ignore
    return (
          <AppContainer>
              {state.lists.map((list, i) => (
                  <Column text={list.text} key={list.id} index={i}/>
              ))}
              <AddNewItem
                  toggleButtonText="+ Add another list"
                  onAdd={console.log}
              />
          </AppContainer>
  )
}

export default App
