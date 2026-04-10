# Revue engineering du site

## Objectif de la revue

Cette revue évalue la qualité de l'architecture et du code du site avec un angle engineering, en portant une attention particulière :
- à la qualité globale de la base Astro
- à la maintenabilité du code
- à la robustesse des flux email
- à la logique de téléchargement du guide

## Verdict global

Le site est bien codé pour un MVP marketing statique.

L'architecture Astro est globalement saine :
- composants réutilisables
- contenu typé
- configuration centralisée
- peu de JavaScript inutile

En revanche, la couche "lead generation" reste techniquement fragile.

Le vrai point faible n'est pas la base front, mais la logique autour :
- des formulaires
- des redirections
- du téléchargement du guide

## Ce qui est bien construit

### 1. L'architecture générale est propre

Le projet repose sur une structure claire :
- layouts
- composants
- pages marketing
- content collections
- utilitaires centralisés

La séparation des responsabilités est bonne.

### 2. Le choix Astro est cohérent avec le besoin

Pour un site :
- rapide
- statique
- orienté contenu
- peu interactif

le choix d'Astro est pertinent et bien exploité.

### 3. Les collections de contenu sont bien définies

Les schémas de collections dans [src/content/config.ts](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/content/config.ts) rendent le contenu plus robuste et plus maintenable.

### 4. Le SEO est correctement isolé

Les responsabilités SEO sont bien séparées entre :
- [src/layouts/BaseLayout.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/layouts/BaseLayout.astro)
- [src/components/SeoHead.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/components/SeoHead.astro)
- [src/lib/seo.ts](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/lib/seo.ts)

### 5. La configuration centrale est utile

[src/lib/site.ts](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/lib/site.ts) centralise intelligemment :
- l'URL du site
- les chemins importants
- l'email de contact
- les CTA

Pour un MVP, c'est une bonne pratique.

## Principales faiblesses

### 1. Le téléchargement du guide n'est pas réellement protégé

Le PDF est public :
- [src/lib/site.ts](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/lib/site.ts#L10)
- [src/pages/merci/guide-b2.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/pages/merci/guide-b2.astro#L20)

Le parcours actuel est :
1. formulaire
2. redirection vers une page merci
3. lien direct vers le PDF

Mais techniquement, n'importe qui peut accéder directement au PDF s'il connaît l'URL.

Conclusion :
le flux "email puis téléchargement" est surtout un parcours UX, pas un vrai contrôle d'accès.

### 2. Les formulaires reposent entièrement sur FormSubmit

Les deux formulaires passent par un service tiers :
- [src/lib/site.ts](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/lib/site.ts#L11)
- [src/lib/site.ts](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/lib/site.ts#L12)

Cela fonctionne pour un MVP, mais crée plusieurs fragilités :
- dépendance totale à un tiers
- peu de maîtrise sur le flux
- pas de vraie gestion applicative des erreurs
- forte dépendance au domaine exact configuré

### 3. Les redirections sont figées sur le domaine de production

Le site utilise `siteUrl` pour les `_next` des formulaires :
- [src/components/NewsletterForm.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/components/NewsletterForm.astro#L33)
- [src/pages/contact.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/pages/contact.astro#L77)

Cela rend le flux sensible :
- aux changements de domaine
- aux différences entre local, preview et production

Conclusion :
le comportement est simple, mais pas très robuste.

### 4. Les formulaires sont peu protégés contre le spam

Le captcha est explicitement désactivé :
- [src/components/NewsletterForm.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/components/NewsletterForm.astro#L38)
- [src/pages/contact.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/pages/contact.astro#L75)

Il n'y a pas non plus de honeypot ni de protection équivalente.

Conclusion :
la solution actuelle est exposée au spam.

### 5. Le site ne sait pas vraiment distinguer un succès d'un échec

Les pages de confirmation supposent que l'envoi a réussi :
- [src/pages/merci/contact.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/pages/merci/contact.astro)
- [src/pages/merci/guide-b2.astro](/Users/damien.figarol/Blog/objectif-B2-espagnol/src/pages/merci/guide-b2.astro)

Il n'y a ni instrumentation, ni gestion d'erreur, ni retour contrôlé côté application.

Conclusion :
le flux est opaque du point de vue engineering.

## Focus : qualité de la solution email / guide

### Ce que la solution actuelle fait bien

- elle est simple
- elle respecte l'esprit d'un site statique
- elle évite un backend custom
- elle est rapide à mettre en place

### Ce qu'elle ne fait pas bien

- elle ne garantit pas la capture réelle du lead
- elle ne garantit pas la réussite du flux
- elle n'est pas robuste aux changements d'environnement
- elle n'est pas vraiment extensible
- elle n'est pas suffisamment protégée pour une mise en production durable

## Évaluation synthétique

### Architecture du site

Bonne

### Qualité du code front

Bonne

### Maintenabilité

Bonne

### Robustesse opérationnelle des formulaires

Moyenne à faible

### Sécurité fonctionnelle du guide

Faible

## Recommandations engineering

### 1. Conserver l'architecture Astro actuelle

La base front est saine et ne nécessite pas de refonte lourde.

### 2. Professionnaliser la couche formulaires

C'est la première zone technique à faire évoluer.

Objectif :
- plus de fiabilité
- plus de contrôle
- plus de visibilité sur les envois

### 3. Décorréler les flux du domaine codé en dur

Le système actuel dépend trop de `siteUrl` pour les redirections.

### 4. Ajouter une protection minimale anti-spam

Même sans backend complexe, il faut au minimum :
- une protection de base
- ou un service plus robuste

### 5. Repenser le téléchargement du guide si la capture lead devient stratégique

Aujourd'hui, le téléchargement est surtout "honor system".

Si la capture email devient un vrai actif business, il faudra un flux plus maîtrisé.

## Conclusion

Le site repose sur une base technique propre pour un MVP.

Le front et l'architecture sont bons.

Le principal manque se situe dans la couche de génération de prospects :
- trop dépendante d'un tiers
- trop peu protégée
- pas vraiment pilotable
- pas réellement sécurisée pour le guide

En résumé :
- bonne base engineering
- couche lead gen à professionnaliser en priorité
