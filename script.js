let contForm = 0;
let contExp = 0;

// PREVIEW FOTO
foto.onchange = e => {
    const reader = new FileReader();
    reader.onload = () => preview.src = reader.result;
    reader.readAsDataURL(e.target.files[0]);
};

// AGREGAR FORMACION
function agregarFormacion(){
    contForm++;
    formaciones.innerHTML += `
    <div class="item">
        <label>Carrera</label>
        <input name="carrera${contForm}">
        <label>Centro de Estudios</label>
        <input name="centro${contForm}">
        <label>Años</label>
        <input name="anio${contForm}">
    </div>`;
}

// AGREGAR EXPERIENCIA
function agregarExperiencia(){
    contExp++;
    experiencias.innerHTML += `
    <div class="item">
        <label>Empresa</label>
        <input name="empresa${contExp}">
        <label>Cargo</label>
        <input name="cargo${contExp}">
        <label>Periodo</label>
        <input name="periodo${contExp}">
    </div>`;
}

// MOSTRAR RESULTADO
cvForm.onsubmit = e => {
    e.preventDefault();
    const data = new FormData(cvForm);
    let html = "";

    for(let [k,v] of data.entries()){
        if(v) html += `<p><b>${k}:</b> ${v}</p>`;
    }

    datosMostrados.innerHTML = html;
    rFoto.src = preview.src;
    resultado.style.display = "block";
};
