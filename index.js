import { tweetsData } from './data.js'

const container = document.getElementById("container")

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
                      <i class="fa-solid fa-comment"><span class="stats-text-styling">${tweet.replies.length}</span></i>
                      <i class="fa-solid fa-heart"><span class="stats-text-styling">${tweet.likes}</span></i>
                      <i class="fa-solid fa-retweet"><span class="stats-text-styling">${tweet.retweets}</span></i>
                </div>
            </div>
        </div>
        `
    });
    container.innerHTML = usersHtml
}

render()