interface bookprops{
  name: string,
  author:string
}

export default function Books({ name }: bookprops) {
  return <li>Book name: {name}</li>
}
