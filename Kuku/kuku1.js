let html = "";
for(let y = 1; y <= 99; y += 1){
  html += '<tr>';
  for(let x = 1; x <= 99; x += 1){
    html += '<td>' + x * y + '</td>';
  }
  html += '</tr>';
}
let elem = document.querySelector('table');
elem.innerHTML = html;