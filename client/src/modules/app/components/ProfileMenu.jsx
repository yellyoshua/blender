import { useState } from 'react';
import useAuthentication from '../../shared/hooks/useAuthentication';
import { useCurrentUserStore } from '../stores';

export default function ProfileMenu () {
  const [isOpen, setIsOpen] = useState(false);
  const {logout} = useAuthentication();
  const {currentUser} = useCurrentUserStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 z-50 mt-2 mr-2">
      <img
        className="w-10 h-10 rounded-full border border-gray-200 shadow-sm cursor-pointer"
        src={currentUser.picture}
        srcSet="/images/avatar-default.svg"
        alt={currentUser.first_name}
        onClick={toggleMenu}
      />
      {isOpen && <div className="absolute top-0 right-0 mt-12 mr-2">
        <div className="bg-white rounded shadow-lg py-2">
          <a
            href="/account_settings"
            className="block px-4 py-1 text-gray-800 hover:bg-gray-100 text-sm"
          >
            Account settings
          </a>
          <a
            href=""
            className="block px-4 py-1 text-gray-800 hover:bg-gray-100 text-sm"
            onClick={logout}
          >
            Logout
          </a>
          <a
            href="/support"
            className="block px-4 py-1 text-gray-800 hover:bg-gray-100 text-sm"
          >
            Support
          </a>
        </div>
      </div>}
    </div>
  );
}
