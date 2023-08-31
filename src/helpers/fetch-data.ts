export const animalsData = [
  {id: 1, name: "Cat 🐈"},
  {id: 2, name: "Dog 🦮"},
  {id: 3, name: "Mouse 🐁"},
  {id: 4, name: "Chicken 🐓 "},
  {id: 5, name: "Raccoon 🦝"},
]

export const fetchData = (query: string): Promise<Record<string, string>[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(animalsData.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) as any);
    }, 1000); 
  });
};