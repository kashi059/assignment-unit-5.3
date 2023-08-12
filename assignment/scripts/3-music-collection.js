console.log('***** Music Collection *****')
//here we are creating adding and pushing items to the array collection
let collection = [];
function addToCollection ('Title', 'Artist', 'Year Published') {
    collection.push('Title', 'Artist', 'Year Published')
    return true
}
addToCollection ('LET IT RAIN', 'Leven Kali', '2022');
addToCollection ('Part Of Me', 'Nia Archieves', '2022');
addToCollection ('Whats Next', 'Austin Millz, Pell', '2022');
addToCollection ('Got Time For Me', 'Jamie Jones, Channel Tres', '2023');
addToCollection ('Little Things', 'Jorja Smith', '2023');
addToCollection ('Nobody But You', 'Sonder, Jorja Smith', '2021');
//end addToCollection section

//here we are just logging out the collection information
console.log(collection);

//begin showCollection section
function showCollection (collection) {
    for (let i=0; i < collection.length; ++i)
    console.log ('number of songs listed ' + collection.length)
    console.log(collection(i(0)) + " by " + collection (i(1)) + " published in "collection (i(2)));
}

showCollection();
//end showCollection section


//begin search by artist section
let artistsListed = [];

function findByArtist ("Artist") {
    for (let i=0; i < collection.length; ++i)
    artistsListed.push(collection(i(1)))
}
console.log(artistsListed);
//end search by artist section
