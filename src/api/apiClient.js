class ApiClient {
  userId;

  setUserId = userId => {
    this.userId = userId;
  };

  getImpacters = async () => {
    return apiFetch(`/impacters`);
  };

  getPosts = async () => {
    return apiFetch(`/impacters/${this.userId}/posts`);
  };

  updatePost = async post => {
    const postWithoutId = {...post};
    delete postWithoutId.id;
    try {
      return fetch(`/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(postWithoutId),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      return {
        error: e,
      };
    }
  };

  deletePost = async id => {
    try {
      return fetch(`/posts/${id}`, {
        method: 'DELETE',
      });
    } catch (e) {
      return {
        error: e,
      };
    }
  };
}

const apiFetch = async (...args) => {
  try {
    const data = await fetch(...args);
    return await data.json();
  } catch (e) {
    return {
      error: e,
    };
  }
};

export default new ApiClient();
