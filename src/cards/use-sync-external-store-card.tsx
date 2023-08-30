import { useState, useEffect, useTransition, useSyncExternalStore } from "react"
import { fetchData } from "../helpers/fetch-data"
import Button from "../components/button";
import { todosStore } from "../helpers/todo-store";

export default function UseSyncExternalStoreComponent() {

  function getOnlineSnapshot() {
    return navigator.onLine
  }

  function subscribeOnlineState(callback: any){
    console.log({callback})
    window.addEventListener('online',callback)
    window.addEventListener('online',callback)
    return () => {
      window.removeEventListener('online',callback)
      window.removeEventListener('online',callback)
    }
  }


  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

  const networkStatus = useSyncExternalStore(subscribeOnlineState, getOnlineSnapshot);


  return (
    <>
      <div className="card flex flex-col space-y-20">
        <div className="border border-gray-600/50 p-5">

          <h4>{networkStatus ? "ONLINE" : "OFFLINE"}</h4>
          
        </div>
        <div className="border border-gray-600/50 p-5">
          <div>
            <Button label='Add Todo' onClick={() => todosStore.addTodo()} />
          </div>

          <ol className=" space-x-5 justify-center">
            {
              todos?.map(todo => <li>{todo.id}: {todo.text}</li>)
            }
          </ol>
        </div>
      </div>
    </>
  )
}