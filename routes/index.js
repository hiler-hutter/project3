const New = require("../models/New");
const router = require("express").Router();
const axios = require("axios")
router.get('/', (req, res, next) => {
  New.find()
    .then(news => {
      res.status(200).json(news);
    })
    .catch(err => {
      next(err)
    })
});

//calling an api news routes
router.get('/news/:category', (req, res, next) => {
  /* New.find()
    .then(news => {
      res.status(200).json(news);
    })
    .catch(err => {
      next(err)
    }) */
    const categoria = req.params.category
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=dba1d148de644510a8e7d76678c94a34`)
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
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
  const {title, description, author, link} = req.body;
  New.create({
    title,
    description,
    author,
    link
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
