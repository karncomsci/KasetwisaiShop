import isAuth from "../utils/isAuth"

export default defineEventHandler((event) => {

    //check middlewares
    isAuth(event)
    const products = [
        {
            id:1,
            name:'Apple',
            Price:100000
        },
        {
            id:2,
            name:'Nike',
            Price:2500
        },
        {
            id:3,
            name:'Adidas',
            Price:17000
        }

    ]
    return products
  })