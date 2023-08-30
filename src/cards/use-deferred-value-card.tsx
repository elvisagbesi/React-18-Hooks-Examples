import { useDeferredValue, useState, Suspense, useEffect } from "react"
import { fetchData } from "../helpers/fetch-data"

export default function UseDeferredValueComponent() {

  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)

  const [items, setItems] = useState<any[]>([]);
  const [itemsAlt, setItemsAlt] = useState<any[]>([]);

  const getData = async () => {
    const results = await fetchData(deferredQuery)
    setItems(results)
  }

  const getDataAlt = async () => {
    const results = await fetchData(query)
    setItemsAlt(results)
  }

  useEffect(() => {
    getData()
  }, [deferredQuery]);

  useEffect(() => {
    setItemsAlt([])
    getDataAlt()
  }, [query]);




  return (
    <>
      <div className="card flex flex-col space-y-20">


        <div className="flex flex-row justify-center">
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className="flex flex-row space-x-5 justify-center">

          <div>
            <h3 className="underline">With Deferred</h3>
            <Suspense fallback={<div>Loading ....</div>}>
              <ol>
                {
                  items?.map((item) => <li>{item?.name}</li>)
                }
              </ol>
            </Suspense>

          </div>

          <div>
            <h3 className="underline">Without Deferred</h3>
            <Suspense fallback={<div>Loading ....</div>}>
              <ol>
                {
                  itemsAlt?.map((item) => <li>{item?.name}</li>)
                }
              </ol>
            </Suspense>

          </div>

        </div>

      </div>
    </>

  )
}