const vetorJuros = new Array(7.1,10.9,14.7,18.6,22.5,26.5,30.5,34.6,38.7,42.9,47.1,51.4);
document.getElementById('calculate').addEventListener('click', function calcular(){
    const value = document.getElementById('value').value; 
    const parcela = document.querySelector('select').value;
    const fee = (vetorJuros[parcela-1])/100;
    //document.getElementById('total').innerHTML = (fee + "%");
    console.log(value, parcela, fee);
    const total = value * (1 + fee)**parcela;
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2));
})