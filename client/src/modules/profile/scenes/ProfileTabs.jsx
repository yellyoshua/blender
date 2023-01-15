import { useState } from 'react';
import _ from 'underscore';
import {HiOutlineCamera} from 'react-icons/hi2';
import PostsTab from '../components/PostsTab';

const tabs = [
  {
    name: 'posts',
    label: 'Posts',
    icon: () => <HiOutlineCamera className="h-5 w-5 mr-2" />,
    component: () => <PostsTab />
  }
];

export default function ProfileTabs () {
  const [activeTab, setActiveTab] = useState('posts');

  const currentTab = _(tabs).findWhere({name: activeTab});

  return (
    <div className="flex flex-col gap-2 pt-3">
      <div className="grid grid-cols-2 items-center justify-center gap-2">
        {
          tabs.map((tab) => {
            return (
              <button
                key={tab.name}
                className={`
                  text-primary text-sm font-roboto font-medium w-full py-2 flex
                  justify-center items-center px-2 border-b-2 border-b-transparent
                  ${activeTab === tab.name ? 'border-b-primary' : ''} font-bold text-lg
                `}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.icon()}
                {tab.label}
              </button>
            );
          })
        }
      </div>
      <div className="flex flex-col gap-2">
        {currentTab.component()}
      </div>
    </div>
  );
}
