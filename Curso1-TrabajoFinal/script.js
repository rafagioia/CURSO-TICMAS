const cv3 = document
  .getElementById("btn-1")
  .addEventListener("click", () => {
    document.getElementById("area").innerHTML =
      "<h3>Información Personal:</h3><ul>" +
      "<li>Nombre: " +
      cv.info_per.nombre +
      "</li><li>Mail: " +
      cv.info_per.mail +
      "</li><li>Fecha de nac: " +
      cv.info_per.fnac +
      "</li></ul>";
  });

document.getElementById("btn-2").addEventListener("click", () => {
  document.getElementById("area").innerHTML =
    "<h3>Experiencia Laboral:</h3><ol><li><ul>" +
    "<li>Empresa: " +  cv.exp_lab.empresa1.empresa +
    "</li><li>Duracion: " + cv.exp_lab.empresa1.duracion +
    "</li><li>Puesto: " +   cv.exp_lab.empresa1.puesto +
    "</li></ul></li><li><ul>" +
    "<li>Empresa: " +  cv.exp_lab.empresa2.empresa +
    "</li><li>Duracion: " + cv.exp_lab.empresa2.duracion +
    "</li><li>Puesto: " +   cv.exp_lab.empresa2.puesto +
    "</li></ul></li><li><ul>" +
    "<li>Empresa: " +  cv.exp_lab.empresa3.empresa +
    "</li><li>Duracion: " + cv.exp_lab.empresa3.duracion +
    "</li><li>Puesto: " +   cv.exp_lab.empresa3.puesto +
    "</li></ul></li></ol>";
});

document.getElementById("btn-3").addEventListener("click", () => {
  document.getElementById("area").innerHTML =
    "<h3>Habilidades:</h3><ul>"+
    "<li>"+cv.habilid[0]+"</li>"+
    "<li>"+cv.habilid[1]+"</li>"+
    "<li>"+cv.habilid[2]+"</li>"+
    "<li>"+cv.habilid[3]+"</li>"+
    "<li>"+cv.habilid[4]+"</li></ul>";
});

document.getElementById("btn-4").addEventListener("click", () => {
  document.getElementById("area").innerHTML =
  "<h3>Experiencia Laboral:</h3><ol><li><ul>" +
  "<li>" +  cv.cursos.empresa1.empresa +
  "</li><li>duracion: " + cv.cursos.empresa1.duracion +
  "</li><li>puesto: " +   cv.cursos.empresa1.certificado +
  "</li></ul></li><li><ul>" +
  "<li>" +  cv.cursos.empresa2.empresa +
  "</li><li>duracion: " + cv.cursos.empresa2.duracion +
  "</li><li>puesto: " +   cv.cursos.empresa2.certificado +
  "</li></ul></li><li><ul>" +
  "<li>" +  cv.cursos.empresa3.empresa +
  "</li><li>duracion: " + cv.cursos.empresa3.duracion +
  "</li><li>puesto: " +   cv.cursos.empresa3.certificado +
  "</li></ul></li></ol>";
  
  });






  // document.getElementById("btn-1").addEventListener("mouseout", () => {
  //   document.getElementById("area").innerHTML = ""    
  //   });
  //   document.getElementById("btn-2").addEventListener("mouseout", () => {
  //     document.getElementById("area").innerHTML = ""    
  //     });
  //     document.getElementById("btn-3").addEventListener("mouseout", () => {
  //       document.getElementById("area").innerHTML = ""    
  //       });
  //       document.getElementById("btn-4").addEventListener("mouseout", () => {
  //         document.getElementById("area").innerHTML = ""    
  //         });

const cv = {

info_per: {
  nombre: "Rafa Gioia",
  mail: "raulgioia01@gmail.com",
  fnac: "12/05/1987",
},

exp_lab: {
  empresa1: {
    empresa: "Google",
    duracion: "2005-2008",
    puesto: "Diseñador web Front-End React",
  },

  empresa2: {
    empresa: "Facebook",
    duracion: "2010-2015",
    puesto: "Diseñador web Front-End React",
  },

  empresa3: {
    empresa: "Microsoft",
    duracion: "2015-2020",
    puesto: "Diseñador web Front-End React",
  },
},

habilid: ["Conocimientos de HTML5",
  "Conocimientos de CSS3",
  "Javascript Avanzado",
  "React Avanzado",
  "GIT"],

cursos: {
  empresa1: {
    empresa: "CURSA",
    duracion: "2008-2009",
    certificado: "certificacion: Diseño web HTML & CSS",
  },

  empresa2: {
    empresa: "OPEN BOOTCAMP",
    duracion: "2010-2012",
    certificado: "certificacion: Javascript principiante",
  },

  empresa3: {
    empresa: "FREECODECAMP",
    duracion: "2015-2016",
    certificado: "Diseñador web Front-End React",
  },
},
}
