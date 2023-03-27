export default defineEventHandler((event) => {

    appendHeader(event,"Access-Control-Allow-Origin","https://www.google.co.th");
    const { token }  = parseCookies(event)

    if (token === 'is_login'){
        event.context.auth = { user: 'aiyakarn' }
    }else{
        event.context.auth = null
    }
    
})