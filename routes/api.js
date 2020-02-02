const router = require("express").Router();
const db = require("../models");
const mongo = require('mongojs');





router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  }).catch(err => {
    res.json(err)
  })
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  }).catch(err => {
    res.json(err)
  })
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne({_id: mongo.ObjectID(req.params.id)},{$push:{exercises:req.body}}
  ).then(dbworkouts => {
    res.json(dbworkouts);
  }).catch(err => {
    res.json(err)
  })
})


router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbworkouts => {
    res.json(dbworkouts);
  }).catch(err => {
    res.json(err)
  })
})

module.exports = router;