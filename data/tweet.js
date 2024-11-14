let tweets = [
    {
        tweetId:'1',
        userId: '1',
        text:'안녕하세요',
        createdAt: Date.now().toString(),
    },
    {
        tweetId:'2',
        userId: '2',
        text:'반갑습니다.',
        createdAt: Date.now().toString(),
    },
    {
        tweetId:'2',
        userId: '1',
        username:'orange',
        text:'첫 트윗',
        createdAt: Date.now().toString(),
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
export async function getById(id) {
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

