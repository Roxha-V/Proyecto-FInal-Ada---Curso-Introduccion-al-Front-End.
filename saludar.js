function saludar(cara) {
    const containerT = document.getElementById(`soy-${cara}`);
    console.log(typeof (containerT.className));
    containerT.className += " activo";
}
