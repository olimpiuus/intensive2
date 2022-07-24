const restorant = 'food-band'

const renderItems = (data) => {
    console.log(data);
    data.forEach(element => {
        console.log(element);
    });
}

fetch(`https://onlineintensive-fooddelivery-default-rtdb.firebaseio.com/db/${restorant}.json`)
    .then((response) => response.json())
    .then((data) => renderItems(data))
    .catch((error) => console.log(error));