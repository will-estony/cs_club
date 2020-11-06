function changeList(){

    var songList = ['Song1', 'Song2', 'Song3', 'Song4', 'Song5'];
    var artistList = ['Artist1', 'Artist2', 'Artist3', 'Artist4', 'Artist5'];

    var list = document.getElementById("list").getElementsByTagName('li');

    if (document.getElementById('header').innerHTML == 'My favorite artists'){ //compare the two values with ==
        document.getElementById('header').innerHTML = 'My favorite songs'; //set the value on the left to the value on the right with =

        // In computer science we start counting from 0.
        for (i = 0; i < list.length; i++){
            list[i].innerHTML = songList[i]
        }

    }else if(document.getElementById('header').innerHTML == 'My favorite songs'){
        document.getElementById('header').innerHTML = 'My favorite artists';

        // In computer science we start counting from 0.
        for (i = 0; i < list.length; i++){
            list[i].innerHTML = artistList[i]
        }
    }
}