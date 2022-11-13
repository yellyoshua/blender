import { useEffect } from 'react';
import { useUserPostsStore } from '../../shared/store';
import { Ping } from '@uiball/loaders';
import ImagePost from './ImagePost';

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
