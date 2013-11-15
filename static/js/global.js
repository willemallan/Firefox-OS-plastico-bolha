function geraBolhas(){
    var ul = document.getElementById('bubble-background');

    for(var i=0; i<25; i++){
        li = document.createElement('li');
        li.classList.add('bubble');
        ul.appendChild(li);
    }
}
geraBolhas();

var rand2 = function(){
    return(Math.floor(Math.random() * 2) +1);
}

var rand4 = function(){
    return(Math.floor(Math.random() * 4) +1);
}

function estourar() {
    if( this.classList.length > 1 ){
        if( this.classList[1] != 'active1' && this.classList[1] != 'active2' && this.classList[1] != 'active3' && this.classList[1] != 'active4' ){
            document.getElementById('audio' + rand2()).play();
            this.classList.add('active' + rand4());
        }
    } else {
        document.getElementById('audio' + rand2()).play();
        this.classList.add('active' + rand4());
    }
}

function restaurar() {
    var bolha = document.getElementsByClassName('bubble');
    for(var i=0; i<bolha.length; i++){
        bolha[i].classList.remove('active1');
        bolha[i].classList.remove('active2');
        bolha[i].classList.remove('active3');
        bolha[i].classList.remove('active4');
    }
}

var bolha = document.getElementsByClassName('bubble');
for(var i=0; i<bolha.length; i++){
    bolha[i].addEventListener('click', estourar);
}

document.getElementById('limpar').addEventListener('click', restaurar);
