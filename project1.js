let users=[
   {
    name: "Amisha Rathore",
    pic: "https://i.pinimg.com/736x/ad/c8/ea/adc8ea84164310621bdb7cf59114f5ca.jpg",
    bio: "Silent chaos in a loud world | Not for everyone",
},
{
    name: "Aarav Mehta",
    pic: "https://plus.unsplash.com/premium_photo-1734603746596-618973e5efa5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=740",
    bio: "Dreamer | Coffee & late-night code | Keeping it real",
},
{
    name: "Kiara Sharma",
    pic: "https://i.pinimg.com/736x/79/58/e4/7958e47df0e9ebb0ff5e66df41a53bf6.jpg",
    bio: "Sunset soul with a midnight mind 🌙",
},
{
    name: "Vivaan Kapoor",
    pic: "https://i.pinimg.com/736x/0a/a8/d9/0aa8d9c4f84d52627b0b0e883c410488.jpg",
    bio: "Minimal thoughts | Maximum vibe",
},
{
    name: "Riya Sen",
    pic: "https://i.pinimg.com/736x/6e/f1/39/6ef1398c050bcf40c406a48e22952448.jpg",
    bio: "Lost between playlists and poetry 🎧",
},
{
    name: "Ishaan Verma",
    pic: "https://i.pinimg.com/736x/75/02/f2/7502f2f46f570850160ddde17dc5743b.jpg",
    bio: "Silence speaks louder than my words.",
},
{
    name: "Tanya Chauhan",
    pic: "https://i.pinimg.com/736x/e5/a1/f6/e5a1f697969cd83df5f215604ed65350.jpg",
    bio: "Art, coffee & a hint of mystery ☕🎨",
},
{
    name: "Dev Khanna",
    pic: "https://i.pinimg.com/736x/d4/ba/e7/d4bae71775009a3417727a85299997c9.jpg",
    bio: "Wandering through pixels and thoughts 💭",
}

]
// Create main container
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

// Create one search box (only once)
const inputBox = document.createElement("input");
inputBox.classList.add("search-box");
inputBox.type = "text";
inputBox.placeholder = "Search...";
mainContainer.appendChild(inputBox);

// Create one container for all cards
const cardContainer = document.createElement("div");
cardContainer.classList.add("cards");
mainContainer.appendChild(cardContainer);

// Add main container to body
document.body.appendChild(mainContainer);

// Function to show users
function showUsers(userArray) {
  cardContainer.innerHTML = ""; // Clear old cards
  userArray.forEach((user) => {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage=`url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create heading and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append content inside card
    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    cardContainer.appendChild(card);
  });
}
    
// Initial display
showUsers(users);

// Filter search
inputBox.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(val)
  );
  showUsers(filtered);
});
    
