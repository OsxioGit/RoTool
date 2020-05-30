//These are the timers.
setTimeout(UserIDGenerator, 0);
setTimeout(ReGenerate, 15000);

//Main Script
function UserIDGenerator() {


//Random Username GeneratorBoard
let board = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K"
,"L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5",
"6","7","8","9"]

//Password GeneratorBoard
let board2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K"
,"L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5",
"6","7","8","9","_","-","$","@","&","#","(",")","!","^",",","}","{","["
,"]","=","?","."]

//Random Username Generator
let RanUser = 
board[Math.floor(Math.random()*board.length)] + 
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] +
board[Math.floor(Math.random()*board.length)] ;

//Random Password Generator
let RanPass = 
board2[Math.floor(Math.random()*board2.length)] + 
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] + 
board2[Math.floor(Math.random()*board2.length)] + 
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] + 
board2[Math.floor(Math.random()*board2.length)] + 
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] +
board2[Math.floor(Math.random()*board2.length)] ;

//This is the variable chart
let X = Math.floor(Math.random() * 10) + 1  
let Y = Math.floor(Math.random() * 10) + 1  
let Z = (X * Y)
let V = (Z * X)
let XYZ = (V * 1256)
let ZZX = (XYZ * Math.floor(Math.random() * 3000) + 1 )
let ZYX = (Y * 123 * X * Math.floor(Math.random() * 250) + 1 )
let ZZZ = (Math.floor(Math.random() * 70) + 1 * Math.floor(Math.random() * 70) + 1 * X * Y * Math.floor(Math.random() * 11) + 1)
let Player = ("https://www.roblox.com/users/" + ZZX + "/profile")
let Group = ("https://www.roblox.com/groups/" + ZYX)
let Package = ("https://www.roblox.com/bundles/" + ZZZ)

//This logs the variables in the console
console.log('X '+ X)
console.log('Y '+ Y)
console.log('Z '+ Z)
console.log('V '+ V)
console.log('PlayerId: '+ XYZ)
console.log('GroupId: '+ ZYX)
console.log('BundleId: '+ ZZZ)
console.log(Player)
console.log(Group)
console.log(Package)
console.log(RanUser)

//This script displays the user's link to the person using the program.
document.getElementById('Send1').innerHTML = Player
document.getElementById('Send2').innerHTML = Group
document.getElementById('Send3').innerHTML = Package
document.getElementById('Send4').innerHTML = RanUser
document.getElementById('Send5').innerHTML = RanPass
}

//This regenerates links
function ReGenerate() {
location.reload();
}
