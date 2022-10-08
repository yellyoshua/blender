import SocialLoginButton from './components/SocialLoginButton';
import BlenderappLogo from '../shared/icons/BlenderappLogo';
import BlenderappLabel from '../shared/icons/BlenderappLabel';

export default function LoginDesktop() {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="grid grid-cols-2 gap-20 min-h-screen">
      <div className="flex justify-end items-center"> 
        <img className="" style={{height: 450}} src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-start"> 
        <div className="text-center flex flex-col gap-3 p-3">
          <div className="grow ">
            <BlenderappLogo className="mx-auto mt-4" />
            <BlenderappLabel className="mx-auto mt-4" width={200} />
            <p className="text-primary mx-auto mt-2 font-medium">Blending cultures</p>
          </div>
          {/* <div className="grow"></div> */}
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
