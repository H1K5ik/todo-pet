import axios from 'axios'

export const getGuthubAccount = async (username: string) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}${username}`)
  return data.avatar_url
}
