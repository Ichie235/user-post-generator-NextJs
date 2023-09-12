// next.Js already caches data by default and it is shown using {cache:force-cache}
// export default async function getUserPosts(userId: string) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{cache:'force-cache'}
//   );
//   if (!res.ok) throw new Error("failed to fetch user!!");
//   return res.json();
// }

// the code below makes the data dynamic by always allowing rerendering of data

// export default async function getUserPosts(userId: string) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{cache:'no-store'}
//   );
//   if (!res.ok) throw new Error("failed to fetch user!!");
//   return res.json();
// }

// Incremental static regeneration is the best of both worlds and checks from time to time if data is rerender and dynamically rerenders the changed data
// This can be apllied to SSG and server side rendering
// what the code below is saying is show the data and reevaluate for new data after 60sec

export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return undefined;
  return res.json();
}
