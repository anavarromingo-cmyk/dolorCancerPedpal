// Data
const data = {
    tumores: {
        tumores_solidos_metastasis: {
            nombre: "Tumores sólidos con metástasis",
            prevalencia: "Muy alta (85-90% en enfermedad avanzada)",
            tipos_dolor: ["Mixto: somático", "visceral", "neuropático"],
            caracteristicas: "Infiltración ósea, visceral, invasión de plexos nerviosos. Puede requerir técnicas analgésicas avanzadas (regionales, neuromodulación)",
            referencias: "11, 26, 33"
        },
        neuroblastoma: {
            nombre: "Neuroblastoma",
            prevalencia: "Dolor musculoesquelético ~30.5%",
            tipos_dolor: ["Nociceptivo (óseo)", "Visceral"],
            caracteristicas: "Dolor óseo por metástasis; dolor abdominal por masa primaria; mayor prevalencia con TPH",
            referencias: "30, 31, 35, 61"
        },
        sarcomas_oseos: {
            nombre: "Sarcomas óseos (osteosarcoma, Ewing)",
            prevalencia: "Dolor inicial ~64%",
            tipos_dolor: ["Nociceptivo profundo", "Neuropático"],
            caracteristicas: "Dolor nocturno y en reposo; fractura patológica; dolor fantasma tras amputación",
            referencias: "33, 36, 63"
        },
        sarcomas_tejidos_blandos: {
            nombre: "Sarcomas de tejidos blandos",
            prevalencia: "Frecuente en enfermedad avanzada",
            tipos_dolor: ["Nociceptivo somático/visceral", "Neuropático"],
            caracteristicas: "Compresión de estructuras, invasión nerviosa, dolor localizado",
            referencias: "36, 41"
        },
        tumores_snc: {
            nombre: "Tumores del SNC",
            prevalencia: "Alta; cefalea hasta 2/3 de pacientes",
            tipos_dolor: ["Nociceptivo (cefalea)", "Neuropático"],
            caracteristicas: "Cefalea por hipertensión intracraneal, dolor posquirúrgico, síndromes neuropáticos",
            referencias: "32, 34, 35"
        },
        lla: {
            nombre: "Leucemia linfoblástica aguda (LLA)",
            prevalencia: "Osteoarticular ~32%; dolor óseo al debut hasta 42%",
            tipos_dolor: ["Nociceptivo somático", "Neuropático", "Visceral"],
            caracteristicas: "Dolor óseo/articular al debut, osteonecrosis (corticoides), CIPN (vincristina), dolor abdominal por complicaciones",
            referencias: "12, 14, 30, 31, 35"
        },
        lma: {
            nombre: "Leucemia mieloide aguda (LMA)",
            prevalencia: "Menor que LLA, pero relevante",
            tipos_dolor: ["Nociceptivo", "Visceral", "Neuropático"],
            caracteristicas: "Síntomas similares a LLA pero con menor frecuencia de dolor óseo inicial",
            referencias: "35"
        },
        linfomas: {
            nombre: "Linfomas (Hodgkin, No Hodgkin)",
            prevalencia: "20-40% supervivientes con dolor crónico",
            tipos_dolor: ["Nociceptivo", "Visceral", "Neuropático"],
            caracteristicas: "Adenopatías dolorosas, afectación ósea, CIPN",
            referencias: "13, 31, 34"
        }
    },
    procedimientos: {
        venopuncion: {
            nombre: "Venopunción/canalización periférica",
            frecuencia: "Muy frecuente, agudo",
            tipo_dolor: "Nociceptivo cutáneo",
            caracteristicas: "Dolor punzante, anticipación y ansiedad asociadas",
            referencias: "46, 47"
        },
        acceso_reservorio: {
            nombre: "Acceso de reservorio/curas",
            frecuencia: "Cada acceso, recurrente",
            tipo_dolor: "Nociceptivo cutáneo",
            caracteristicas: "Molestia en punción y curas de apósitos",
            referencias: "46, 47"
        },
        puncion_lumbar: {
            nombre: "Punción lumbar (PL)",
            frecuencia: "Intenso, requiere sedación",
            tipo_dolor: "Nociceptivo profundo (meníngeo)",
            caracteristicas: "Dolor agudo durante procedimiento; cefalea post-PL; requiere sedación/analgesia protocolizada",
            referencias: "33, 46, 47"
        },
        aspirado_mo: {
            nombre: "Aspirado/biopsia de médula ósea",
            frecuencia: "Intenso, dolor residual",
            tipo_dolor: "Nociceptivo profundo (óseo)",
            caracteristicas: "Dolor severo en sitio de punción, analgesia escalonada necesaria",
            referencias: "33, 46, 47"
        },
        cirugia: {
            nombre: "Cirugía oncológica",
            frecuencia: "Todos, moderado-severo",
            tipo_dolor: "Nociceptivo/Neuropático",
            caracteristicas: "Dolor posoperatorio, dolor fantasma en amputaciones (hasta 50-70%)",
            referencias: "33, 48"
        },
        radioterapia: {
            nombre: "Radioterapia",
            frecuencia: "40-85% con toxicidad local",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Dolor por inmovilización, mucositis oral/GI, radiodermitis",
            referencias: "32"
        },
        curaciones: {
            nombre: "Curaciones/desbridamientos",
            frecuencia: "Repetidos",
            tipo_dolor: "Nociceptivo",
            caracteristicas: "Dolor procedimental reiterado, riesgo de sensibilización central",
            referencias: "46, 47"
        },
        tph: {
            nombre: "Trasplante hematopoyético (TPH)",
            frecuencia: ">75% mucositis severa",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Mucositis oro-GI grados 3-4, dolor en EICH, neuropatía por inmunosupresores",
            referencias: "11, 87, 88"
        }
    },
    farmacos: {
        vincristina: {
            nombre: "Vincristina",
            incidencia: "29-61% neuropatía durante inducción",
            tipo_dolor: "Neuropático",
            caracteristicas: "CIPN sensitivo-motora: parestesias, alodinia, disestesias distales, debilidad",
            referencias: "32, 68, 69, 72, 75-81, 84, 85"
        },
        platinos: {
            nombre: "Platinos (cisplatino, carboplatino)",
            incidencia: "19-85% neuropatía",
            tipo_dolor: "Neuropático",
            caracteristicas: "Disestesias distales simétricas en guante-calcetín",
            referencias: "32, 68, 70-72, 78, 82, 83"
        },
        metotrexato: {
            nombre: "Metotrexato a altas dosis",
            incidencia: "40-80% mucositis grados 2-4",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Mucositis oro-GI severa: odinofagia, dolor abdominal",
            referencias: "30, 31, 86"
        },
        citarabina: {
            nombre: "Citarabina (Ara-C)",
            incidencia: "40-70% mucositis",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Mucositis oral y GI severa",
            referencias: "30, 31"
        },
        ciclofosfamida: {
            nombre: "Ciclofosfamida/Ifosfamida",
            incidencia: "5-70% cistitis hemorrágica",
            tipo_dolor: "Visceral",
            caracteristicas: "Dolor suprapúbico intenso, disuria",
            referencias: "30, 31"
        },
        asparaginasa: {
            nombre: "Asparaginasa",
            incidencia: "Pancreatitis 2-10%",
            tipo_dolor: "Visceral",
            caracteristicas: "Dolor epigástrico severo",
            referencias: "30, 31"
        },
        corticoides: {
            nombre: "Corticoides",
            incidencia: "Osteonecrosis 3-20%",
            tipo_dolor: "Nociceptivo somático",
            caracteristicas: "Dolor cadera/rodilla",
            referencias: "30, 31"
        },
        gcsf: {
            nombre: "G-CSF",
            incidencia: "Frecuente, autolimitado",
            tipo_dolor: "Nociceptivo",
            caracteristicas: "Dolor óseo difuso",
            referencias: "11, 32"
        },
        itk: {
            nombre: "ITK/Inmunoterapias",
            incidencia: "Variable",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Mialgias, artralgias",
            referencias: "30, 31, 51, 73"
        },
        antraciclinas: {
            nombre: "Antraciclinas",
            incidencia: "Variable",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Mucositis oral",
            referencias: "30"
        },
        melfalan: {
            nombre: "Melfalán/Busulfán",
            incidencia: "57-90% mucositis TPH",
            tipo_dolor: "Nociceptivo/Inflamatorio",
            caracteristicas: "Mucositis grados 3-4",
            referencias: "87, 88, 93"
        }
    }
};

