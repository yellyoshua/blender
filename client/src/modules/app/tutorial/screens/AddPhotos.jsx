import { useEffect } from 'react';
import FileUpload from '../../../shared/components/FileUpload';
import ImagePostsGrid from '../../../shared/components/ImagePostsGrid';
import AddIcon from '@/icons/AddIcon';
import { useUserPostsStore } from '../../../shared/store';

export default function AddPhotos ({user, profile, updateProfile}) {
  const handleDonePhotos = () => {
    updateProfile({tutorial: {done_add_photos: true}});
  };

  const {posts, getPosts, deletePost, loading} = useUserPostsStore();

  const isLimitReached = posts.length >= 6;

  useEffect(() => {
    getPosts({status: 'draft'});
  }, []);

  const emptyImageBox = (
    <div className="w-28 h-28 border border-white rounded-xl flex flex-col items-center justify-center cursor-pointer m-auto">
      <AddIcon className="w-12 h-12 text-white" />
    </div>
  );

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-primary">
      <div className="max-w-sm flex flex-col gap 3 mx-6 min-h-screen py-3">
        <div className="grow">
          <h1
            className="text-4xl pt-3 md:text-2xl font-bold text-left mb-4 text-white font-roboto"
          >
            More photos than ever
          </h1>
          <p className="text-white font-roboto">
          The more, the better. 
          Picking more pics will help you find more friends, <br />
          open up, show yourself.
          </p>
        </div>
        <ImagePostsGrid
          fixed
          removable
          posts={posts}
          loading={loading}
          removePost={deletePost}
        >
          {
            !isLimitReached &&
            <FileUpload
              location="post_picture"
              attachedTo={null}
              fileType="image"
              onUpload={() => getPosts({status: 'draft'})}>
              {emptyImageBox}
            </FileUpload>
          }
        </ImagePostsGrid>
        <div className="grow"></div>
        <div className="grow flex flex-col items-center justify-end mb-4">
          <button
            className="p-3 w-60 bg-white text-primary text-base rounded-3xl px-4 font-roboto"
            onClick={handleDonePhotos}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
