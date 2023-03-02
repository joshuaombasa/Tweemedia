import { tweetsData } from './data.js'
// import { v4 as uuidv4 } from 'uuid';

const container = document.getElementById("container")
const postTextAreaInput = document.getElementById("post-text-area")
const tweetBtn  =document.getElementById("tweet-btn")
let targetObj = []
let eventId = ''

tweetBtn.addEventListener('click', createNewPost)

function createNewPost() {
    const newUserData = {
        handle: `@EngOMBASA ✅`,
        profilePic: `images/ombasa.jpg`,
        likes: 67,
        retweets: 4,
        tweetText: postTextAreaInput.value,
        replies:[],
        isLiked: false,
        isRetweeted: false,
        uuid: '123456th5j6ujuyj56rttrj'
    }
    tweetsData.unshift(newUserData)
    postTextAreaInput.value = ''
    
    render()
}

container.addEventListener('click', (e) => {
    eventId = e.target.id
    targetObj = tweetsData.filter((tweet) => {
        if (tweet.uuid === e.target.id) {
            return tweet
        }
    })[0]
    
    if (e.target.dataset.retweet === "retweet") {
        handleRetweets()
    } else if (e.target.dataset.like === "heart") {
        handleLikes()
    }
    
    
    render()
})

function handleLikes() {
    if (!targetObj.isLiked) {
        targetObj.likes  ++
        document.querySelector('[data-like="heart"]').classList.add("liked")
        console.log(document.querySelector('[data-like="heart"]').classList)
    } else {
        targetObj.likes  -- 
    }

    targetObj.isLiked = !targetObj.isLiked
}


function handleRetweets() {
    if (!targetObj.isRetweeted) {
        targetObj.retweets ++

    } else {
        targetObj.retweets --
        
    }

    targetObj.isRetweeted = !targetObj.isRetweeted
}

function render() {
    let usersHtml = ''
    tweetsData.forEach((tweet) => {
        usersHtml += 
        `<div class="users-container" id="users-container">
             <img src="${tweet.profilePic}" alt="" class="user-profile-img" id="user-profile-img">
            <div class="user-data" id="user-data">
                <p class="user-name" id="user-name">${tweet.handle}</p>
                <p class="user-post" id="user-post">${tweet.tweetText}</p>
                <div class="post-stats" id="post-stats">

                      <P class="stats-text-styling"><i class="fa-solid fa-comment"></i>${tweet.replies.length}</P>
                      <P class="stats-text-styling"><i class="fa-solid fa-heart" id="${tweet.uuid}" data-like="heart"></i>${tweet.likes}</p>
                      <p class="stats-text-styling"><i class="fa-solid fa-retweet" data-retweet="retweet" id="${tweet.uuid}"></i>${tweet.retweets}</p>
                      
                </div>
            </div>
        </div>
        `
    });
    container.innerHTML = usersHtml
}

render()