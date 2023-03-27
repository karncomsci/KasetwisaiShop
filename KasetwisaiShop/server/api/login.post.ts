export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {user, password} = body

    if(user === "aiyakarn" && password === 12345){
        setCookie(event,"token","is_login",{
            httpOnly:true,
            sameSite:true,
            maxAge:3600
        })

        return {
            message:"login success!"
        }
    }else{
        isAuth(event)
    }
})