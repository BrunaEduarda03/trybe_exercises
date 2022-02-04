const valorCusto = 1 ,valorVenda = 3;

if(valorCusto > 0 && valorVenda > 0)
{
    let valorCustoTotal = (1.2 + valorCusto);
    let lucro = (valorVenda - valorCustoTotal )*1000;
    console.log("Lucro : ", lucro);
}
    else
        console.log("ERROR! Os valores não podem ser negativos");

