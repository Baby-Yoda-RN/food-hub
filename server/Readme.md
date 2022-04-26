### Server
Make sure you're in the **server directory**: `cd server`
Install dependencies, run command: `yarn add`
Build .js, run command: `tsc` This will build .js files and saved it to **/dist**
Start server: `npm start`

Register: axios.post('http://localhost/api/register')
Login: axios.post('http://localhost/api/login', { email: "First@gmail.com", password: "123" })