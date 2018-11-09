## Exercice 1 : Header à panneaux coulissant
Vous aurez besoin d’une image de votre choix avec un background transparent (par exemple .png)

* Suggestion de structure HTML :

      <section class="panneaux">
        <div class="grandpanneaugauche"></div>
        <div class=" grandpanneaudroite"></div>
        <div class="panneaucentral">
          <div class="petitpanneaugauche"></div>
          <img src=".png" alt=" " class="image">
          <div class="petitpanneaudroite"></div>
        </div>
        <h1 class="texte">VOTRE TEXTE</h1>
      </section>

* Je laisse le CSS à vos talents de designer et graphiste, surprenez moi .

* Le JS :

      var header = new TimelineMax();
      header.direction(cible, durée, {paramètres})

Réalisez l’animation sur 5 cibles (Bonus :  sur 4 cibles)
