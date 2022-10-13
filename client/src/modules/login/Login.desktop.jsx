import SocialLoginButton from './components/SocialLoginButton';
import BlenderappLogo from '../shared/icons/BlenderappLogo';
import BlenderappLabel from '../shared/icons/BlenderappLabel';
import { useState, useEffect } from 'react';

export default function LoginDesktop () {
  const apiUrl = import.meta.env.VITE_API_URL;

  const previews = [
    '/images/screen_complete_profile.png',
    '/images/screen_photos_upload.png'
  ];

  const [activePreview, setActivePreview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePreview((prevPreview) => {
        if (prevPreview === previews.length - 1) {
          return 0;
        }
        return prevPreview + 1;
      });
      console.log(activePreview);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-20 min-h-screen select-none">
      <div className="flex justify-end items-center"> 
        <img className="" style={{height: 450}} src={previews[activePreview]} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start"> 
        <div className="text-center flex flex-col gap-3 p-3">
          <div className="grow">
            <BlenderappLogo className="mx-auto mt-4" />
            <BlenderappLabel className="mx-auto mt-4" width={200} />
            <p className="text-primary mx-auto mt-2 font-medium">Blending cultures</p>
          </div>
          <div className="my-20">
            <h2 className="font-bold text-xl text-primary">Welcome!</h2>
            <p className="text-primary">How do you want to get started?</p>
          </div>
          <div className="grow"></div>
          <div className="justify-end flex flex-col gap-3 p-3 items-center">
            <SocialLoginButton provider="google" apiUrl={apiUrl} />
          </div>
          <div className="justify-center flex">
            <p className="max-w-xs text-xs">
              By signing up, you agree to our Terms. See how we use your
              data in our Privacy Policy.
              We never post to Facebook, Twitter or Google.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
