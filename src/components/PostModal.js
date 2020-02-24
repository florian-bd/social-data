import React, {useContext} from 'react';
import Post from './Post';
import {Modal, Button} from 'antd';
import SelectPostContext from '../context/SelectPostContext';

const PostModal = ({post, nextPost, previousPost, close, isDeleted}) => {
  const selectPost = useContext(SelectPostContext);
  return (
    <Modal visible={!!post} onCancel={close} destroyOnClose>
      <Post post={post} />
      <Button onClick={() => selectPost(previousPost)} disabled={!previousPost}>
        Previous
      </Button>
      <Button onClick={() => selectPost(nextPost)} disabled={!nextPost}>
        Next
      </Button>
      {isDeleted && 'Post was deleted'}
    </Modal>
  );
};

export default PostModal;
