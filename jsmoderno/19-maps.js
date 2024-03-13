const old_herr = {
    5: "Casetera",
    6: "Disquetera",
    7: "Lector cd"
}

const mapas = new Map()

mapas.set(1, "Celular")
    .set(2, "Monitor Lenovo")
    .set(4, "Gabinete Centre")
    .set(3, "Monitor LG")



console.log(mapas)

const  mapa_2 = new Map(Object.entries(old_herr))

console.log(mapa_2)




