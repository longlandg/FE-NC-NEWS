import Axios from "axios";

export const fetchAllUsers = async () => {
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users`
  );

  return data.users;
};

export const fetchAllArticles = async (filterBy, sortBy) => {
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?${filterBy}${sortBy}`
  );
  return data.articles;
};

export const fetchSingleArticle = async article_id => {
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
  );

  return data.article;
};

export const fetchUserInfo = async username => {
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users/${username}`
  );

  return data.user;
};

export const fetchUserArticles = async username => {
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles?author=${username}`
  );

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
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}/comments`
  );

  return data.comments;
};

export const postTopic = newtopic => {
  return Axios.post(
    `https://longlandncknews.herokuapp.com/api/topics`,
    newtopic
  );
};

export const fetchAllTopics = async () => {
  const { data } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/topics`
  );

  return data.topics;
};

export const postArticle = newarticle => {
  return Axios.post(
    `https://longlandncknews.herokuapp.com/api/articles`,
    newarticle
  );
};

export const deleteArticle = article_id => {
  return Axios.delete(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}`
  );
};

export const postComment = (newcomment, article_id) => {
  return Axios.post(
    `https://longlandncknews.herokuapp.com/api/articles/${article_id}/comments`,
    newcomment
  );
};
