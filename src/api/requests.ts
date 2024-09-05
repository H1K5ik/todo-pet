import axios from 'axios'
require('dotenv').config()

export const getGuthubAccount = async (username: string) => {
  const { data } = await axios.get(`${process.env.API}${username}`)
  return data.avatar_url
}
