## Exercice 1 : Header à panneaux coulissant
Vous aurez besoin d’une image de votre choix avec un background transparent (par exemple .png)

Pour les "searchgooglophobe", je vous fourni ce lion majestueux.

![Lion](https://github.com/tonidano/Workshop_AnimJS-GSAP/blob/master/assets/images/lion.png)

* Suggestion de structure HTML :

      <section class="pannel">
        <div class="leftlargepannel"></div>
        <div class=" rightlargepannel"></div>
        <div class="centralpannel">
          <div class="leftsmallpannel"></div>
          <img src=".png" alt=" " class="image">
          <div class="rightsmallpannel"></div>
        </div>
        <h1 class="texte">VOTRE TEXTE</h1>
      </section>

* Je laisse le CSS à vos talents de designer et graphiste, surprenez moi .

* Le JS :

      var header = new TimelineMax();
      header.direction(cible, durée, {paramètres})

Réalisez l’animation sur 5 cibles (Bonus :  sur 4 cibles)
