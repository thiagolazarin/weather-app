async function initTempo(){

    const name = document.getElementById('name').value;
    const estado = document.getElementById('estado').value;
    const arrayInput = document.getElementById('array')
    const imgElement = document.getElementById('img')
    
    let array = []
    let img = []
    
    const url = `https://api.hgbrasil.com/weather?key=774ec09e&format=json-cors&city_name=${name},${estado}`

    const dados = await fetch(url)
    const endereco = await dados.json();
    console.log(endereco)

    array = endereco['results']['forecast']
    img = endereco['results']['forecast']

    arrayInput.innerHTML = ''
    imgElement.innerHTML = ''

    for(let i=0; i<array.length; i++){
        arrayInput.innerHTML += `<div id="container-dias">
        <p>${array[i].max} ${array[i].min}</p>
        <p> ${array[i].weekday}</p>
        </div>`
    }

    for(let i=0; i<img.length; i++){
        console.log(img[i].description)
        if(img[i].description == "Tempo limpo"){    
            imgElement.innerHTML += `<img src="./assets/sun.png" alt="sun">`
        } else if(img[i].description == "Tempo nublado"){
            imgElement.innerHTML += `<img src="./assets/clouds.png" alt="clouds">`
        } else if(img[i].description == "Chuva" || "Chuva esparsas"){
            imgElement.innerHTML += `<img src="./assets/storm.png" alt="storm">` 
        }
    }
    
}


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();


document.getElementById('btn').onclick = initTempo;





