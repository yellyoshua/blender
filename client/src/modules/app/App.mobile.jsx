import { Outlet } from 'react-router-dom';

export default function AppMobile () {
  return (
    <div className="text-center">
      <Outlet />
      <BottomNavigator/>
    </div>
  );
}
function BottomNavigator () {
  return (
    <div className="grid grid-cols-4 w-full gap-3 justify-center items-center 
    fixed bottom-0 max-w-2xl left-0 right-0 mx-auto py-5 border-t border-t-slate-400">
      <p className="text-center">
        Profile
      </p>
      <p className="text-center">
        Discover
      </p>
      <p className="text-center">
        Communities
      </p>
      <p className="text-center">
        Chats
      </p>

    </div>
  );
}