// Navigation
function navegarSeccion(seccion) {
    const sections = document.querySelectorAll('.section');
    const navBtns = document.querySelectorAll('.nav-btn');
    
    sections.forEach(s => s.classList.remove('section-active'));
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(seccion).classList.add('section-active');
    document.querySelector(`[data-section="${seccion}"]`).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const seccion = btn.getAttribute('data-section');
        navegarSeccion(seccion);
    });
});

// Search Functions
function buscarCancer() {
    const select = document.getElementById('cancer-select');
    const resultsDiv = document.getElementById('cancer-results');
    const value = select.value;
    
    if (!value) {
        resultsDiv.innerHTML = '<p style="color: #ec008c; font-weight: 500;">Por favor, seleccione un tipo de cáncer.</p>';
        return;
    }
    
    const tumor = data.tumores[value];
    resultsDiv.innerHTML = `
        <div class="result-card">
            <h4>${tumor.nombre}</h4>
            <div class="result-item">
                <span class="result-label">Prevalencia:</span>
                <div class="result-value">${tumor.prevalencia}</div>
            </div>
            <div class="result-item">
                <span class="result-label">Tipos de dolor más frecuentes:</span>
                <div class="pain-tags">
                    ${tumor.tipos_dolor.map(tipo => `<span class="pain-tag ${clasificarDolor(tipo)}">${tipo}</span>`).join('')}
                </div>
            </div>
            <div class="result-item">
                <span class="result-label">Características clínicas:</span>
                <div class="result-value">${tumor.caracteristicas}</div>
            </div>
            <div class="result-item">
                <span class="result-label">Referencias:</span>
                <div class="result-value">${tumor.referencias}</div>
            </div>
        </div>
    `;
}

