import FilterablePosts from '@/components/FilterablePosts';
import UserCard from '@/components/UserCard';

export default function HomePage() {
  return (
    <section className="flex flex-col w-full max-w-screen-md mx-auto p-4">
      <UserCard />
      <FilterablePosts />
    </section>
  );
}
