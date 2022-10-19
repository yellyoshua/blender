import { Outlet } from 'react-router-dom';

export default function AppDesktop () {
  return (
    <div className="h-screen max-w-2xl flex justify-center mx-auto">
      <div>
        <Outlet />
        <BottomNavigator/>
      </div>
    </div>
  );
}
function BottomNavigator () {
  return (
    <div className="grid grid-cols-4 w-full gap-3 justify-center items-center 
    fixed bottom-0 max-w-2xl left-0 right-0 mx-auto py-5 border-t border-t-slate-400
    border-r border-r-slate-400 border-l border-l-slate-400 rounded-lg">
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
