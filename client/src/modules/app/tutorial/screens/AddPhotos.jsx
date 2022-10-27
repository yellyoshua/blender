import { useEffect } from 'react';
import FileUpload from '../../../shared/components/FileUpload';
import AddIcon from '../../../shared/icons/AddIcon';
import { useUserPostsStore } from '../../../shared/store/posts.store';

export default function AddPhotos ({user, profile, updateProfile}) {
  const handleDonePhotos = () => {
    updateProfile({tutorial: {done_add_photos: true}});
  };

  const {posts, getPosts} = useUserPostsStore();

  const isLimitReached = posts.length >= 6;

  useEffect(() => {
    getPosts({status: 'draft'});
  }, []);

  const emptyImageBox = (
    <div className="w-28 h-28 border border-white rounded-xl flex flex-col items-center justify-center cursor-pointer">
      <AddIcon className="w-12 h-12 text-white" />
    </div>
  );

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-primary">
      <div className="max-w-sm flex flex-col gap 3 mx-6 min-h-screen py-3">
        <div className="grow">
          <h1
            className="text-4xl md:text-2xl font-bold text-left mb-4 text-white font-roboto"
          >
            More photos than ever
          </h1>
          <p className="text-white font-roboto">
          The more, the better. 
          Picking more pics will help you find more friends, <br />
          open up, show yourself.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 grid-cols-2 justify-center items-center pb-6 px-2">
          {
            posts.map((post) => {
              const pic = post.pics[0];
              return (
                <div key={post._id} className="flex flex-col items-center justify-center">
                  <img
                    src={pic.url}
                    className="rounded-xl object-cover bg-white w-28 h-28 m-auto"
                    referrerPolicy="no-referrer"
                    alt="profile"
                  />
                </div>
              );
            })
          }
          <div className="flex flex-col items-center justify-center">
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
          </div>
        </div>
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