function limpiarCancer() {
    document.getElementById('cancer-select').value = '';
    document.getElementById('cancer-results').innerHTML = '';
}

function buscarProcedimiento() {
    const select = document.getElementById('procedimiento-select');
    const resultsDiv = document.getElementById('procedimiento-results');
    const value = select.value;
    
    if (!value) {
        resultsDiv.innerHTML = '<p style="color: #ec008c; font-weight: 500;">Por favor, seleccione un procedimiento.</p>';
        return;
    }
    
    const proc = data.procedimientos[value];
    resultsDiv.innerHTML = `
        <div class="result-card">
            <h4>${proc.nombre}</h4>
            <div class="result-item">
                <span class="result-label">Frecuencia:</span>
                <div class="result-value">${proc.frecuencia}</div>
            </div>
            <div class="result-item">
                <span class="result-label">Tipo de dolor:</span>
                <div class="pain-tags">
                    <span class="pain-tag ${clasificarDolor(proc.tipo_dolor)}">${proc.tipo_dolor}</span>
                </div>
            </div>
            <div class="result-item">
                <span class="result-label">Características clínicas:</span>
                <div class="result-value">${proc.caracteristicas}</div>
            </div>
            <div class="result-item">
                <span class="result-label">Referencias:</span>
                <div class="result-value">${proc.referencias}</div>
            </div>
        </div>
    `;
}

function limpiarProcedimiento() {
    document.getElementById('procedimiento-select').value = '';
    document.getElementById('procedimiento-results').innerHTML = '';
}

function buscarFarmaco() {
    const select = document.getElementById('farmaco-select');
    const resultsDiv = document.getElementById('farmaco-results');
    const value = select.value;
    
    if (!value) {
        resultsDiv.innerHTML = '<p style="color: #ec008c; font-weight: 500;">Por favor, seleccione un fármaco.</p>';
        return;
    }
    
    const farmaco = data.farmacos[value];
    resultsDiv.innerHTML = `
        <div class="result-card">
            <h4>${farmaco.nombre}</h4>
            <div class="result-item">
                <span class="result-label">Incidencia:</span>
                <div class="result-value">${farmaco.incidencia}</div>
            </div>
            <div class="result-item">
                <span class="result-label">Tipo de dolor:</span>
                <div class="pain-tags">
                    <span class="pain-tag ${clasificarDolor(farmaco.tipo_dolor)}">${farmaco.tipo_dolor}</span>
                </div>
            </div>
            <div class="result-item">
                <span class="result-label">Características clínicas:</span>
                <div class="result-value">${farmaco.caracteristicas}</div>
            </div>
            <div class="result-item">
                <span class="result-label">Referencias:</span>
                <div class="result-value">${farmaco.referencias}</div>
            </div>
        </div>
    `;
}

