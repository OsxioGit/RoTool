//Refresh Timer
setTimeout(ReGenerate, 5000);

//Variable Chart
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
console.log('PlayerId: '+ XYZ)
console.log('GroupId: '+ ZYX)
console.log('BundleId: '+ ZZZ)
console.log(Player)
console.log(Group)
console.log(Package)

//This script displays the user's link to the person using the program.
document.getElementById('Send1').innerHTML = Player
document.getElementById('Send2').innerHTML = Group
document.getElementById('Send3').innerHTML = Package

//Button Functions
function Open(){
    window.open(Player)
}
function Open2(){
    window.open(Group)
}
function Open3(){
    window.open(Package)
}

//This regenerates links
function ReGenerate() {
location.reload();
}
