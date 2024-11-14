import * as tweetRepository from '../data/tweet.js'
import { getSocketIo } from '../connection/socket.js'

// 해당 유저네임에 대한 트윗 가져오기
export async function getTweets(req, res) {
    const username = req.query.username
    const data = await (username ? tweetRepository.getAllByUsername(username): tweetRepository.getAll())
    res.status(200).json(data)
}

// 글 번호에 대한 트윗 가져오기
export async function getTweetById(req, res) {
    const id = req.params.id
    const tweet = await (tweetRepository.getById(id))

    if(tweet) {
        res. status(200).json(tweet)
    } else {
        res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
}

// 트윗을 생성하는 함수
export async function createTweet(req, res) {
    const {username, name, text} = req.body
    tweetRepository.createTweet(username, name, text)
    res.status(201).json(tweets)
    getSocketIo().emit('tweets', tweet)
}

// 트윗수정하기
export async function updateTweet(req, res) {
    const id = req.params.id
    const text = req.body.text
    const tweet = await tweetRepository.getById(id)
    if (!tweet) {
        return res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
    if (tweet.userId != req.userId) {
        return res.sendStatus(403)
    }

    const updated = await tweetRepository.updateTweet(id, text)
    res. status(200).json(tweet)
}

// 트윗 삭제하기
export async function deleteTweet(req, res, next) {
    const id = req.params.id
    const tweet = await tweetRepository.getById(id)
    if (!tweet) {
        return res.status(404).json({message: `${id}의 트윗이 없습니다.`})
    }
    if (tweet.userId != req.userId) {
        return res.sendStatus(403)
    }
    
    await tweetRepository.removeTweet(id)
    res.sendStatus(204)
}