function limpiarFarmaco() {
    document.getElementById('farmaco-select').value = '';
    document.getElementById('farmaco-results').innerHTML = '';
}

function clasificarDolor(tipo) {
    const tipoLower = tipo.toLowerCase();
    if (tipoLower.includes('neuropático') || tipoLower.includes('neuropatico')) return 'neuropatico';
    if (tipoLower.includes('visceral')) return 'visceral';
    if (tipoLower.includes('inflamatorio')) return 'inflamatorio';
    if (tipoLower.includes('mixto')) return 'mixto';
    if (tipoLower.includes('somático') || tipoLower.includes('somatico')) return 'somatico';
    if (tipoLower.includes('profundo')) return 'profundo';
    if (tipoLower.includes('cutáneo') || tipoLower.includes('cutaneo')) return 'cutaneo';
    if (tipoLower.includes('meníngeo') || tipoLower.includes('meningeo')) return 'meningeo';
    if (tipoLower.includes('óseo') || tipoLower.includes('oseo')) return 'oseo';
    return 'nociceptivo';
}

// Resources
function mostrarRecurso(recursoId) {
    const recursos = document.querySelectorAll('.resource-content');
    
    recursos.forEach(r => r.style.display = 'none');
    
    document.getElementById(recursoId).style.display = 'block';
    
    // Populate tables on first show
    if (recursoId === 'tabla-tumores' && document.getElementById('tabla-tumores-body').children.length === 0) {
        cargarTablaTumores();
    }
    if (recursoId === 'tabla-procedimientos' && document.getElementById('tabla-procedimientos-body').children.length === 0) {
        cargarTablaProcedimientos();
    }
    if (recursoId === 'tabla-farmacos' && document.getElementById('tabla-farmacos-body').children.length === 0) {
        cargarTablaFarmacos();
    }
    
    window.scrollTo({ top: document.getElementById(recursoId).offsetTop - 100, behavior: 'smooth' });
}

function cargarTablaTumores() {
    const tbody = document.getElementById('tabla-tumores-body');
    Object.values(data.tumores).forEach(tumor => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${tumor.nombre}</strong></td>
            <td>${tumor.prevalencia}</td>
            <td><div class="pain-tags">${tumor.tipos_dolor.map(t => `<span class="pain-tag ${clasificarDolor(t)}">${t}</span>`).join('')}</div></td>
            <td>${tumor.caracteristicas}</td>
            <td>${tumor.referencias}</td>
        `;
    });
}

function cargarTablaProcedimientos() {
    const tbody = document.getElementById('tabla-procedimientos-body');
    Object.values(data.procedimientos).forEach(proc => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${proc.nombre}</strong></td>
            <td>${proc.frecuencia}</td>
            <td><span class="pain-tag ${clasificarDolor(proc.tipo_dolor)}">${proc.tipo_dolor}</span></td>
            <td>${proc.caracteristicas}</td>
            <td>${proc.referencias}</td>
        `;
    });
}

function cargarTablaFarmacos() {
    const tbody = document.getElementById('tabla-farmacos-body');
    Object.values(data.farmacos).forEach(farmaco => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${farmaco.nombre}</strong></td>
            <td>${farmaco.incidencia}</td>
            <td><span class="pain-tag ${clasificarDolor(farmaco.tipo_dolor)}">${farmaco.tipo_dolor}</span></td>
            <td>${farmaco.caracteristicas}</td>
            <td>${farmaco.referencias}</td>
        `;
    });
}

function imprimirRecurso(recursoId) {
    window.print();
}
