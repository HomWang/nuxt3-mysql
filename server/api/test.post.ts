import userModel from '../database/models/user.model';
export default async (req, res) => {
  const body = await useBody(req)
  const users = await userModel.addUser(body.text);
  console.log(users)
  await useStorage().setItem('redis:nuxt3-redis', body)
  return 'Success'
}