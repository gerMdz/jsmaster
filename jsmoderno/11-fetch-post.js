let new_post = {
    title: "Post Ger",
    body: "Contenido del post nuevo post",
    user_id: 55
}
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(new_post),
    headers: {
        "Content-Type":"application/json; charset=UTF-8"
    }
}).then(r => r.json() )
    .then(datos => console.log(datos))
