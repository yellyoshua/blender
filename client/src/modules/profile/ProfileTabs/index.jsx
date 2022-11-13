import { useState } from 'react';
import {HiOutlineCamera} from 'react-icons/hi2';
import PostsTab from '../PostsTab';

export default function ProfileTabs () {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="flex flex-col gap-2 pt-3">
      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <button
          className={`
            text-primary text-sm font-roboto font-medium w-full py-2 flex
            justify-center items-center px-2 border-b-2 border-b-transparent
            ${activeTab === 'posts' ? 'border-b-primary' : ''} font-bold text-xl
          `}
          onClick={() => setActiveTab('posts')}
        >
          <HiOutlineCamera className="h-6 w-6 mr-2" />
          Posts
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {
          activeTab === 'posts' && <PostsTab />
        }
      </div>
    </div>
  );
}
