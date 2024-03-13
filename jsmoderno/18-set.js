let herramientas = new Set(["termómetro", "antifebril"])

console.log(herramientas.size)

herramientas.add("banditas")
herramientas.add("pinzas")
herramientas.delete("termómetro")

for(let  item of herramientas){
    console.log((item))
}

herramientas.forEach(item => {
    console.log(item)
})

console.log(herramientas.has("pinzas"))


