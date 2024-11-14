import express from 'express'
import tweetersRouter from './router/tweets.js';
import authRouter from './router/auth.js';
import { config } from './config.js';

const app = express()

app.use(express.json())

app.use('/tweets', tweetersRouter)
app.use('/auth', authRouter)


app.use((req, res, next) => {
    res.sendStatus(404)
})


// 포트를 8080을 쓰는 이유 => 리엑트 등등 다른 모듈을 쓸때 충돌을 방지하기 위해
app.listen(config.host.port)