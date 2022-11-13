/* eslint-disable no-nested-ternary */
import * as heroicons from 'react-icons/hi2';
import * as tablericons from 'react-icons/tb';

export default function Icon ({icon, kind = 'heroicons', className, ...props}) {
  const Icon = kind === 'heroicons'
    ? heroicons[`Hi${sanitizeIconName(icon)}`]
    : kind === 'tablericons'
      ? tablericons[`Tb${sanitizeIconName(icon)}`]
      : null;

  if (!Icon) {
    return (
      <heroicons.HiOutlineQuestionMarkCircle className={className} {...props} />
    );
  }

  return <Icon className={className || 'w-16 h-16'} {...props} />;
}

function sanitizeIconName (iconName) {
  const name_parts = iconName.split('-');
  const name = name_parts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  });

  return name.join('');
}
