import Axios from "axios";

export const fetchAllUsers = async () => {
  const { data, status } = await Axios.get(
    `https://longlandncknews.herokuapp.com/api/users`
  );
  // console.log("hello im in the function", data.users);
  return data.users;
};
