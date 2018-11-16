# GSAP

* TweenLite (version légère) :  
  * permet d'animer les paramètres d'un élément
  * demande d'ajouter des plugins pour plus de possibilités.


* TweenMax (version complète) :
  * TweenLite + d'autres plugins (TimelineLite, TimelineMax, CSSPlugin, ...)


* TimelineLite et TimelineMax :
  * permet de réaliser des séquences d'événements
  * gestion de la durée d'un événement par rapport aux autres.
  * TimelineMax possède plus de fonctionnalités comme les répétitions, le yoyo, etc


![GSAP](https://github.com/tonidano/Workshop_AnimJS-GSAP/blob/master/assets/images/GSAP.png)

* La direction :
  * .to => position initiale vers nouvelle
  * .from => position nouvelle vers initiale

* La cible :
  * .class, #id, {objet}, ...

* La durée : en seconde

* Les paramètres :
  * {propriété : valeur}

Pour avoir un aperçu complet des "commandes" GSAP, c'est par [ici](https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf).

## Les courbes de mouvements

GSAP propose un [outil](https://greensock.com/ease-visualizer) qui est capable de générer un code qui permettra à vos éléments de se mouvoir selon des courbes prédéfinies ou selon vos envies avec l'option custom.

Testez les différentes possibilités à votre guise.
