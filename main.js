let libros = ["Sofia","David","Juan"];

// divAlert.innerHTML+="<li>"+libros[0]+"</li>";
// divAlert.innerHTML+="<li>"+libros[1]+"</li>";
// divAlert.innerHTML+="<li>"+libros[2]+"</li>";

divAlert.innerHTML+="Parte 1<ol><li>"+libros[0]+"</li>"
+"<li>"+libros[1]+"</li>"
+"<li>"+libros[2]+"</li></ol><br>"   

libros.push("Sara");
libros.push("Agustin");
libros.shift("Sofia");

divAlert.innerHTML+="Parte 2<li>"+libros[0]+"</li>";
divAlert.innerHTML+="<li>"+libros[1]+"</li>";
divAlert.innerHTML+="<li>"+libros[2]+"</li>";
divAlert.innerHTML+="<li>"+libros[3]+"</li> <br>";

libros.push("Elena");
libros.splice(1, 0, 'Renata');

divAlert.innerHTML+="Parte 3<li>"+libros[0]+"</li>";
divAlert.innerHTML+="<li>"+libros[1]+"</li>";
divAlert.innerHTML+="<li>"+libros[2]+"</li>";
divAlert.innerHTML+="<li>"+libros[3]+"</li>";
divAlert.innerHTML+="<li>"+libros[4]+"</li>";


console.log('****************Ejercicio 2****************');
for (let x = 1; x <= 5; x++) {
    let dibujo = "";
    for (let y = 1; y <= x; y++) {
        dibujo += "* ";
    }
    console.log(dibujo);}

console.log('****************Ejercicio 3 parte 1****************');
xValue=10;
while (xValue>0) {
    console.log(xValue);
    xValue-=0.5;
}

console.log('****************Ejercicio 3 parte 2****************');
xValue=0;
while (xValue<=100) {
    if (xValue%2==0) {
    } else {
        console.log(xValue);
    }   
    xValue+=1;
}
console.log('****************Ejercicio 3 parte 3****************');
nValue=6
cont=0
while (cont<=nValue) {
    console.log("["+cont+"]");
    cont++
}


console.log('****************Ejercicio 3 parte 4****************');
n = 3
conta = 1
sum = 0;
while (conta <= n) {
    sum += conta;
    conta++;
}
console.log(sum)