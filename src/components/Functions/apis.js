import Axios from "axios";

export const fetchAllUsers = async () => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users`
  );
  // console.log("hello im in the function", data.users);
  return data.users;
};

export const fetchAllArticles = async (filterBy, topic, sortBy) => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?${filterBy}${sortBy}${topic}`
  );
  return data.articles;
};

export const fetchSingleArticle = async article_id => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
  );

  return data.article;
};

export const fetchUserInfo = async username => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users/${username}`
  );
  // console.log("hello im in the fetchUserInfo function", data.user);
  return data.user;
};

export const fetchUserArticles = async username => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?author=${username}`
  );
  // console.log("hello im in the userArticles function", data.articles);
  return data.articles;
};

export const deleteComment = comments_id => {
  return Axios.delete(
    `https://longlandncknews.herokuapp.com/api/comments/${comments_id}`
  );
};

export const updateArticleVotes = (direction, article_id) => {
  return Axios.patch(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: direction }
  );
};

export const updateCommentsVotes = (direction, comments_id) => {
  return Axios.patch(
    `https://longlandncknews.herokuapp.com/api/comments/${comments_id}`,
    { inc_votes: direction }
  );
};

export const fetchAllCommentsByArticleId = async article_id => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}/comments`
  );

  return data.comments;
};

export const postTopic = newtopic => {
  // console.log(newtopic);
  return Axios.post(
    `https://longlandncknews.herokuapp.com/api/topics`,
    newtopic
  );
};
