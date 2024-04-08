function contador(arr) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    arr.forEach(num => {
        if (num < 0) {
            negativos++;
        } else if (num === 0) {
            ceros++;
        } else {
            positivos++;
        }
    });

    return { negativos, ceros, positivos };
}

console.assert(
    JSON.stringify(contador([-2, 0, 3, -5, 0, 7])) === JSON.stringify({ negativos: 3, ceros: 2, positivos: 1 }),
    "Error en la prueba 1"
);

console.assert(
    JSON.stringify(contador([1, 2, 3, 4, 5])) === JSON.stringify({ negativos: 0, ceros: 0, positivos: 5 }),
    "Error en la prueba 2"
);

console.assert(
    JSON.stringify(contador([0, 0, 0, 0])) === JSON.stringify({ negativos: 0, ceros: 4, positivos: 0 }),
    "Error en la prueba 3"
);