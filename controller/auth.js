import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import { response } from 'express'
import jwt from 'jsonwebtoken'

const secret = 'abcdefg1234%^&*'

async function makeToken(id) {
    const token = jwt.sign({
            id : id,
            isAdmin : false
        },
        secret,
        {
            expiresIn: '1h'
        }
    )
}

// signup
export async function signup(req,res,next){
    const {username, password, name, email} = req.body
    const hashed = bcrypt.hashSync(password, 10)
    const users = await authRepository.createUser(username, hashed, name, email)
    if(users){
        res.status(201).json(users)
    }
}

// login
export async function login(req, res) {
    const {username, password} = req.body
    const user = await authRepository.findByUsername(username)
    if (!user) {
        res. status(401).json(`${username} 아이디를 찾을수 없음`)
    } else {
        if (bcrypt.compareSync(password, user.password)) {
            res.status(201).header('token', makeToken(username)).json(`${username}님 로그인 완료`)
        } else {
            res.status(404).json({message : `${username}님 아이디 또는 비밀번호 확인`})
        }
    }
}

// me
export async function verify(req, res, next) {
    const token = req.header['Token']
    if(token) {
        res.status(200).json(token)
    }
}