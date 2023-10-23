'use client';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import { useEffect, useState } from 'react';

import Avatar from '@/components/Avatar';
import Divider from '@/components/Divider';
import Icon from '@/components/Icon';
import Tag from '@/components/Tag';
import { useAppStore } from '@/stores/useAppStore';
import { useFilterStore } from '@/stores/useFilterStore';

const PostList = () => {
  const { posts, fetchPosts } = useAppStore();
  const { searchTerms } = useFilterStore();
  const [filteredPosts, setFilteredPosts] = useState<any[]>(posts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.headline.toLowerCase().includes(searchTerms.toLowerCase()),
      ),
    );
  }, [posts, searchTerms]);

  return (
    <>
      {filteredPosts.length === 0 ? (
        <div className='mt-2 justify-center  flex mx-auto'>
          <p className='text-lg italic leading-8 text-gray-400'>Sem dados</p>
          <ExclamationTriangleIcon className='mt-2 ml-2 h-5 w-5 flex-none text-gray-400' />
        </div>
      ) : (
        filteredPosts.map((post) => (
          <div className='bg-white pt-8' key={post.id}>
            <div className='flex gap-x-6 relative'>
              <div className='absolute top-0 left-0 flex h-[76px] w-[40px] flex-col border-[1px] rounded-[3px] border-gray-200 justify-center items-center'>
                <Icon icon='arrow_up' className='h-6 w-6 text-red-800' />
                <Divider bgColor='bg-gray-300' orientation='horizontal' />
                <div className='flex '>
                  <span className='text-[20px] font-semibold text-gray-900 '>
                    {post.storyVoteScore}
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-x-4 ml-14'>
                <div className='min-w-0 flex-auto'>
                  <p className='truncate font-semibold text-[9px] text-gray-300 uppercase'>
                    {post.publisher.url}
                  </p>
                  <p className='text-lg font-normal text-gray-800 leading-tight overflow-hidden text-ellipsis'>
                    {post.headline}
                  </p>
                </div>
                <div className='flex flex-row items-center gap-x-[6px] mt-1 h-[30px] pt-2'>
                  <Tag entity={post.articleSection} />
                  <Divider bgColor='bg-gray-300 ' orientation='vertical' />
                  <Avatar
                    src={post.author.imageUrl}
                    name={post.author.name}
                    width={20}
                    height={20}
                  />
                  <p className='ml-1 text-[10px] text-red-800 font-medium text-decoration-divne: underline underline-offset-2 decoration-inherit decoration-solid'>
                    {post.author.name}
                  </p>
                  <p className='text-[10px] text-gray-400'>
                    {moment(post.createdAt).fromNow()}
                  </p>
                  <p className='font-extrabold text-gray-400 pb-2'>.</p>
                  <Icon icon='chat' className='h-3 w-3 text-red-800' />
                  <p className='text-[10px] text-red-800 text-decoration-line: underline font-medium underline-offset-2 decoration-inherit decoration-solid'>
                    {post.comments.length} Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className='mt-12 flex items-center justify-center rounded-[3px] bg-gray-200 p-4 gap-x-2'>
        <Icon icon='exchange_arrows' className='h-4 w-4 text-red-700' />
        <p className='text-sm font-normal text-red-700'>Load more</p>
      </div>
    </>
  );
};

export default PostList;
