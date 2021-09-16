const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


  // find all categories
  // be sure to include its associated Products
  router.get("/", async (req, res) => {
    try {
      const catData = await Category.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(catData);
    } catch (err) {
      res.status(500).json(err);
    }
});


  // find one category by its `id` value
  // be sure to include its associated Products
  router.get("/:id", async (req, res) => {
    try {
      const catData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!catData) {
        res.status(404).json({ message: "No category associated with this ID" });
        return;
      }
  
      res.status(200).json(catData);
    } catch (err) {
      res.status(500).json(err);
    }
});


  // create a new category
  router.post("/", async (req, res) => {
    try {
      const catData = await Category.create({ category_name: req.body.category_name,});
      res.status(200).json(catData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update (
    {
      category_name: req.body.category_name
    },
    {
    where: {
      id: req.params.id,
    },
  }
  )
  .then((updatedCat) => {
    res.json(updatedCat);
  })
  .catch((err)=> res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedcat) => {
      res.json(deletedcat);
    })
    .catch((err) => res.json(err));
});


module.exports = router;
