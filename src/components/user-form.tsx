import { useId } from "react";

export default function UserForm() {
  const id = useId();
  return (
    <form>
      <div>
        <label htmlFor={id + '-firstName'}>First Name:</label>
        <input id={id + '-firstName'} type="text" />
      </div>
      <div>
        <label htmlFor={id + '-lastName'}>Last Name:</label>
        <input id={id + '-lastName'} type="text" />
      </div>
      <div>
        <label htmlFor={id + '-dob'}>Date of Birth:</label>
        <input id={id + '-dob'} type="date" />
      </div>
    </form>
  );
}