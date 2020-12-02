//typerwriter animation implemented from https://safi.me.uk/typewriterjs/
    var app = document.getElementById('typing');
    var typewriter = new Typewriter(app, {
        loop: true,
        cursor: "_",
        delay: 65
    });
    typewriter.typeString('Welcome to my life!')
    .pauseFor(400)
    .deleteAll()
    .typeString('I start my day reading my Bible.')
    .pauseFor(400)
    .deleteChars(30)
    .typeString('study cognitive science, data science, and design')
    .pauseFor(400)
    .deleteAll()
    .typeString('at UC Berkeley.')
    .pauseFor(400)
    .deleteAll()
    .typeString('I am a sunset and ocean enthusiast.')
    .pauseFor(400)
    .deleteChars(33)
    .typeString('love helping others.')
    .pauseFor(400)
    .deleteChars(15)
    .typeString('learning new things.')
    .pauseFor(400)
    .deleteAll()
    .typeString('Have fun exploring my buttons:)')
    .pauseFor(3000)
    .deleteAll()
    .start();

