let users = [
    {
        id: '1',
        username: 'apple',
        password: '1111',
        name: '김사과',
        email: 'apple@apple.com',
        url: ''
    },
    {
        id: '2',
        username: 'banana',
        password: '2222',
        name: '반하나',
        email: 'banaan@banana.com',
        url: ''
    },
    {
        id: '3',
        username: 'orange',
        password: '3333',
        name: '오렌지',
        email: 'orange@orange.com',
        url: ''
    },
]

export async function signup(requestBody) {
    users = [{
        id: 4,
        username: requestBody.username,
        password: requestBody.password,
        name: requestBody.name,
        email: requestBody.email,
        url: requestBody.url,
        }, 
        ... users 
    ]
    return users[0]
}

export async function isLogin(requestBody) {
    const {inputId, inputPw} = requestBody
    for (let user in users){
        if (user.id == inputId && user.password == inputPw) {
            return true
        }
    }
    return false   
}