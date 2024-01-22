let showMap = () =>{
  let elem = document.querySelector('div');
  let chip = map[y][x];
  elem.innerHTML = '<img src="img/' + images[chip] + '.png"><img src="img/boy.png">';
}  ;
showMap();
showMap();

document.addEventListener('keyup',(event) => {
  let keyname = event.key;
  console.log(keyname);
  let fname = images[map[x][y]];
  if(keyname == 'ArrowLeft'){
   if(fname.index0f('left') > -1){
    x -= 1;
  }
  } else if(keyname == 'ArrowRight'){
   if(fname.index0f('right') > -1){  
    x += 1;
  }
  } else if(keyname == 'ArrowUp'){
   if(fname.index0f('up') > -1){
    y -= 1;
  }
  } else if(keyname == 'ArrowDown'){
   if(fname.index0f('down') > -1){
    y += 1;
  }
}
  showMap()
}  );