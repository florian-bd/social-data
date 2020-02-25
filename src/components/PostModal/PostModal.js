import React, {useContext} from 'react';
import {Modal, Button, Col, Alert, Row} from 'antd';
import Post from '../Post/Post';
import SelectPostContext from '../../context/SelectPostContext';
import styles from './PostModal.module.css';
import useRefWidth from '../useRefWidth';

const PostModal = ({post, nextPost, previousPost, close, isDeleted}) => {
  const selectPost = useContext(SelectPostContext);
  const [width, measuredRef] = useRefWidth();

  return (
    <Modal
      visible={!!post}
      onCancel={close}
      footer={null}
      width="90%"
      destroyOnClose>
      <Row type="flex" align="middle">
        <Col span={2} className={styles.arrowContainer}>
          <Button
            type="link"
            icon="left"
            onClick={() => selectPost(previousPost)}
            disabled={!previousPost}></Button>
        </Col>
        <Col span={20}>
          <div ref={measuredRef}>
            <Post post={post} width={width} />
          </div>
        </Col>
        <Col span={2} className={styles.arrowContainer}>
          <Button
            type="link"
            icon="right"
            onClick={() => selectPost(nextPost)}
            disabled={!nextPost}></Button>
        </Col>
      </Row>
      <br></br>
      {isDeleted && <Alert message="The post has been deleted."></Alert>}
    </Modal>
  );
};

export default PostModal;
