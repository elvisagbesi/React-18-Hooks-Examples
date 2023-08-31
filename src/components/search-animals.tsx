import { animalsData } from "../helpers/fetch-data";

type AnimalsType = typeof animalsData[0]

interface SearchAnimalsProps {
  animals: AnimalsType[]
}

export default function SearchAnimals({ animals }: SearchAnimalsProps) {
  return (
    <ul>
      {animals.map((animal, index: any) => (
        <li key={index}>{animal?.name}</li>
      ))}
    </ul>
  );
}
