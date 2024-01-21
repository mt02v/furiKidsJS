let showMap = () =>{
  let elem = document.querySelector('div');
  let chip = map[y][x];
  elem.innerHTML = '<img src="img/' + images[chip] + '.png"><img src="img/boy.png">';
}  ;
showMap();