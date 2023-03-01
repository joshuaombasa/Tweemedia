import { tweetsData } from './data.js'

const container = document.getElementById("container")
let targetObj = []
container.addEventListener('click', (e) => {
    targetObj = tweetsData.filter((tweet) => {
        if (tweet.uuid === e.target.id) {
            return tweet
        }
    })[0]
    
    handleLikes()
    handleRetweets()
    
    render()
})

function handleLikes() {
    if (!targetObj.isLiked) {
        targetObj.likes  ++
    } else {
        targetObj.likes  -- 
    }

    targetObj.isLiked = !targetObj.isLiked
}


function handleRetweets() {
    if (!targetObj.isRetweeted) {
        targetObj.retweets ++

    } else {
        targetObj.retweets ++
        
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
                      <i class="fa-solid fa-comment stats-text-styling" id="${tweet.uuid}">${tweet.replies.length}</i>
                      <i class="fa-solid fa-heart stats-text-styling" id="${tweet.uuid}">${tweet.likes}</i>
                      <i class="fa-solid fa-retweet stats-text-styling" id="${tweet.uuid}">${tweet.retweets}</i>
                </div>
            </div>
        </div>
        `
    });
    container.innerHTML = usersHtml
}

render()