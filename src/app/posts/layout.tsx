'use client';
const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl'>{children}</div>
    </div>
  );
};

export default PostsLayout;
