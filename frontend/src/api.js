import axios from "axios";

const URL = "http://localhost:4000";

export async function getPosts() {
  try {
    const response = await axios.get(`${URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error; 
  }
}

export async function getPost(id) {
  try {
    const response = await axios.get(`${URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error.message);
    throw error;
  }
}

export async function createPost(post) {
  try {
    const response = await axios.post(`${URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error.message);
    throw error;
  }
}

export async function updatePost(id, post) {
  try {
    const response = await axios.put(`${URL}/posts/${id}`, post);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with ID ${id}:`, error.message);
    throw error;
  }
}

export async function deletePost(id) {
  try {
    const response = await axios.delete(`${URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting post with ID ${id}:`, error.message);
    throw error;
  }
}

export async function getUser(id) {
  try {
    const response = await axios.get(`${URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error.message);
    throw error;
  }
}

export async function createUser(user) {
  try {
    const response = await axios.post(`${URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
}

export async function updateUser(id, user) {
  try {
    const response = await axios.put(`${URL}/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error.message);
    throw error;
  }
}

export async function verifyUser(user) {
  try {
    const response = await axios.post(`${URL}/users/login`, user);
    if (response.data.success) {
      return response.data.token;
    } else {
      throw new Error("Invalid login credentials");
    }
  } catch (error) {
    console.error("Error verifying user:", error.message);
    throw error;
  }
}
