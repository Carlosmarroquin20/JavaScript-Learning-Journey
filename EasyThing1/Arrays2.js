function main() {
    // Definimos el menú de desayuno
    var breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
    
    // Tomamos el índice de entrada y lo convertimos a un número entero
    var index = parseInt(readLine(), 10);
   
    // Reemplazamos el elemento en el índice especificado con "Fluffy Pancakes"
    breakfasts[index] = "Fluffy Pancakes";
    
    // Mostramos el nuevo menú en la consola
    console.log(breakfasts);
}
