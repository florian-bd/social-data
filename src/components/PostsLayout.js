import React, {useState} from 'react';
import Posts from './Posts/Posts';
import Layout from './Layout';
import apiClient from '../api/apiClient';
import SelectPostContext from '../context/SelectPostContext';
import PostModal from './PostModal/PostModal';
import useListFetcher from './useListFetcher';
import {getNext, getPrevious} from '../util/list';
import DeletePostContext from '../context/DeletePostContext';
import EditPostContext from '../context/EditPostContext';

const PostsLayout = ({user}) => {
  const [selectedPost, setSelectedPost] = useState();
  const [nextPost, setNextPost] = useState();
  const [previousPost, setPreviousPost] = useState();
  const [deletedPost, setDeletedPost] = useState();
  const [posts, setPosts] = useListFetcher({
    fetch: apiClient.getPosts,
    dependency: deletedPost,
  });

  const selectPost = post => {
    setNextPost(post && getNext({list: posts, item: post}));
    setPreviousPost(
      post &&
        getPrevious({
          list: posts,
          item: post,
        }),
    );
    setSelectedPost(post);
  };

  const editPost = async post => {
    await apiClient.updatePost(post); // TODO should handle error
    setPosts(
      // replace updated post in the list
      posts.map(p => {
        if (p.id === post.id) {
          return post;
        }
        return p;
      }),
    );
    // update selected post
    if (selectedPost && post.id === selectedPost.id) {
      setSelectedPost(post);
    };
  };

  const deletePost = async post => {
    await apiClient.deletePost(post.id); // TODO should handle error
    setDeletedPost(post);
  };

  return (
    <Layout>
      <h1>Here are all your posts {user.name}</h1>
      <SelectPostContext.Provider value={selectPost}>
        <EditPostContext.Provider value={editPost}>
          <DeletePostContext.Provider value={deletePost}>
            <Posts posts={posts}></Posts>
            <PostModal
              post={selectedPost}
              close={() => setSelectedPost()}
              nextPost={nextPost}
              previousPost={previousPost}
              isDeleted={selectedPost === deletedPost}></PostModal>
          </DeletePostContext.Provider>
        </EditPostContext.Provider>
      </SelectPostContext.Provider>
    </Layout>
  );
};

export default PostsLayout;
