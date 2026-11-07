import React from 'react';

// const getposts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json()
// }
const getpost2 = async ()=> {

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return res.json();
    
}
  catch (error) {
     console.error("ACTUAL ERROR:", error);
throw new Error ("Faield to  fetch posts")
}

}


const Postpage = async() => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const post =await res.json();
  const receivedPromise = await getpost2()
  // console.log(receivedPromise )

  return (
    <div>
  
      {/* <h2>Hello Post:{post.length} </h2> */}
      <h2>Hello Post:{receivedPromise.length} </h2>


    </div>
  );
};

export default Postpage;