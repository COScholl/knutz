import express from 'express';

const router = express.Router();

/* GET SRD. */
router.get('/', (req, res/* , next */) => {
  res.send('respond with a resource');
});

module.exports = router;
