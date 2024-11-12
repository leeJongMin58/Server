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

// 모든 트윗을 리턴
export async function getAll() {
    return tweets
}

// username에 대한 트윗을 리턴
export async function getAllByUsername(username) {
    return tweets.filter((tweet) => tweet.username == username)
}

// id에 대한 트윗을 리턴
export async function getAllById(id) {
    return tweets.find((tweet) => tweet.id === id)
}

// 새로운 트윗 작성
export async function createTweet(username, name, text) {
    const tweet = {
        id: '4',
        username: username,
        name: name,
        text: text,
        createdAt: Date.now().toString(),
    }
    tweets = [tweet, ...tweets]
    return tweet
}

export async function updateTweet(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet) {
        tweet.text = text
    }
    return tweet
}

// 트윗을 삭제
export async function removeTweet(id) {
    tweets = tweets.fill((tweet) => tweet.id !== id)
}

