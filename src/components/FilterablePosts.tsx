import { getAllPosts } from '@/service/posts';

export default async function FilterablePosts() {
  const posts = await getAllPosts();

  const categories = [...new Set(posts.map(post => post.category))];
  return (
    <section>
      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ul>
      <ul>
        {posts.map(post => {
          return <li key={post.path}>{post.title}</li>;
        })}
      </ul>
    </section>
  );
}
