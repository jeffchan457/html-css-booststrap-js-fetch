window.onload = () => {

    let btnGetImages = document.getElementById("btn-get-images");
    if (btnGetImages) {
        btnGetImages.addEventListener("click", onHandleGetImages);
    }
}


const onHandleGetImages = () => {
    setStatusMessage("Loading images...");
    
    fetchRequest = fetch("https://jsonplaceholder.typicode.com/photos");
    fetchRequest
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            loadAllImages(json);
        })
        .catch((error) => {
            console.log(error);
        })
}


const loadAllImages = (json) => {
    for (let i = 0; i < json.length; i++) {
        imageUrl = json[i]["thumbnailUrl"];
        title = json[i]["title"];

        createImage(i, imageUrl, title);
    }

    setStatusMessage("All images have been loaded");
}

const setStatusMessage = (msg) => {
    let status = document.getElementById("image-status");
    if (status) {
        status.innerHTML = msg;
    }
}

const createImage = (id, src, alt) => {
    //parentDiv = document.getElementById("div-images")   // this is the same as the line below
    let parentDiv = document.querySelector("#car-images-inner");
    if (parentDiv) {

        // create new div element
        let imageDiv = document.createElement("div"); // <div> </div>
        imageDiv.setAttribute("class", "carousel-item");

        // create new image element
        let newImage = document.createElement("img"); // <img />
        newImage.setAttribute("id", id);
        newImage.setAttribute("class", "d-block w-10 auto-margin");
        newImage.setAttribute("src", src);
        newImage.setAttribute("alt", alt);

        // add new image element to new div, and new div element to parent div
        imageDiv.appendChild(newImage);
        parentDiv.appendChild(imageDiv);
    }
}