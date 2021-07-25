const New = require("../models/New");
const router = require("express").Router();

router.get('/', (req, res, next) => {
  New.find()
    .then(news => {
      res.status(200).json(news);
    })
    .catch(err => {
      next(err)
    })
});

router.get('/:id', (req, res, next) => {
  New.findById(req.params.id)
    .then(New => {
      if (!New) {
        res.status(404).json(New);
      } else {
        res.status(200).json(New);
      }
    })
    .catch(err => {
      next(err)
    })
});

router.post("/", (req, res, next) => {
  const {title, description, author} = req.body;
  New.create({
    title,
    description,
    author
  })
  .then(news => {
    res.status(201).json(news);
  })
  .catch(err => {
    next(err);
  })

});

router.put('/:id', (req, res, next) => {
  const { title, description, author} = req.body;
  New.findByIdAndUpdate(req.params.id, { title, description, author }, { new: true })
    .then(news => {
      res.status(200).json(news);
    })
    .catch(err => {
      next(err);
    })
});

router.delete('/:id', (req, res, next) => {
  New.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'news deleted' });
    })
    .catch(err => {
      next(err);
    })
});


module.exports = router;
