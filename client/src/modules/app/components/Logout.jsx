import useAuthentication from '../../shared/hooks/useAuthentication';
import LogoutIcon from '@/icons/LogoutIcon';
import './styles.css';

export default function Logout () {
  const {logout} = useAuthentication();

  return (
    <div className="fixed top-0 right-0 z-50">
      <button onClick={logout} className="mt-2 mr-1 relative">
        <div className="logout_button_bg z-10 bg-primary" />
        <LogoutIcon
          size={30}
          className="text-white z-10 relative"
        />
      </button>
    </div>
  );
}
