console.log('***** Music Collection *****')

 let collection = []

 function addToCollectiom(title,artist,year,tracks){
    let newThing = {title: title, artist: artist, year: year, tracks: [tracks]};
    collection.push(newThing)

}

addToCollectiom('jireh', 'maverlick city', '2020', {name:'jireh', Duration:20});
addToCollectiom('yahweh', 'all nation', '2021', {name:'yahweh', Duration:12});
addToCollectiom('jesus in the room', 'maverlick city', '2021', {name:'jesus in the room', Duration:10});
addToCollectiom('to worship you i live', 'maverlick city', '2019', {name:'to worship you i live', Duration:8});
addToCollectiom('jesus at the center', 'maverlick city', '2020', {name:'jesus at the center', Duration:7});
addToCollectiom('reckless love', 'maverlick city', '2021', {name:'reckless', Duration:16});


console.log(collection);
console.log(addToCollectiom());



function showColletion(array){
for(let i=0; i<collection.length; i++){
    if(collection[i]=== array){
        return array;
    }
    console.log(collection[i].title,'by',collection[i].artist,'Publish',collection[i].year);
}

}

console.log(showColletion());

function findByArtist(artist){
    let answer =[];
    for(i=0; i<collection.length; i++){
        if(collection[i].artist === artist) {
        answer.push(collection[i]);
        }
    }
    console.log(answer.length);
    return answer;

}
console.log(findByArtist('all nation'));
console.log(findByArtist('gabriel'));






function search(criteria){
    let array = [];
    for(let i=0; i<collection.length; i++){
    if(collection[i].title === criteria || collection[i].artist === criteria || collection[i].year === criteria){
    array.push(collection[i]);
        
        }
    }
    console.log(array.length);
    return array;
}
console.log(search('2020'));

function albumCollection(){
    
    for(let i =0; i<collection.length; i++){
        for(album of collection ){
            for(track of album.tracks){
                console.log(track);
                
            }
             
        }
    }
}
console.log(albumCollection());


    

