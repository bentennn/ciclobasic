let km = 0



const plant = () => {
    return (km / 8.2)
}
const solcitarkm = () => {
    km = (prompt("ingrese los kilometros recorridos,para saber cuantas calorias neutras ha quemado\n\n escriba ESC para salir"))


}
solcitarkm()
while (km != "ESC") {

    alert(`Recorriste ${km} KM\nQuemaste ${plant()} calorias neutras`);
    solcitarkm()
}
