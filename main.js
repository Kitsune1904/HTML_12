const container = document.getElementById("container");
const firstPhrase = prompt("Write your first phrase, pls.");
const secondPhrase = prompt("Write your second phrase, pls.");
const thirdPhrase = prompt("Write your third phrase, pls.");
const number = prompt("Please write number which will consist of 5 digits");

container.innerHTML = 
`
    <p>Your phrases is: ${firstPhrase + ", " + secondPhrase + ", " + thirdPhrase}</p> 
    <p>Your splited numbers: ${number.split("").join(" ")}</p>
`;
