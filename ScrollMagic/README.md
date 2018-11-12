# ScrollMagic

On commence par définir un nouveau controller (1/page)

    var controller = new ScrollMagic.Controller();

On défini ensuite une scène (1/animation, il peut donc y en avoir plusieurs par page)

    var scene = new ScrollMagic.Scene({

On détermine l'élément qui déclenchera l'animation au ScrollMagic

    triggerElement: 'element déclencheur',

On peut faire aller l'animation en sens inverse (ou non) au scroll-Up grace à :

    reverse:true/false
    })

On ajoute la scène au controller

    .addTo(controller)

On peut ajouter des indicateurs de couleurs pour visualiser l'endroit exact où l'animation se déclenchera

    .addIndicators({
      colorStart: 'green',
      colorTrigger: 'red'
     })

![Indicateurs](https://github.com/tonidano/Workshop_AnimJS-GSAP/blob/master/assets/images/indicateurs.png)

Avec ce code, on peut déjà créer une série d'animations qui se déclencheront les unes après les autres.

Pour plus d'infos et approfondir les possibilités de ScrollMagic, je vous invite à aller voir la [Documentations] (http://scrollmagic.io/docs/index.html).
