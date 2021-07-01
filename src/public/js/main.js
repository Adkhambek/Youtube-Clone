async function renderUsers(){
  const users = await request('/api/users', 'GET')
  const ul = document.createElement('ul')
  ul.setAttribute('class', 'sidebar__list')
  let li = ''
  for (const user of users) {
    li += `
          <li data-id="${user.id}" class="sidebar__item">
              <div class="avatar_box">
                <img src="/profile/${user.imgName}" alt="profile" class="avatar">
              </div>
              <h3 class="sidebar__username">${user.username}</h3>
          </li>
    ` 
  }
  ul.innerHTML = li
  sidebar.appendChild(ul)

  const sidebarItems = document.querySelectorAll('.sidebar__item')
  sidebarItems.forEach( user => {
      user.addEventListener('click', e => {
         const userId = user.dataset.id - 0
         videoContainer.innerHTML = null
         renderVideo(userId)
         sidebarItems.forEach( user => {
           user.classList.remove('active')
         })
         user.classList.add('active')
         
      })
  });
  
}

async function renderVideo(userId){
  const videos = await request('/api/videos/'+userId, 'GET')
  const users = await request('/api/users', 'GET')
  const user = users.find(check => check.id == userId)
  console.log(users);
  const ul = document.createElement('ul')
  ul.setAttribute('class', 'videos__list')
  let li = ''
  for (const video of videos) {
    li += `
    <li class="video">
    <video width="320" height="200" controls>
      <source src="/videos/${video.videoName}" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
    </video>
    <div class="video__details">
      <div class="author">
        <img src="/profile/${user.imgName}" alt="" />
      </div>
      <div class="title">
        <h3>
          ${video.title}
        </h3>
        <div class="subtitle">
          <div>
            <p>${user.username}</p>
            <time>2021/7/1 | 18:00</time>
          </div>
          <a href="/videos/${video.videoName}" download>
            <i class="download material-icons">file_download</i>
          </a>
        </div>
      </div>
    </div>
  </li> 
    ` 
  }
  ul.innerHTML = li
  videoContainer.appendChild(ul)
}




renderUsers()
