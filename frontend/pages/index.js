export default function Home({posts}) {

  return (
    <div>
      {
        posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.Title}</h2>
            <div>{post.User.username}</div>
          </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch("https://halping-hand.herokuapp.com/posts");
  const posts = await res.json();

  return {
    props: {posts}
  }
}
