const vetorJuros = new Array(5.0, 6.7,8.3,9.9,11.5,13.1,15.3,16.9,18.6,20.3,22.0,23.4);
document.getElementById('calculate').addEventListener('click', function calcular(){
    const value = document.getElementById('value').value; 
    const parcela = document.querySelector('select').value;
    const fee = (vetorJuros[parcela-1])/100;
    //document.getElementById('total').innerHTML = (fee + "%");
    console.log(value, parcela, fee);
    const total = value * (1 + fee)**parcela;
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2));
})