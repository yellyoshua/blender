import { useLocation, Link } from 'react-router-dom';
import { useResizeDeviceStore } from '../../shared/components/ResizeDevice';
import BlenderAppLogo from '../../shared/icons/BlenderappLogo';
import ChatIcon from '../../shared/icons/ChatIcon';
import UsersIcon from '../../shared/icons/UsersIcon';
import ProfilePhoto from './ProfilePhoto';

const navigationTabs = [
  {
    label: 'Profile',
    Component: ProfileTabButton,
    path: '/profile',
    exact: true
  },
  {
    label: 'Discover',
    Component: DiscoverTabButton,
    path: '/',
    exact: true
  },
  {
    label: 'Community',
    Component: CommunityTabButton,
    path: '/community',
    exact: true
  },
  {
    label: 'Chat',
    Component: ChatTabButton,
    path: '/chat',
    exact: true
  }
];

export default function BottomNavigator ({height = 60}) {
  const { pathname } = useLocation();
  const isMobile = useResizeDeviceStore((state) => state.isMobile);

  return (
    <div
      className={`
        grid grid-cols-4 w-full justify-center items-center 
        fixed bottom-0 max-w-2xl left-0 right-0 mx-auto py-1 border-t border-t-gray-200
        bg-white z-10
      `}
      style={{height}}
    >
      {
        navigationTabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <tab.Component
              key={tab.path}
              isActive={isActive}
              label={tab.label}
              isMobile={isMobile}
              path={tab.path}
            />
          );
        })
      }
    </div>
  );
}

function ProfileTabButton ({isActive, label, path}) {
  return (
    <div className={`
      m-auto ${isActive ? 'opacity-100' : 'opacity-50'}
      hover:opacity-100 hover:text-primary-dark transition-opacity duration-300
    `}>
      <Link to={path} className="text-primary-dark">
        <ProfilePhoto className="m-auto" size={36} />
        <div className="text-xs text-center">{label}</div>
      </Link>
    </div>
  );
}

function DiscoverTabButton ({isActive, label, path}) {
  return (
    <div className={`
      m-auto ${isActive ? 'opacity-100' : 'opacity-50'}
      hover:opacity-100 hover:text-primary-dark transition-opacity duration-300
    `}>
      <Link to={path} className="text-primary-dark">
        <BlenderAppLogo width={36} height={36} className="m-auto" />
        <div className="text-xs text-center">{label}</div>
      </Link>
    </div>
  );
}

function CommunityTabButton ({isActive, label, path}) {
  return (
    <div className={`
      m-auto ${isActive ? 'opacity-100' : 'opacity-50'}
      hover:opacity-100 hover:text-primary-dark transition-opacity duration-300
    `}>
      <Link to={path} className="text-primary-dark">
        <UsersIcon width={36} height={36} className="m-auto text-primary" />
        <div className="text-xs text-center">{label}</div>
      </Link>
    </div>
  );
}

function ChatTabButton ({isActive, label, path}) {
  return (
    <div className={`
      m-auto ${isActive ? 'opacity-100' : 'opacity-50'}
      hover:opacity-100 hover:text-primary-dark transition-opacity duration-300
    `}>
      <Link to={path} className="text-primary-dark">
        <ChatIcon width={36} height={36} className="m-auto text-primary" />
        <div className="text-xs text-center">{label}</div>
      </Link>
    </div>
  );
}
