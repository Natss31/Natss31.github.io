let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#FE7A22;">Soy estudiante de Ingeniería Industrial Estadística.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
