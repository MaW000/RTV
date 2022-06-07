const express = require('express');
const router = express.Router();


const Like  = require("../models/like");

// router.get('/:issueId', (req, res) => {
//     Like.find({ _id: req.params.issueId })
//         .then((err, issues) => {
//             console.log(1)
//             if(err) return res.status(400).send(err)
//             res.status(200).json(issues)
//         })
// })

router.get('/:issueId', (req, res, next) => {
    console.log(Like)
    Like.find(
      { _id: req.params.issueId, user: req.auth._id },
      (err, deletedIssue) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).json(deletedIssue)
      }
    )
  })

router.post('/liked', (req, res) => {
    Issue.find({ 'issueId': req.body.issueId, 'userFrom': req.body.userFrom })
    .exec((err, like) => {
        if(err) return res.status(400).send(err)

        res.status(200).json({ success: true, likeNumber: like.length})
    })
})

router.post("/subscribe", (req, res) => {

    const subscribe = new Subscriber(req.body);

    subscribe.save((err, doc) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

module.exports = router;
