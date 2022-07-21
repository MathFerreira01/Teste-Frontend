const div = document.querySelector('#list')

function getApiGitHub() {
  fetch('https://api.github.com/search/repositories?q=dnit')
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()
      
      data.items.map(item => {
        let p = document.createElement('p')

        p.innerHTML = `
        <div>
            <h2>${item.full_name}</h2>
        </div>
        <div>
            <strong>${item.description}</strong>
        </div>
        <div>
            <span>Login: ${item.owner.login}</span>
        </div>
        <div>
          <img src="${item.owner.avatar_url}"></img>
        </div>
      `
      div.appendChild(p)

      })

    }).catch(e => console.log(e))
}

getApiGitHub()

