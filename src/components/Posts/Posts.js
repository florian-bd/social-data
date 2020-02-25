import React from 'react';
import Post from '../Post/Post';
import styles from './Posts.module.css';
import useRefWidth from '../useRefWidth';

const Posts = ({posts}) => {
  const [width, measuredRef] = useRefWidth();

  return (
    <div ref={measuredRef}>
      {posts.map(post => (
        <div className={styles.container}>
          <Post key={post.id} post={post} width={width} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
