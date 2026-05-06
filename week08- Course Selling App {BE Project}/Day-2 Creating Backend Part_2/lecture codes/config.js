//for security reasons , we must use jwt pasword diff for user also because if the jwt password will be same then it will let others access other routes
const { JWT_USER_PASSWORD } = process.env.JWT_USER_PASSWORD;

//seperate admin password for admin as if suppose there are same id for admin and user and if the jwt_secret is same for both then will get same token so now what happens is user can also access admin routes and even if ids(in db) are diff then also user can not access admin routes
const { JWT_ADMIN_PASSWORD } = process.env.JWT_ADMIN_PASSWORD;


//always avoid circular dependency 

module.exports = {
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD
}

/*created config file bcoz accessing env variables everywhere becomes messy 
instead of
process.env.JWT_USER_PASSWORD
process.env.JWT_ADMIN_PASSSWORD
process.env.port

.env files stores sesnsitive data , if we pushed it to github then anyone can use that DB/API keys so .env prevents upload 

using config now we can use it anywhere 
*/