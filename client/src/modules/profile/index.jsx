/* eslint-disable id-length */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../shared/icons/PencilIcon';
import AddIcon from '../shared/icons/AddIcon';
import ProfilePhoto from '../app/components/ProfilePhoto';
import { useMeStore, useUserPostsStore } from '../shared/store';
import FileUpload from '../shared/components/FileUpload';
import ImagePostsGrid from '../shared/components/ImagePostsGrid';
import AutosaveInput from '../shared/components/AutosaveInput';
import {HiCog8Tooth, HiShieldCheck} from 'react-icons/hi2';

export default function Profile () {
  const { me, getMe, updateMe } = useMeStore();

  const {posts, getPosts, loading: isLoadingPosts, deletePost} = useUserPostsStore();

  useEffect(() => {
    getPosts({status: 'all'});
  }, []);

  const has_location = me.profile.location_city &&
  me.profile.location_country;

  return (
    <div className="my-8 px-8" style={{paddingBottom: 65}}>
      <div className="grid grid-cols-2">
        <div className="flex md:justify-center justify-start items-center">
          <FileUpload
            location="profile_picture"
            attachedTo={me._id}
            fileType="image"
            onUpload={getMe}>
            <ProfilePhoto className="h-36 w-36" />
          </FileUpload>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col w-full gap-2">
            <Link to="/security" className="w-full">
              <button className={`
                text-white bg-green-800 text-sm font-roboto font-medium w-full py-2 flex
                justify-center items-center px-2 rounded-md
              `}>
                <HiShieldCheck className="h-4 w-4 mr-2" />
                Security
              </button>
            </Link>
            <Link to="/settings" className="w-full">
              <button className={`
                text-white bg-primary text-sm font-roboto font-medium w-full py-2 flex
                justify-center items-center px-2 rounded-md
              `}>
                <HiCog8Tooth className="h-4 w-4 mr-2" />
                Settings
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center">
        <AutosaveInput
          isEditable
          isRequired
          placeholder="First Name"
          value={me.first_name}
          onUpdate={(value) => updateMe({first_name: value}, true)}
          type="text"
          className="text-4xl text-right text-primary font-roboto p-3"
        >
          <h1 className="text-right text-4xl text-primary font-roboto p-3" >
            {me.first_name}
          </h1>
        </AutosaveInput>
        <AutosaveInput
          isEditable
          isRequired
          placeholder="Last Name"
          value={me.last_name}
          onUpdate={(value) => updateMe({last_name: value}, true)}
          type="text"
          className="text-4xl text-left text-primary font-roboto p-3"
        >
          <h1 className="text-left text-4xl text-primary font-roboto p-3" >
            {me?.last_name}
          </h1>
        </AutosaveInput>
      </div>
      {
        has_location &&
        <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
          in {me.profile.location_city}, {me.profile.location_country}
        </h2>
      }

      <div className="flex justify-between items-center">
        <p className="text-left text-sm font-bold text-primary font-roboto p-3" >
          Interests
        </p>
        <Link to="/profile/edit/interests">
          <button
            className="text-primary text-sm font-bold py-1 px-4 rounded mx-auto block"
            type="button"
          >
            <PencilIcon className="inline-block mr-1" width={13} height={13} />
            Edit
          </button>
        </Link>
      </div>
      <div className="
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white py-2 px-2">
        {
          me.profile.interests.map((interest) => {
            return (
              <h1 key={interest._id} className="bg-primary px-2 rounded-2xl select-none">
                {interest.name}
              </h1>
            );
          })
        }
      </div>

      <div className="flex justify-between items-center">
        <p className="text-left text-sm font-bold text-primary font-roboto p-3" >
          Personalities
        </p>
        <Link to="/profile/edit/personalities">
          <button
            className="text-primary text-sm font-bold py-1 px-4 rounded mx-auto block"
            type="button"
          >
            <PencilIcon className="inline-block mr-1" width={13} height={13} />
            Edit
          </button>
        </Link>
      </div>
      <div className="
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white py-2 px-2">
        {
          me.profile.personalities.map((interest) => {
            return (
              <h1 key={interest._id} className="bg-primary px-2 rounded-2xl select-none">
                {interest.name}
              </h1>
            );
          })
        }
      </div>

      <div className="flex justify-between items-center">
        <p className="text-left text-sm font-bold text-primary font-roboto p-3" >
          Photos
        </p>
        <Link to="/profile/edit/photos">
          <button
            className="text-primary text-sm font-bold py-1 px-4 rounded mx-auto block"
            type="button"
          >
            <AddIcon className="inline-block mr-1" width={13} height={13} />
            Add
          </button>
        </Link>
      </div>
      <ImagePostsGrid
        removable
        posts={posts}
        loading={isLoadingPosts}
        removePost={deletePost}
      />
    </div>
  );
}
