import React, {useContext, useState} from 'react';
import SelectPostContext from '../context/SelectPostContext';
import {Button, Input, Card, Icon} from 'antd';
import DeletePostContext from '../context/DeletePostContext';
import EditPostContext from '../context/EditPostContext';
import {getImageUrl} from '../util/image';
import styles from './Post.module.css';

const Post = ({post, width}) => {
  const selectPost = useContext(SelectPostContext);
  const deletePost = useContext(DeletePostContext);
  const editPost = useContext(EditPostContext);
  const [editMode, setEditMode] = useState();
  const [newDescription, setNewDescription] = useState(post.description);

  const onEdit = async () => {
    await editPost({
      ...post,
      description: newDescription,
    });
    setEditMode();
  };
  const defaultMedium =
    (post.data &&
      post.data.media &&
      post.data.media.length &&
      post.data.media[0]) ||
    {};
  return (
    <Card
      cover={
        width && (
          <img
            alt={defaultMedium.description}
            src={getImageUrl({medium: defaultMedium, width})}
          />
        )
      }
      actions={[
        selectPost && (
          <Icon
            type="fullscreen"
            key="fullscreen"
            onClick={e => {
              selectPost(post);
            }}
          />
        ),
        editPost && (
          <Icon type="edit" key="edit" onClick={() => setEditMode(!editMode)} />
        ),
        deletePost && (
          <Icon
            type="delete"
            theme="twoTone"
            twoToneColor="#f5222d"
            key="delete"
            onClick={e => {
              deletePost(post);
            }}
          />
        ),
      ]}>
      {!editMode && <p>{post.description}</p>}
      {editMode && (
        <Input
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          onPressEnter={onEdit}
        />
      )}
      {editMode && (
        <div className={styles.buttons}>
          <Button
            onClick={() => {
              setEditMode(false);
              setNewDescription(post.description);
            }}>
            Cancel
          </Button>
          <Button type="primary" onClick={onEdit}>
            Save
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Post;
