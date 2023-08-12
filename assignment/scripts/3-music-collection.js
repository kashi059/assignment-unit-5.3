console.log('***** Music Collection *****')

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

console.log(collection);

function showCollection (collection) {
    for (let i=0; i < collection.length; ++i)
    console.log ('number of songs listed ' + collection.length)
    console.log(collection(i))
}