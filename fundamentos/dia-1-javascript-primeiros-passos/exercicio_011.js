const salarioBruto = 3000.00;
let INSS;
let impostoDeRenda;

if(salarioBruto <= 1556.94)
{
    INSS = salarioBruto * 0.08;
    
}
else if(salarioBruto <= 2594.92)
{
    INSS = salarioBruto * 0.09;
}
else if(salarioBruto <= 5189.82)
{
    INSS = salarioBruto * 0.11;
}
else
{
    INSS = 570.88;
}

const salarioBase = (salarioBruto - INSS);

if(salarioBase <= 1903.98)
{
    impostoDeRenda = 0;
    salarioLiquido = salarioBase - impostoDeRenda;
    console.log("\n ISENTO DE IMPOSTO DE RENDA\n");
}
else if(salarioBase <= 2826.65)
{
    impostoDeRenda = ((salarioBase*0.075) - 142.80)
    salarioLiquido =salarioBase - impostoDeRenda;
}
else if(salarioBase <= 3751.05)
{
    impostoDeRenda = ((salarioBase*0.15) - 354.80)
    salarioLiquido =salarioBase - impostoDeRenda;
}
else if(salarioBase <= 4664.68)
{
    impostoDeRenda = ((salarioBase*0.225) - 636.13)
    salarioLiquido =salarioBase - impostoDeRenda;
}
else
{
    impostoDeRenda = ((salarioBase * 0.275) - 869.36)
    salarioLiquido =salarioBase - impostoDeRenda;
}
console.log("Salario Líquido: ",salarioLiquido);
