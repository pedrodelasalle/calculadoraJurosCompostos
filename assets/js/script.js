const vetorJuros = new Array(9.90, 11.90, 13.90, 15.90, 17.90, 19.90, 21.90, 23.90, 25.90, 27.90, 29.90, 19.90);
document.getElementById('calculate').addEventListener('click', function calcular(){
    const value = document.getElementById('value').value; 
    const parcela = document.querySelector('select').value;
    const fee = (vetorJuros[parcela-1])/100;
    
    const total = value/(1 - fee);
    const parcelas = total/parcela;

    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2));
    document.getElementById('parcelas').innerHTML = ("R$" + parcelas.toFixed(2));
})
