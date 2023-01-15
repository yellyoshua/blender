import { Ping } from '@uiball/loaders';
import {HiX} from 'react-icons/hi';

export default function ImagePostsGrid ({
  posts = [],
  loading = false,
  fixed = false,
  editable = false, // Should redirect to /post/:id/edit
  removable = false,
  removePost,
  children = null
}) {
  if (loading) {
    return (
      <div className="flex justify-center">
        <Ping size={45} speed={1} />
      </div>
    );
  }

  return (
    <div className="grid gap-2 sm:grid-cols-3 grid-cols-2 justify-center items-center pb-6 px-2">
      {
        posts.map((post) => {
          const pic = post.pics[0];
          return (
            <div key={post._id} className="flex flex-col items-center justify-center relative">
              <img
                src={pic.url}
                className={`
                  rounded-xl object-cover bg-white w-full m-auto
                  ${fixed ? 'w-28 h-28' : 'h-auto m-auto'}
                `}
                referrerPolicy="no-referrer"
                alt="profile"
              />
              {
                removable && removePost &&
                <button
                  className={`
                    absolute -top-2 -right-2 bg-red-500 text-white rounded-full
                    w-6 h-6
                  `}
                  type="button"
                  onClick={() => removePost(post._id)}
                >
                  <HiX className="inline-block" width={13} height={13} />
                </button>
              }
            </div>
          );
        })
      }
      {children}
    </div>
  );
}
