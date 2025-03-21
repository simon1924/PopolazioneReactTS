import { oggetto } from "../Tipi";

export function filtro(array: oggetto[]) {
    const nomiSingoli: string[] = [];

    array.forEach((item: oggetto) => {
        nomiSingoli.push(item["Country Name"]);
    })
    const unici = [... new Set(nomiSingoli)];

    return unici
}


// export function ottieniDati(array: oggetto[], nome: string = "") {

//     const arrayPerGrafico: oggetto[] = [];

//     if (nome != "") {
//         array.forEach(item => {
//             if (item["Country Name"] == nome) {
//                 arrayPerGrafico.push(item);
//             }
//         });

//         const filtrato = filtroPerGrafico(arrayPerGrafico);
//         // console.log(filtrato)
//         return filtrato;
//     } else {
//         return [[""], ["0"]];
//     }


// }

export function ottieniDati(array: oggetto[], nome: string) {

    const arrayPerGrafico: oggetto[] = [];

    array.forEach(item => {
        if (item["Country Name"] == nome) {
            arrayPerGrafico.push(item);
        }
    });

    const filtrato = filtroPerGrafico(arrayPerGrafico);
    // console.log(filtrato)
    return filtrato;

}

export function filtroPerGrafico(array: oggetto[]) {
    const labels: string[] = [], data: string[] = [];

    array.forEach(item => {
        labels.push(item["Year"]);
        data.push(item["Value"]);
    })

    return [labels, data];
}
