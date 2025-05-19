var password = "Antonjam13";
let user_name = prompt("Enter your username");
let user_password = prompt("Enter your password");

if(user_password === password){
    alert(`Welcome ${user_name}`);
}else{
    alert("Maybe Username or Password is Invalid or Does not Match");
}
