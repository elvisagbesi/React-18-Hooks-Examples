import Checkbox from "../components/checkbox";
import UserForm from "../components/user-form";

const fruitJuices = [
  { key: "1", value: "Apple 🍎", },
  { key: "2", value: "Banana 🍌", },
  { key: "3", value: "Pineapple 🍍", },
  { key: "4", value: "Watermelon 🍉", },
]

export default function UseIdComponent() {
  return (
    <>
      <div className="card flex flex-col space-y-10">
        <section>
          <h2>Fruit Juices</h2>
          <div className="flex flex-row space-x-5  justify-center ">
            <div className="space-y-6">
              {
                fruitJuices?.map((item) => <Checkbox key={item.key} label={item.value} name={item?.key} />)
              }
            </div>
          </div>
        </section>
        
        <section>
          <h2>User Form</h2>
          <UserForm />
        </section>
      </div>
    </>

  )
}