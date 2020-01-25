const KoaRouter = require('koa-router');
const router = new KoaRouter();

const middleWares = require('../model/middleWares');
const indexService = require('../service/index');

router.get('/', indexService.index);
router.post('/saveEvent', indexService.saveEvent);
router.post('/getEvents', indexService.getEvents);

router.post('/getEventDetail', indexService.getEventDetailCheck);
router.post('/getEventDetail', indexService.getEventDetail);

router.post('/saveRecord', indexService.saveRecord);



module.exports = router;