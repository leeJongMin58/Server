import * as authRepository from '../data/auth.js'

// signup
export async function signup(req, res) {
    const user = await authRepository.signup(req.body)
    res.status(200).json(user)
}

// login
export async function login(req, res) {
    const isLogin = await authRepository.isLogin(req.body)
    if (isLogin) {
        res. status(201).json({messae : '로그인에 성공하였습니다.'})
    } else {
        res. status(400).json({messae : 'ID와 PW를 확인하세요.'})
    }
}