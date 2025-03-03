document.addEventListener("DOMContentLoaded", function () {
    const materiasPorAno = {
        "ano1": [
            { codigo: "MED100", nombre: "MED 100 - ANATOMÍA HUMANA" },
            { codigo: "MED101", nombre: "MED 101 - HISTOLOGÍA Y EMBRIOLOGÍA" },
	    { codigo: "SAP100", nombre: "SAP 100 - SALUD PÚBLICA I" },
	    { codigo: "MAF100", nombre: "MAF 100 - FORMACIÓN SOCIOCULTURAL" },
			
        ],
        "ano2": [
            { codigo: "MED200", nombre: "MED 200 - ANATOMÍA PATOLÓGICA" },
            { codigo: "MED201", nombre: "MED 201 - BACTERIOLOGÍA Y VIROLOGÍA MÉDICA" },
            { codigo: "MED202", nombre: "MED 202 - FISIOLOGÍA HUMANA" },
            { codigo: "MED203", nombre: "MED 203 - BIOQUÍMICA MÉDICA" },
            { codigo: "MED209", nombre: "MED 209 - PARASITOLOGÍA Y MICOLOGÍA MÉDICA" },
            { codigo: "SAP200", nombre: "SAP 200 - SALUD PÚBLICA II" },
        ],
        "ano3": [
            { codigo: "MED301", nombre: "MED 301 - FISIOPATOLOGÍA" },
			{ codigo: "MED304", nombre: "MED 304 - INFECTOLOGÍA Y MEDICINA TRADICIONAL" },
			{ codigo: "CIR305", nombre: "CIR 305 - CIRUGÍA I" },
			{ codigo: "MED302", nombre: "MED 302 - SEMIOLOGÍA GENERAL" },
			{ codigo: "MED303", nombre: "MED 303 - FARMACOLOGÍA Y TERAPÉUTICA MÉDICA" },
			{ codigo: "SAP300", nombre: "SAP 300 - SALUD PÚBLICA III" },

        ],
        "ano4": [
            { codigo: "CIR400", nombre: "CIR 400 - CIRUGIA III" },
            { codigo: "CIR401", nombre: "CIR 401 - TRUMATOLOGIA Y ORTOPEDIA" },
			{ codigo: "CIR402", nombre: "CIR 402 - OFTALMOLOGIA" },
			{ codigo: "CIR403", nombre: "CIR 403 - ANESTESIOLOGIA" },
			{ codigo: "MED400", nombre: "MED 400 - MEDICINA INTERNA I" },
			{ codigo: "MED405", nombre: "MED 405 - NEUROLOGIA" },
			{ codigo: "MED413", nombre: "MED 413 - DERMATOLOGIA" },
            { codigo: "MED415", nombre: "MED 415 - PSICOPATOLOGIA" },

        ],
        "ano5": [
            { codigo: "CIR500", nombre: "CIR 500 - CIRUGIA III" },
            { codigo: "CIR505", nombre: "CIR 505 - GINECOLOGIA Y OBSTETRICIA" },
            { codigo: "CIR506", nombre: "CIR 506 - OTORRINOLARINGOLOGIA" },
			{ codigo: "MED500", nombre: "MED 500 - MEDICINA INTERNA III" },
			{ codigo: "MED501", nombre: "MED 501 - PSIQ. Y SALUD MENTAL" },
			{ codigo: "MED504", nombre: "MED 504 - PEDIATRIA" },
			{ codigo: "MED508", nombre: "MED 508 - MEDICINA LEGAL Y ETICA M." },
        ]
    };

    // Función para mostrar las materias de un año
    window.mostrarMaterias = function (ano) {
        const contenedorMaterias = document.getElementById(`materias-${ano}`);
        contenedorMaterias.innerHTML = ""; 

        const materias = materiasPorAno[ano];

        // Crear elementos para cada materia
        materias.forEach(materia => {
            const divMateria = document.createElement("div");
            divMateria.classList.add("materia");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = materia.codigo;
            checkbox.id = `materia-${materia.codigo}`;
            const label = document.createElement("label");
            label.htmlFor = `materia-${materia.codigo}`;
            label.textContent = materia.nombre;

            divMateria.appendChild(checkbox);
            divMateria.appendChild(label);
            contenedorMaterias.appendChild(divMateria);
        });

        
        contenedorMaterias.style.display = "block";
    };

    // Función para redirigir a la página de horarios con las materias seleccionadas
    window.redirigirAHorario = function () {
        const materiasSeleccionadas = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            materiasSeleccionadas.push(checkbox.value);
        });

        if (materiasSeleccionadas.length > 0) {
            // Redirigir a la página de horarios con las materias seleccionadas
            window.location.href = `horario.html?materias=${materiasSeleccionadas.join(",")}`;
        } else {
            alert("Por favor, seleccione al menos una materia.");
        }
    };
});
