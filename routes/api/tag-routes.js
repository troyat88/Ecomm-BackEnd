const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint


  // find all tags
  // be sure to include its associated Product data
  router.get("/", async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagsData) {
      res.status(404).json({ message: "No ID associated with this number" });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
  router.post("/", async (req, res) => {
    try {
      const tagsData = await Tag.create({ tag_name: req.body.tag_name,});
      res.status(200).json(tagsData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  // update a tag's name by its `id` value
  router.put("/:id", (req, res) => {
    Tag.update (
      {
        tag_name: req.body.tag_name
      },
      {
      where: {
        id: req.params.id,
      },
    }
    )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err)=> res.json(err))
});


  // delete on tag by its `id` value
  router.delete("/:id", (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedTag) => {
        res.json(deletedTag);
      })
      .catch((err) => res.json(err));
  });

module.exports = router;
