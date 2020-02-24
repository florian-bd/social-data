import React from 'react';
import {action} from '@storybook/addon-actions';
import PostModal from './PostModal';
import SelectPostContext from '../context/SelectPostContext';
import EditPostContext from '../context/EditPostContext';
import DeletePostContext from '../context/DeletePostContext';

export default {
  title: 'Post Modal',
  component: PostModal,
};

const POST_DATA = {
  id: 'bcdc3a88-b6cf-4b55-99bd-bf7818032ae2',
  type: 'IMAGES',
  description: 'cillum anim Lorem laborum quis sit aliqua ad occaecat cillum',
  data: {
    media: [
      {
        image: 'https://picsum.photos/id/0/5616/3744',
        width: 5616,
        height: 3744,
        version: '2019-03-14',
        description: 'Alejandro Escamilla',
      },
    ],
  },
  impacter_id: '822d919d-0076-4d7d-a7ca-c5404a025614',
};

export const NormalPost = () => (
  <SelectPostContext.Provider value={action('select post')}>
    <EditPostContext.Provider value={action('edit post')}>
      <DeletePostContext.Provider value={action('delete post')}>
        <PostModal post={POST_DATA} close={action('close')} />
      </DeletePostContext.Provider>
    </EditPostContext.Provider>
  </SelectPostContext.Provider>
);

export const DeletedPost = () => (
  <SelectPostContext.Provider value={action('select post')}>
    <EditPostContext.Provider value={action('edit post')}>
      <DeletePostContext.Provider value={action('delete post')}>
        <PostModal post={POST_DATA} close={action('close')} isDeleted />
      </DeletePostContext.Provider>
    </EditPostContext.Provider>
  </SelectPostContext.Provider>
);

export const HasOtherPosts = () => (
  <SelectPostContext.Provider value={action('select post')}>
    <EditPostContext.Provider value={action('edit post')}>
      <DeletePostContext.Provider value={action('delete post')}>
        <PostModal
          post={POST_DATA}
          close={action('close')}
          nextPost={{}}
          previousPost={{}}
        />
      </DeletePostContext.Provider>
    </EditPostContext.Provider>
  </SelectPostContext.Provider>
);
