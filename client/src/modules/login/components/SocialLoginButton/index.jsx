import { useRecoilValue } from 'recoil';
import {authProvidersAtom} from '../../../login';

function LoginButton ({providerAuthUrl, providerLogo, providerLabel, className}) {
  return (
    <a
      href={providerAuthUrl}
      className={`p-3 w-60 bg-primary flex gap-3 rounded-3xl ${className}`}
    >
      {providerLogo}
      <span className="text-base text-white">Continue with {providerLabel}</span>
    </a>
  );
}

/**
 * @param {{provider: 'google' | 'facebook', apiUrl: string}} props
 */

export default function SocialLoginButton ({provider, apiUrl}) {
  const authProviders = useRecoilValue(authProvidersAtom);

  const provider_info = authProviders[provider];

  if (!provider_info) {
    throw new Error(`Invalid provider: ${provider}`);
  }
  
  return (
    <LoginButton
      className="flex items-center"
      providerAuthUrl={`${apiUrl}${provider_info.providerAuthUrl}`}
      providerLogo={provider_info.providerLogo}
      providerLabel={provider_info.providerLabel}
    />
  );
}
