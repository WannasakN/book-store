import Router from 'koa-router'
const router = new Router()
router.get('/', async ctx =>{
    ctx.body= [
        {id:1, title:'Programming'},
        {id:2, title:'Life Style'}
    ]})
    
export default router