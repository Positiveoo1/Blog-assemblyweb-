// this is getting buttons
const buttons = document.getElementsByTagName("button");

// this for loop gets length of buttons and this works each of them i mean alert
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    alert("clicked");
  });
}