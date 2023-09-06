import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import UseStateComponent from './cards/use-state-card'
import UseDeferredValueComponent from './cards/use-deferred-value-card'
import UseSyncExternalStoreComponent from './cards/use-sync-external-store-card'
import { replaceUnderscoresWithSpaces } from './helpers/utils'
import UseIdComponent from './cards/use-id-card'

type PageOptions = "USE_STATE" | "USE_DEFERRED_VALUE" | "USE_TRANSITION" | "USE_SYNC_EXTERNAL_STORE" | "USE_ID"

function App() {

  const [page, setPage] = useState<PageOptions>("USE_STATE");
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (page: string) => {
    startTransition(() => {
      setPage(page as any)
    })
  }

  return (
    <>
      <h1>Learning the new react hooks</h1>
      <div className='flex flex-row justify-center logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>{replaceUnderscoresWithSpaces(page)}</h2>

      <div className="flex flex-row space-x-3 justify-center mt-10">
        <Button label='useState' onClick={() => handleTabChange("USE_STATE")} />
        <Button label='useDeferredValue' onClick={() => handleTabChange("USE_DEFERRED_VALUE")} />
        <Button label='useSyncExternalStore' onClick={() => handleTabChange("USE_SYNC_EXTERNAL_STORE")} />
        <Button label='useId' onClick={() => handleTabChange("USE_ID")} />
      </div>

      {
        isPending ? <h1>Transitioning....</h1> :
          <>
            {page === "USE_STATE" && <UseStateComponent />}
            {page === "USE_DEFERRED_VALUE" && <UseDeferredValueComponent />}
            {page === "USE_SYNC_EXTERNAL_STORE" && <UseSyncExternalStoreComponent />}
            {page === "USE_ID" && <UseIdComponent />}
          </>
      }
    </>
  )
}

export default App
