# Vaux-le-Vicomte — Refonte (Next.js)

Maquette de refonte du site du Château de Vaux-le-Vicomte, réalisée par JNR Studio.
Stack : Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Pages

- `/` — Accueil (hero, château, axe de Le Nôtre, jardins, événements, infos/billetterie)
- `/chateau` — Le Château
- `/jardins` — Les Jardins (avec la section "axe" signature)
- `/evenements` — Événements
- `/visiter` — Informations pratiques & billetterie
- `/contact` — Contact

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Notes

- Les polices (Cormorant Garamond, EB Garamond, Jost) sont chargées via
  `next/font/google` — une connexion internet est nécessaire au premier build.
- Les images viennent de Wikimedia Commons (libres de droits, via
  `Special:FilePath`, pas besoin de clé API).
- La section "axe de Le Nôtre" (`components/AxisSection.tsx`) a deux
  présentations distinctes : une timeline centrale sur desktop (≥ 900px),
  et des cartes à liseré doré sur mobile — comportement volontaire, pas un bug.
- Le bouton "Réserver" et le formulaire de contact sont visuels uniquement
  (pas de logique de paiement/back-end), comme demandé pour la maquette.

## Prochaines étapes possibles

- Brancher un vrai moteur de réservation
- CMS headless pour les événements et actualités
- Déploiement sur Vercel
