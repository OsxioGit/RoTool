//This is the Random UserID Generator.
setTimeout(UserIDGenerator, 0);
setTimeout(ReGenerate, 15000);

function UserIDGenerator() {
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
//'Y','X','V' and 'Z' are labels to view in the console.
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
//This script displays the user's link to the person using the program.
document.getElementById('Send1').innerHTML = Player
document.getElementById('Send2').innerHTML = Group
document.getElementById('Send3').innerHTML = Package
}

function ReGenerate() {
    location.reload();
}