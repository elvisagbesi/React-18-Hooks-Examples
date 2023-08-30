import Checkbox from "../components/checkbox";

const checkItems = [
  { label: "Hello", value: "HELLO" },
  { label: "World", value: "WORLD" },
]

export default function UseIdComponent() {
  return (
    <>
      <div className="card flex flex-col space-y-20">
        <div className="flex flex-row space-x-5 justify-center">
          <div>
            {
              checkItems?.map((item) => <Checkbox id={item?.value} label={item.label} name={item?.value} />)
            }
          </div>
        </div>
      </div>
    </>

  )
}