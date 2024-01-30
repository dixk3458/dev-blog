import FilterablePosts from '@/components/FilterablePosts';
import UserCard from '@/components/UserCard';
import { getAllPosts } from '@/service/posts';

export default async function HomePage() {
  const posts = await getAllPosts();

  const categories = [...new Set(posts.map(post => post.category))];
  return (
    <section className="flex flex-col w-full max-w-screen-md mx-auto p-4">
      <UserCard />
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
