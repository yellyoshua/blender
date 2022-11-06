export default function ImagePost ({post}) {
  const pic = post?.pics && post?.pics[0];

  return (
    <img
      src={pic.url}
      alt="post"
      className="mx-auto object-cover sm:w-60 sm:h-60 w-40 h-40 md:w-60 md:h-60"
    />
  );
}
