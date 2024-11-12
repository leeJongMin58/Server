import express from 'express';

const router = express.Router()

let tweets = [
    {
        id:'1',
        name:'김사과',
        username:'apple',
        text:'안녕하세요',
        createdAt: Date.now().toString(),
        url:'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    },
    {
        id:'2',
        name:'반하나',
        username:'banana',
        text:'반갑습니다.',
        createdAt: Date.now().toString(),
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpT8yRTTzT0wwt-K19TAywSRUT8NUmmPA5g&s'
    },
    {
        id:'3',
        name:'오렌지',
        username:'orange',
        text:'첫 트윗',
        createdAt: Date.now().toString(),
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwYMuvhufPTEWql7YBJJBYx1Bp9xYwgYFtA&s'
    }
]



// 해당 id에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username
    const data = username ? tweets.filter((tweet) => tweet.username == username): tweets
    res.status(200).json(data)
})

// 글 번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', (req, res, enxt) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet) {
        res. status(200).json(tweet)
    } else {
        res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
})

// 트윗하기
// POST
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력
router.post('/', (req, res, next) => {
    const {username, name, text} = req.body
    const tweet = {
        id: '4',
        username: username,
        name: name,
        text: text,
        createdAt: Date.now().toString(),
    }
    tweets = [tweet, ... tweets]
    res.status(201).json(tweets)
})

// 트윗하기 수정하기
// PUT
// http://127.0.0.1:8080/tweets/id
// json 형태로 입력 후 추가된 데이터 까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if (tweet) {
        tweet.text = req.body.text
        res. status(200).json(tweet)
    } else {
        res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
})

// 트윗하기 삭제하기
// DELETE
// http://127.0.0.1:8080/tweets/id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    const tweet = tweets.find((tweet) => tweet.id === id)
    if (tweet) {
        tweets = tweets.filter(item => item != tweet)
        res.status(204)
    } else {
        res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
})


export default router