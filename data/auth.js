let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$FtnVIjCnuBfMqv9j7SKWYeNzyNRDlVT/A2vUXBB7bCgrQSR1Ghj2K',
        name: '김사과',
        email: 'apple@apple.com',
        url: ''
    },
    {
        id: '2',
        username: 'banana',
        password: '$2b$10$L6Fma/uIZ63U5uLvwobkaunY/KBo6Ogo5At7ImQ6tTgZ2smTsCuTu',
        name: '반하나',
        email: 'banaan@banana.com',
        url: ''
    },
    {
        id: '3',
        username: 'orange',
        password: '$2b$10$qcskHk17/QBS07zfs3gA0eklm2RP2hKU5G8onOnvjhu6YxzwiGnca',
        name: '오렌지',
        email: 'orange@orange.com',
        url: ''
    },
]

export async function createUser(username, password, name, email){
    const user = {
        id: '4',
        username,
        password,
        name,
        email,
        url:'https://aws-cdn.peanutoon.com/POCSTORAGE3/compression/jpeg/comic/4049/60644/EPI_COVER_IMG_060644_20191103_080656_143.jpeg'
    }
    users = [user, ...users]
    return user
}

export async function findByUsername(username) {
    const user = users.find((user)=> user.username === username)
    return user
}

export async function isLogin(username, hashedPW) {
    for (let user in users){
        if (user.id == username && user.password == hashedPW) {
            return true
        }
    }
    return false   
}

export async function findById(id) {
    return users.find((user) => user.id === id)
}
