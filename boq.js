let button = document.getElementById("btn");
let div1 = document.getElementById("div1");

button.addEventListener("click", function() {
    div1.innerHTML = ""; // Clear previous images

    let numberInput = document.getElementById("numberInput").value;
    let inputValue = Number(numberInput);

    for (let i = 1; i <= inputValue; i++) {
        let img = document.createElement("img");
        img.className = "pic";
        img.src = 'https://media2.giphy.com/avatars/spacehooters/GjliSi83qtYh.gif';
        img.style.left = `${Math.random() * (div1.clientWidth - 50)}px`; // Random left position within #div1 width
        img.style.setProperty('--random-x', `${Math.random() * 100 - 50}px`); // Random horizontal offset at the end
        img.style.setProperty('--random-y', `${Math.random() * 100}px`); // Random vertical offset at the end
        img.style.animationDelay = `${i * 0.5}s`; // Staggered animation delay
        div1.appendChild(img); // Append to div1 to stay within horizontal bounds
    }
});
