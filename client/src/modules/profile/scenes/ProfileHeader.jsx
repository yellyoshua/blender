import { Link } from 'react-router-dom';
import {HiCog8Tooth, HiShieldCheck} from 'react-icons/hi2';
import FileUpload from '@/components/FileUpload';
import ProfilePhoto from '@/modules/app/components/ProfilePhoto';

export default function ProfileHeader ({user, refreshUser}) {
  return (
    <div className="grid grid-cols-2 px-4">
      <div className="flex md:justify-center justify-start items-center">
        <FileUpload
          location="profile_picture"
          attachedTo={user._id}
          fileType="image"
          onUpload={refreshUser}>
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
  );
}
