import { createError ,sendError } from 'h3'
export default defineEventHandler((event) => {
    if (!event.context.auth){
        sendError(event,createError({
            statusCode:401,
            statusMessage:"unauthorized"
        }))
    }
})