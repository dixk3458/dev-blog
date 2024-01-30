import { Post } from '@/service/posts';

type Props = {
  posts: Post[];
};

export default function PostLists({ posts }: Props) {
  return (
    <section>
      <ul>
        {posts.map(post => {
          return <li key={post.path}>{post.title}</li>;
        })}
      </ul>
    </section>
  );
}
