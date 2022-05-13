import { TUserInfo, TPassword } from "./login.type";

export const password: TPassword = "123";

export const userInfo: TUserInfo = {
    name: "First Last",
    email: "First@gmail.com",
    image: "https://i.imgur.com/imwXQ08.png",
    address: {
        street: '123 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zipcode: 92802
    },
    phone: '1 (234) 567-8910',
    token: "1F3BE74C45393EAE25AB516C76F2F"
}