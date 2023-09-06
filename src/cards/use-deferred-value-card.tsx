import { useDeferredValue, useState, Suspense, useEffect } from "react"
import { fetchData } from "../helpers/fetch-data"

export default function UseDeferredValueComponent() {

  const [items, setItems] = useState<any[]>([]);
  const [itemsDeferred, setItemsDeferred] = useState<any[]>([]);

  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)

  const isStale = query !== deferredQuery

  useEffect(() => {
    fetchData(deferredQuery).then((results) => {
      setItemsDeferred(results)
    })
  }, [deferredQuery]);

  useEffect(() => {
    fetchData(query).then((results) => {
      setItems(results)
    })
  }, [query]);

  return (
    <>
      <div className="card flex flex-col space-y-20">
        <div className="flex flex-row justify-center">
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className="flex flex-row space-x-5 justify-center">

          <div>
            <h2 className="underline">With Deferred ✅</h2>
            <Suspense fallback={<div>Loading ....</div>}>
              {
                items?.length ? <ol>
                  {
                    items?.map((item) => <li style={{opacity: isStale ? 0.3 : 1}} className={`${isStale && "text-gray-700"}`} key={item?.key}>{item?.name}</li>)
                  }
                </ol>
                  :
                  <div>No Items to display</div>
              }
            </Suspense>
          </div>

          <div>
            <h2 className="underline">Without Deferred ❌</h2>
            <Suspense fallback={<div>Loading ....</div>}>
              {
                itemsDeferred?.length ? <ol>
                  {
                    itemsDeferred?.map((item) => <li key={item?.key}>{item?.name}</li>)
                  }
                </ol>
                  :
                  <div>No Items to display</div>
              }
            </Suspense>
          </div>

        </div>

      </div>
    </>

  )
}