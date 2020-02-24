class ApiClient {
  userId;

  setUserId = userId => {
    this.userId = userId;
  };

  getImpacters = async () => {
    return await apiFetch(`/impacters`);
  };

  getPosts = async () => {
    return apiFetch(`/impacters/${this.userId}/posts`);
  };

  updatePost = async post => {
    return apiFetch(`/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  deletePost = async id => {
    return apiFetch(`/posts/${id}`, {
      method: 'DELETE',
    });
  };
}

const apiFetch = async (...args) => {
  try {
    const data = await fetch(...args);
    if (!data) {
      return;
    }
    return await data.json();
  } catch (e) {
    return {
      error: e,
    };
  }
};

export default new ApiClient();
