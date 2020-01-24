const KoaRouter = require('koa-router');
const router = new KoaRouter();

const indexService = require('../service/index');

router.get('/', indexService.index);
router.get('/record', indexService.record);

router.post('/record', indexService.record);

module.exports = router;