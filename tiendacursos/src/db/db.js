const cursosDB = [{
  id: 1,
  title: 'Angular Avanzado',
  description: 'Componentes, directivas, servicios, mapas, gráficas, JWT, autenticación, despliegues, mongo, Git, GitHub y mucho más',
  level: ['trainner', 'medium', 'Andanced'],
  price: 1152.00,
  teacher: {
    id: 1,
    name: 'Fernando Herrera',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo web'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=mog8EKQX5HI&list=PLPl81lqbj-4JaLibWSbTVrYTyHDadppKq',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=mog8EKQX5HI&list=PLPl81lqbj-4JaLibWSbTVrYTyHDadppKq',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/angular.jpg?alt=media&token=6278d898-4ce1-4115-8636-204a49a67f28'
}, {
  id: 2,
  title: 'Curso HTML y CSS curso profecional',
  description: 'Aprende HTML y CSS desde cero, sin conocimientos previos. Conoce todo sobre etiquetas HTML, semántica, CSS, como dar estilos a los elementos de tu sitio web, medidas EM/REM, modelo de caja y mucho más. Aprenderás todo lo que necesitas para empezar en el desarrollo web online y a construir sitios para internet de manera eficiente.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 1492.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo web'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/html.jpg?alt=media&token=de309bd9-e0a3-454b-834b-f16080aab684'
}, {
  id: 3,
  title: 'JavaScript Basico',
  description: 'Iníciate en el mundo de la programación, con el lenguaje más versátil y demandado del mercado. Prepárate para dominar el desarrollo de aplicaciones web y Mobile.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 14820.00,
  teacher: {
    id: 1,
    name: 'Bernard',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo web'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/javascript.jpg?alt=media&token=4f6f900e-25c4-47a2-9e28-92e3eafa238d'
}, {
  id: 4,
  title: 'Curso Basico Microsorft .NET',
  description: 'Aprende a programar desde cero con uno de los lenguajes más utilizados en el mercado IT. Desarrolla aplicaciones en .NET Framework, .NET Core y preparate para posicionarte en el mercado laboral.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 14852.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo web'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=LaXmyHsXfYo',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=LaXmyHsXfYo',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/net.jpg?alt=media&token=473cac0b-60c7-4575-aa6b-4e5e555fc85d'
}, {
  id: 5,
  title: 'Curso Profecional Node JS',
  description: 'En este curso aprenderás a crear aplicaciones del lado del servidor, empezaremos conociendo un poco acerca de Node.js y su funcionamiento, luego utilizaremos el framework Express que nos facilitará la creación de APIs, veremos cómo realizar conexiones con bases de datos relacionales y no relacionales.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 14362.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Backend'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=1hpc70_OoAg&t=3618s',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=1hpc70_OoAg&t=3618s',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/nodejs.jpg?alt=media&token=bcc84d26-9ac9-4d04-934e-f063cf12ea6a'
}, {
  id: 6,
  title: 'PHP para Backend',
  description: 'Facebook, Wikipedia y Flickr tienen algo en común: todos han sido desarrollados en php. Aprende el lenguaje más versátil y flexible de programación y desarrolla desde cero tus proyectos web de contenido. Y recuerda, si tienes algo que decir, ¡dilo en PHP!.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 10362.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Backend'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=vXf5gaozWcc&list=PLg9145ptuAij8vIQLU25f7sUSH4E8pdY5',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=vXf5gaozWcc&list=PLg9145ptuAij8vIQLU25f7sUSH4E8pdY5',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/php.jpg?alt=media&token=4c084810-dec5-4e84-b8cd-41e7e7129a84'
}, {
  id: 7,
  title: 'Curso Basico Python',
  description: 'Aprende Python desde cero. Eleva tus oportunidades con este lenguaje en gran crecimiento para áreas como data science, desarrollo backend, inteligencia artificial, IoT y más. Crea tus primeros programas utilizando variables, estructuras de datos, condicionales y ciclos.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 15200.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo web'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=chPhlsHoEPo&t=176s',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=chPhlsHoEPo&t=176s',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/python.jpg?alt=media&token=578d14f9-3b4e-4e99-b786-a3564ba46114'
}, {
  id: 8,
  title: 'Desarrollo de aplicaciones nativas para Android',
  description: 'Aprende todas las bases de desarrollo Android aún sin saber programar, entiende cómo funciona el sistema operativo, toma decisiones para tu equipo móvil o tus propios desarrollos. Adquiere todo el conocimiento técnico que necesitas para desarrollar aplicaciones móviles Android.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 14200.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo Android'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=BQaxPwZWboA&list=PLNdFk2_brsRdYF0FXDtSaGvluzBNHRbNe',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=BQaxPwZWboA&list=PLNdFk2_brsRdYF0FXDtSaGvluzBNHRbNe',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/android.jpg?alt=media&token=f94965a4-5749-472f-9ab1-e55d709c559f'
}, {
  id: 9,
  title: 'Curso Blockchain y Criptomonedas',
  description: 'Da tus primeros pasos desplegando contratos inteligentes en blockchain a través solidity, el lenguaje de programación de alto nivel más importante en Ethereum.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 13200.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Cripto y mineria'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=yN3zpI3sNAE',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=yN3zpI3sNAE',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/blockchaincripto.jpg?alt=media&token=5d696cca-7b86-45c9-8d35-a395a8670a2c'
}, {
  id: 10,
  title: 'Curso Boostrap 4',
  description: 'Crea sitios web compatibles entre navegadores de forma fácil y práctica con Bootstrap, un framework frontend que te permite definir estructuras y agregar estilos, comportamientos, modals, tooltips y animaciones. Conoce cómo y en qué casos usarlo en este Curso de Bootstrap.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 17200.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'FrontEnd'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=7s1RjItUBqU&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=7s1RjItUBqU&list=PLL0TiOXBeDagsYUYFO9WMwDtuDuoGZVB9',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/boot.jpg?alt=media&token=19969b4d-330f-4329-b8cb-d6ba157205a4'
}, {
  id: 11,
  title: 'Curso Data Science',
  description: 'Domina los fundamentos para el manejo y la manipulación de datos. Conoce el mundo de las bases de datos para entender cómo trabajar con ellas.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 14500.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Big Data'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=_gJH2ZF-IRk',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=_gJH2ZF-IRk',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/data.jpg?alt=media&token=f0cd3617-937f-4436-883a-4439baa17654'
}, {
  id: 12,
  title: 'Curso basico de Exel',
  description: 'Conoce el funcionamento básico de Excel y la utilidad que tiene. Aprende sobre los elementos principales de Excel y cómo dar formato a un documento de hojas de cálculo.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 11000.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Ofimatica'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=v_R5SaMTlug',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=v_R5SaMTlug',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/excel.jpg?alt=media&token=ba49acbd-ac8e-49fa-a26c-685ecf5e5fde'
}, {
  id: 13,
  title: 'Java desde cero',
  description: 'Comienza tu camino para especializarte como backend developer en Java utilizando Spring Boot, este framework basado en Spring para construir aplicaciones stand-alone y production-grade que son muy sencillas de correr.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 9000.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Desarrollo Multiplataforma'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=Z8zAKYLZBqc',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=Z8zAKYLZBqc',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/java.jpg?alt=media&token=93a3cfa3-d109-4814-babd-ce8f70a08407'
}, {
  id: 14,
  title: 'Curso Scrum desde cero',
  description: 'Ten éxito en tus proyectos aplicando el marco de trabajo ágil más exitoso. Domina la metodología Scrum y utilízala para generar valor a tus clientes a través de entregas iterativas que te permitan hacer mejoras sobre la marcha y aprender en el proceso.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 8900.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Scrum'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=b615j2gC-OY',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=b615j2gC-OY',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/scrum.jpg?alt=media&token=34faa45b-87cc-483a-b895-b8e88cd64c6c'
}, {
  id: 15,
  title: 'Curso software tester - QA',
  description: 'Desarrolla tests para asegurar la calidad de tu software. Domina la automatización de pruebas con herramientas como Cypress y Puppeteer.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 7800.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'Test'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=V4-1GvQ9RLc',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=V4-1GvQ9RLc',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/testing.jpg?alt=media&token=17ccdf39-037c-42a1-8487-24cb78e4f178'
}, {
  id: 16,
  title: 'UX para principiantes',
  description: 'Diseña interfaces atractivas e intuitivas con Sketch aplicando los principios de usabilidad y procesos de UX. Aprende técnicas de investigación que te permiten conocer a tus usuarios, aplica Guerilla testing para validar tus diseños y construye un Design System empleando Atomic Design. Entrega al equipo de desarrollo tu diseño de interfaz usando Zeplin.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 12400.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'lo que sea'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=9z1IhqGQ--c&list=PL65OIoU7mGjKrKnd7anVKTzN9x8gDbdEU',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=9z1IhqGQ--c&list=PL65OIoU7mGjKrKnd7anVKTzN9x8gDbdEU',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/uxui.jpg?alt=media&token=bdbd4027-dbe9-4a3f-9035-f245f9c33ad0'
}, {
  id: 17,
  title: 'Curso  C++  profecional',
  description: 'Conoce uno de los lenguajes de programación más versátiles y maduros de la industria. Ya sean videojuegos, backend o hardware C++ está presente. Aprende a cómo instalar tu entorno de desarrollo, desarrollar la estructura básica de un programa y codifica tus primeras líneas para después ser compiladas directamente desde la terminal.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 17800.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'lo que sea'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=dJzLmjSJc2c&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=dJzLmjSJc2c&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/c.jpg?alt=media&token=379c49b0-0451-4533-a21b-5e47aa5704db'
}, {
  id: 18,
  title: 'Curso Cobol',
  description: 'Aprende COBOL y asegura un trabajo en la industria de la tecnología. COBOL es un lenguaje de programación orientado a negocios y su uso en industrias como la de los bancos sigue siendo muy demandado.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 9600.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'lo que sea'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=uhNlWv7uOdg&list=PLVzwufPir355nStjiLrg1WKBNyV-zdLzx',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=uhNlWv7uOdg&list=PLVzwufPir355nStjiLrg1WKBNyV-zdLzx',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/cobol.jpg?alt=media&token=fd91082f-d6ea-472c-9e45-8bcbce012313'
}, {
  id: 19,
  title: 'ReactJS Bases',
  description: '¡Aprende React.js, la librería más popular de JavaScript para crear aplicaciones web interactivas! Trabaja con componentes, propiedades, estado y efectos. Almacena tu información en Local Storage, implementa React Context para comunicar componentes y teletransporta componentes con React Portals. Crea tu primer proyecto web con React.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 1100.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'lo que sea'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=rLoWMU4L_qE&t=1s',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=rLoWMU4L_qE&t=1s',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/react.jpg?alt=media&token=a96a9a4a-2867-4a2e-8382-eba8fe1d01ac'
}, {
  id: 20,
  title: 'Ruby desde cero',
  description: 'Aprende lo esencial de Ruby, el lenguaje ideal para empezar a programar que muchas startups usan como base de sus plataformas. Conoce el entorno de desarrollo y las bases del lenguaje. Domina la programación orientada a objetos y empieza a abrir puertas en el mundo profesional.',
  level: ['trainner', 'medium', 'Andanced'],
  price: 1554.00,
  teacher: {
    id: 1,
    name: 'Robert',
    image_teacher:'https://t3.ftcdn.net/jpg/01/04/93/90/360_F_104939054_E7P5jaVoNYcXQI7YBrzsVWH2qZc03sn8.jpg'
  },
  categories: {
    id: 1,
    name: 'lo que sea'
  },
  vide_url: [{
    id: 1,
    title: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=R3MhA8vWGsg&list=PLEFC2D43C36013A70',
  }],
  vide_url: [{
    id: 2,
    title: 'JavaScript 2',
    url: 'https://www.youtube.com/watch?v=R3MhA8vWGsg&list=PLEFC2D43C36013A70',
  }],
  img_couse: 'https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/ruby2.jpg?alt=media&token=eb1f75cc-1701-4261-a5ab-ddfbdd335259'
}]

export default cursosDB