## Exercice 2 : Open book

Réalisez un livre qui s'ouvre grâce au scroll. 

Thème du livre au choix mais doit contenir : 
1. un titre sur la couverture 
2. un texte à l'intérieur 
3. Bonus:  rajoutez une image de couverture et/ou à l'intérieur du livre.



* Suggestion de structure HTML :

      <section class="perspective">
        <div class="flyers">
          <div class="cover">
            <figure class="front">
              <h1 class="text1">TEXTE 1 </h1>
              <img id="image1" src="" alt="">
            </figure>
            <figure class="back">
              <div class="img-container">
                <h2 class="text2">TEXTE 2</h2>
              </div>
            </figure>
          </div>
          <img id="image2" src="" alt="">
        </div>
      </section>

* Astuce css :
   * transform: rotateY(xdeg)
   * transform-style: preserve-3d
   * transform-origin: ...
   * transition: all durée ease-in
   * backface-visibility: ...;


* ScrollMagic (JS)

      var controller = new ScrollMagic.Controller();

      var flip = new ScrollMagic.Scene({
      triggerElement: 'element déclencheur',
      reverse:true/false
      })

      .setClassToggle('.cover', 'fall')
      .addTo(controller)
      .addIndicators({
        colorStart: 'blue',
        colorTrigger: 'red'
       })
