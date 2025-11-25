export default function login(){
    return `<form action="/submit" method="post">
        <input type="text" name="email" id="">
        <br><br>
        <input type="text" name="password" id="">
        <br><br>
        <button>submit</button>
    </form>`
} 