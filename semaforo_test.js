var Semaforo =require("./semaforo");

var sem1 = new Semaforo((index) =>{
    console.log('Ultimo callback ubicado en la iteracion # '+ index);
});

for (var i = 0, l = 100; i < l; i++) {
    sem1.increment();
    var timeout = Math.floor(Math.random() * 1001);

    setTimeout(((_i) =>{
        return function(){
            sem1.execute(_i)
        };
    })(i), timeout);
}