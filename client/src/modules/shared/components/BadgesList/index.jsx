export default function BadgesList ({
  badges = [],
  beforeRender = (badge) => badge
}) {
  return (
    <div className="
      flex flex-wrap text-center gap-2 text-white py-2 px-2">
      {
        badges.map((badge) => {
          const badgeToRender = beforeRender(badge);

          return (
            <h1 key={badgeToRender._id} className={`
              bg-primary px-4 py-2 rounded-2xl select-none
              ${badgeToRender?.color ? `bg-${badgeToRender.color}` : ''}
            `}>
              {badgeToRender.name}
            </h1>
          );
        })
      }
    </div>
  );
}
