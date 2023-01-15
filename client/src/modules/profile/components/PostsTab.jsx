import { useEffect } from 'react';
import { useUserPostsStore } from '@/shared/store';
import { Ping } from '@uiball/loaders';

export default function PostsTab () {
  const {posts, getPosts, loading: isLoadingPosts} = useUserPostsStore();

  useEffect(() => {
    getPosts({status: 'all'});
  }, []);

  if (isLoadingPosts) {
    return (
      <div className="flex justify-center my-10">
        <Ping size={45} speed={1} />
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="flex justify-center my-10">
        <p className="text-center text-xl text-gray-500 font-roboto">
          No posts yet
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1">
      {
        posts.map((post) => {
          return (
            <div key={post._id}>
              <ImagePost post={post}/>
            </div>
          );
        })
      }
    </div>
  );
}

function ImagePost ({post}) {
  const pic = post?.pics && post?.pics[0];

  return (
    <img
      src={pic.url}
      alt="post"
      className="mx-auto object-cover sm:w-60 sm:h-60 w-40 h-40 md:w-60 md:h-60"
    />
  );
}
