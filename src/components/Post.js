import React, {useContext, useState} from 'react';
import SelectPostContext from '../context/SelectPostContext';
import {Button, Input} from 'antd';
import DeletePostContext from '../context/DeletePostContext';
import apiClient from '../api/apiClient';
import EditPostContext from '../context/EditPostContext';

const Post = ({post}) => {
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
  return (
    <div>
      {!editMode && (
        <p onClick={editPost && (() => setEditMode(true))}>
          {post.description}
        </p>
      )}
      {editMode && (
        <Input
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          onPressEnter={onEdit}
        />
      )}
      {editMode && <Button onClick={onEdit}>Save</Button>}
      {selectPost && (
        <Button
          onClick={e => {
            e.stopPropagation();
            selectPost(post);
          }}>
          View
        </Button>
      )}
      {deletePost && (
        <Button
          onClick={e => {
            e.stopPropagation();
            deletePost(post);
          }}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default Post;
