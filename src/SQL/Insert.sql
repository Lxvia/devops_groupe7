
--Insertion des données dans la table Axes
INSERT INTO Axes (axis_id, axis_name) VALUES
(1, "Axe Compétence"),
(2, "Axe Réactivité"),
(3, "Axe Numérique");

-- Insertion des données dans la table Subaxes
--Compétences
INSERT INTO Subaxes (axis_id, subaxis_id, subaxis_name) VALUES
(1, 1, "Excellence Technique/Communauté de pratiques"),
(1, 2, "Faire agile"),
(1, 3, "Gestion humaine des compétences"),
--Réactivité
(2, 1, "Vélocité de réponse"),
(2, 2, "Environnements souples"),
(2, 3, "Défi environnemental"),
(2, 4, "Veille et benchmark")
--Numériques
(3, 1, "Business model"),
(3, 2, "Relation client"),
(3, 3, "Management");

-- Insertion des données dans la table Recommendations
-- Compétences
INSERT INTO Recommendations (axis_id, subaxis_id, recommendation_text, recommendation_type) VALUES
(1, 1, "Votre excellence technique et votre communauté de pratiques sont remarquables. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(1, 1, "Bien que vous ayez une bonne base technique, il y a des améliorations à apporter dans votre communauté de pratiques. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(1, 1, "Il semble que l'excellence technique et la communauté de pratiques ne soient pas encore pleinement développées. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
(1, 2, "Votre adoption des méthodes agiles est remarquable. Continuez à utiliser ces méthodes pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(1, 2, "Bien que vous utilisiez les méthodes agiles, elles ne sont pas encore au cœur de vos processus. Envisagez d'intégrer davantage ces pratiques pour optimiser la performance et la réactivité.", "improvement_needed"),
(1, 2, "Il semble que les méthodes agiles ne soient pas encore pleinement adoptées. Nous vous recommandons de commencer par une formation et l'intégration progressive de ces pratiques.", "not_addressed"),
(1, 3, "Votre gestion humaine des compétences est excellente. Continuez à valoriser et développer les compétences de vos employés pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(1, 3, "Bien que vous gériez les compétences humaines, il y a des améliorations à apporter. Envisagez d'intégrer davantage de stratégies de développement des compétences pour optimiser la performance.", "improvement_needed"),
(1, 3, "Il semble que la gestion humaine des compétences ne soit pas encore pleinement développée. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
-- Réactivité
(2, 1, "Votre vélocité de réponse est remarquable. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(2, 1, "Bien que vous ayez une bonne vélocité de réponse, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(2, 1, "Il semble que la vélocité de réponse ne soit pas encore pleinement développée. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
(2, 2, "Votre environnement souple est remarquable. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(2, 2, "Bien que vous ayez un environnement souple, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(2, 2, "Il semble que l'environnement souple ne soit pas encore pleinement développé. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
(2, 3, "Votre gestion des défis environnementaux est remarquable. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(2, 3, "Bien que vous gériez bien les défis environnementaux, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(2, 3, "Il semble que la gestion des défis environnementaux ne soit pas encore pleinement développée. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
(2, 4, "Votre veille et benchmark sont remarquables. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(2, 4, "Bien que vous fassiez de la veille et du benchmark, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(2, 4, "Il semble que la veille et le benchmark ne soient pas encore pleinement développés. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
-- Numérique
(3, 1, "Votre modèle d'affaires numérique est remarquable. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(3, 1, "Bien que vous ayez un modèle d'affaires numérique, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(3, 1, "Il semble que le modèle d'affaires numérique ne soit pas encore pleinement développé. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
(3, 2, "Votre gestion numérique est remarquable. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(3, 2, "Bien que vous ayez une gestion numérique, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(3, 2, "Il semble que la gestion numérique ne soit pas encore pleinement développée. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed"),
(3, 3, "Votre relation client numérique est remarquable. Continuez à exploiter ces forces pour maintenir et renforcer votre compétitivité.", "well_mastered"),
(3, 3, "Bien que vous ayez une relation client numérique, il y a des améliorations à apporter. Envisagez d'intégrer davantage ces aspects pour optimiser la performance.", "improvement_needed"),
(3, 3, "Il semble que la relation client numérique ne soit pas encore pleinement développée. Nous vous recommandons de commencer par une évaluation des besoins et d'identifier les domaines à améliorer.", "not_addressed");

-- Insertion des questions pour l'Axe Compétences
INSERT INTO Questions (question_text, axis_id, subaxis_id) VALUES
("Formations pour Apprendre à apprendre, changement de paradigme, \"être à la page\" (au-delà des compétences \"justes\" nécessaires)", 1, 1),
("Le co-développement (outil d'intelligence collective) existe-t-il dans l'entreprise ?", 1, 1),
("Les collaborateurs sont-ils amenés à partager leurs compétences et sous quelles formes ?", 1, 1),
("Le mentoring (fonctionnement en binôme) existe-t-il pour assurer le transfert de compétences ?", 1, 1),
("Les managers sont-ils aussi formateurs sur certains sujets pour l'entreprise entière ?", 1, 1),
("L'entreprise favorise-t-elle l'excellence technique ? (Principe 9 du Manifeste Agile)", 1, 1),
("Déployez-vous les pratiques du \"Faire Agile\", c'est-à-dire une ou plusieurs des \"méthodes\" agiles ?", 1, 2),
("Votre entreprise promeut-elle un état d'esprit agile\ ?", 1, 2),
("Votre entreprise gère-t-elle humainement les compétences ?", 1, 3);

-- Insertion des questions pour l'Axe Réactivité
INSERT INTO Questions (question_text, axis_id, subaxis_id) VALUES
("Valeur supérieure utilisable livrée plus tôt (Fonction principale utilisable dès les premières versions)", 2, 1),
("Réactivité face aux impératifs prépondérants", 2, 1),
("Mesure de la vélocité de l'équipe (indicateur de suivi du travail d'une équipe de conception)", 2, 1),
("Les installations techniques et de gestion sont modernes (TIC/ERP/CRM)", 2, 2),
("Les équipes sont en capacité d'autonomiser une partie de leurs tâches", 2, 2),
("Les équipes s’inscrivent dans un cadre Agile Lean", 2, 2),
("Les mécanismes de livraison et de synchronisation sont matures", 2, 2),
("Les innovations produit tiennent compte de l'urgence climatique", 2, 3),
("Les processus internes sont remis en cause pour diminuer leur impact environnemental", 2, 3),
("Les parties prenantes sont sélectionnées en fonction de leur éthique vis-à-vis du développement durable", 2, 3),
("Veille stratégique", 2, 4);

-- Insertion des questions pour l'Axe Numérique
INSERT INTO Questions (question_text, axis_id, subaxis_id) VALUES
("Votre entreprise dégage t-elle une part de CA par des produits ou services en ligne ?", 3, 1),
("La mise en place d’outils numériques a-t-elle permis d'optimiser les coûts, les délais et la qualité ?", 3, 1),
("Comment les outils sont-ils intégrés dans les process de l’entreprise ?", 3, 1),
("Comment partagez-vous les données numériques avec les parties prenantes (clients, fournisseurs,…) ?", 3, 1),
("Mesurez-vous les impacts du numérique sur votre entreprise ?", 3, 1),
("Quel est l’impact du numérique sur la démarche RSE de l’entreprise ?", 3, 1),
("Existe-t-il des freins (stratégiques, financiers,…) à l’ investissement dans les outils numériques ?", 3, 1),
("L’entreprise dispose-t-elle : d’un site internet, d’un compte LinkedIn, d’une page Facebook, d’un compte Twitter,... ?", 3, 2),
("Comment utilisez-vous le numérique dans la relation client ? (nouveau modèle de vente, nouveau modèle d’échanges avec les clients, communauté, story, chat,...)", 3, 2),
("L’entreprise dispose-t-elle d’un community manager ?", 3, 2),
("Certains de vos collaborateurs sont-ils actifs sur les réseaux sociaux au nom de l’entreprise ?", 3, 2),
("Comment mesurez-vous et exploitez-vous les données issues du site de votre entreprise ?", 3, 2),
("Avez-vous observé chez vos concurrents des pratiques innovantes ?", 3, 2),
("Vos collaborateurs sont-ils équipés de nouveaux équipements numériques de travail (PC portable, tablette, smartphone,…) ?", 3, 3),
("L’arrivée des outils digitaux a-t-elle eu un impact sur les pratiques et la culture de l’entreprise ?", 3, 3),
("Comment vous êtes-vous approprié et comment avez-vous accompagné ces évolutions?", 3, 3),
("Les nouvelles possibilités technologiques ont-elles fait évoluer le modèle d’organisation de l’entreprise et/ou votre management, vers plus de collaboration avec des acteurs internes ou externes ?", 3, 3),
("Mobilisez-vous des outils de veille et mettez-vous en œuvre des modalités de curation et de partage de l’information ?", 3, 3),
("Les fonctionnalités des outils sont-elles augmentées par la pratique de vos collaborateurs ?", 3, 3),
("Comment accompagnez-vous vos collaborateurs dans la transition numérique ?", 3, 3);