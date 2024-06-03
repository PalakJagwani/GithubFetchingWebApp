document.getElementById('form').addEventListener('submit', ((e) => {
    findUser(e);
    document.getElementById('search-user').value = ""
}))

let followers = document.querySelector('#followers');
let following = document.querySelector('#following');
let avatar = document.querySelector('#avatar');
let error = document.querySelector('#err');

const findUser = (e) => {
    e.preventDefault();
    const user = document.getElementById('search-user').value;
    console.log(user)

    fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        followers.innerHTML = data.followers || data.followers == 0 ? "Followers = " + data.followers : "" 
        following.innerHTML = data.following || data.following == 0 ? "Following = " + data.following : ""   
        avatar.src = data.avatar_url ? data.avatar_url : ""
        error.innerHTML = data.message ?  data.message : ""
    })
    .catch((err) => {
        error.innerHTML = err.message
    })

}