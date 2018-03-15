const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res, next) => {
    let url = "";
    // let creatorMap = {
    //   "Test Justin": "Set Status"
    // };
    // console.log("I AM THE RESPONSE");
    // console.log(res);
    // request.post(url, {creatorMap}, (err, resp, body) => {
    //   const data = JSON.parse(body);
    //   url = 'https://www.googleapis.com/plus/v1/people/me';
    //   const access_token = data.access_token;
    //   const options = {
    //     method: 'GET',
    //     url,
    //     headers: { 'Authorization' : `Bearer ${access_token}`}
    //   }
    res.json({data: "This is Justins API"});
});

// router.get('/', (req, res, next) => {
//   member.findOne({_id: req.query.profileId}, (err, profileData) => {
//     // console.log(profileData);
//     res.json({data: profileData});
//   })
// });

// router.post('/game', (req, res, next) => {
//   console.log('TESTING FORM SUBMISSION')
//   member.findOne({email: req.body.email}, (err, profile) => {
//     console.log(profile)
//     if(req.body.bucketOne.playerAnswer === req.body.bucketOne.value &&
//       req.body.bucketTwo.playerAnswer === req.body.bucketTwo.value &&
//       req.body.bucketThree.playerAnswer === req.body.bucketThree.value){

//         let gameRecordResults = {
//           submittedAnswers: [req.body.bucketOne.playerAnswer, req.body.bucketTwo.playerAnswer, req.body.bucketThree.playerAnswer],
//           correctAnswers: [req.body.bucketOne.value, req.body.bucketTwo.value, req.body.bucketThree.value],
//           result: 'Win'
//         }
//         profile.score.gameRecords.push(gameRecordResults);
//         profile.score.gamesPlayed += 1;
//         profile.score.gamesWon += 1;
//         profile.save();
//         res.json({data: {
//           header: `GREAT JOB, ${profile.fullName}`,
//           cont: 'You were right!!! You Won!!!',
//           bckImage: '../assets/wallpapers/peaceful.jpg',
//           color: 'white'
//         }})
//     } else {
//       let gameRecordResults = {
//         submittedAnswers: [req.body.bucketOne.playerAnswer, req.body.bucketTwo.playerAnswer, req.body.bucketThree.playerAnswer],
//         correctAnswers: [req.body.bucketOne.value, req.body.bucketTwo.value, req.body.bucketThree.value],
//         result: 'Loss'
//       }
//       profile.score.gameRecords.push(gameRecordResults);
//       profile.score.gamesPlayed += 1;

//       profile.save();
//       res.json({data: {
//         header: 'TOO BAD, WHOEVER YOU ARE',
//         cont: 'You were wrong!!! Try Again!!!',
//         bckImage: '../assets/wallpapers/flames.jpeg',
//         color: 'black'
//       }});
//     }
//   })

// })

module.exports = router
