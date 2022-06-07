const express = require('express');
const router = express.Router();


const { Like } = require("../models/like");
console.log(1)

router.get('/:issueId', (req, res) => {
    console.log(1)
    Like.find({ issue: req.params.issueId })
        .then((err, issues) => {
            if(err) return res.status(400).send(err)
            res.status(200).json(issues)
        })
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
