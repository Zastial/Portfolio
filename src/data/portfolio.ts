export type Locale = 'fr' | 'en';

const portfolioContent = {
	fr: {
		profile: {
			name: 'CAROL Alexandre',
			email: 'alexcrl.pro@gmail.com',
			links: [
				{
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/in/alexandre-carol-fortin-0b7784251/',
				},
				{ label: 'GitHub', href: 'https://github.com/Zastial' },
			],
			role: 'Ingénieur Logiciel / DevOps',
			location: 'Nantes, France',
			availability: 'CDI recherché à partir de mi-octobre.',
			intro:
				"Je veux continuer à apprendre et à apporter de la valeur à des projets intéressants.",
		},
		navItems: [
			{ label: 'Accueil', href: '#accueil' },
			{ label: 'Compétences', href: '#competences' },
			{ label: 'Expérience', href: '#experience' },
			{ label: 'Formation', href: '#formation' },
			{ label: 'Projets', href: '#projets' },
			{ label: 'Contact', href: '#contact' },
		],
		stats: [
			{ value: 'Full-stack', label: 'Vue.js / React, Go, Python, Kotlin ...' },
			{ value: 'DevOps', label: 'Docker, Kubernetes, CI/CD, VPS, ...' },
			{ value: 'FR / EN', label: 'Anglais professionnel' },
		],
		skills: [
			{
				title: 'Front-end',
				items: ['HTML', 'CSS', 'JS / TS', 'Vue.js', 'React', 'Tailwind CSS', 'Astro'],
			},
			{
				title: 'Back-end',
				items: ['Python', 'Go', 'Kotlin', 'NestJS', 'Java', 'Spring Boot'],
			},
			{
				title: 'Mobile & frameworks',
				items: ['React Native', 'Android SDK', 'Flutter', 'Dart'],
			},
			{
				title: 'Data & API',
				items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Alembic', 'gRPC'],
			},
			{
				title: 'DevOps & tools',
				items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'CI/CD'],
			},
			{
				title: 'Outils',
				items: ['VS Code', 'IntelliJ', 'Audacity', 'Sony Vegas Pro', 'Jira', 'Notion'],
			},
		],
		experiences: [
			{
				title: 'Apprenti Développeur Full-stack / DevOps - DGFIP',
				meta: 'Nantes | depuis octobre 2025',
				description:
					'Développement front-end Vue.js / TypeScript et back-end Java / Spring Boot.',
			},
			{
				title: 'Apprenti Développeur Full-stack & Scrum Master - Univers',
				meta: 'La Chapelle-sur-Erdre | septembre 2023 - octobre 2025',
				description:
					'Backend Python, Go, Ruby et frontend React / TypeScript avec Docker et Kubernetes.',
			},
			{
				title: 'Stagiaire Data Acquisition Developer - Univers',
				meta: 'La Chapelle-sur-Erdre | avril - juin 2023',
				description:
					'Développement Go, JavaScript et Ruby. Intégration de données et création de routes HTTP et gRPC.',
			},
			{
				title: 'LIDL - Employé polyvalent (Contrat étudiant)',
				meta: 'Nantes | mai 2022 - janvier 2023',
				description:
					'Caisse, mise en rayon, service client et aide clientèle au quotidien.',
			},
		],
		education: [
			{
				title: 'ESGI Nantes',
				meta: '2024 - 2026',
				description: 'Mastère en Ingénierie du Web. Vainqueur du Hackathon 2025.',
			},
			{
				title: 'IUT Nantes - ADMIS',
				meta: '2021 - 2024',
				description: 'Réalisation d\'applications : conception, développement, validation',
			},
			{
				title: 'Cambridge English Certificate',
				meta: '2021',
				description: 'Niveau B1+ avec anglais professionnel à l\'écrit et à l\'oral.',
			},
			{
				title: 'Lycée la Colinière - BAC Mention Assez Bien',
				meta: '2018-2021',
				description: 'Spécialité NSI et LLCE Anglais.',
			},
		],
		projectFilters: [
			{ label: 'Tous', value: 'all' },
			{ label: 'Full-stack', value: 'fullstack' },
			{ label: 'DevOps', value: 'devops' },
			{ label: 'Produit', value: 'product' },
			{ label: 'Cours', value: 'education' },
		],
		projects: [
			{
				name: 'SHAREO - Location de domaines et d\'équipements',
				categoryLabel: 'Dernier projet',
				year: 'ESGI - 2026',
				description: [
					'Site de location de domaines et d\'équipements pour professionnels et particuliers.',
					'Projet annuel ESGI livré en 4 mois. Travail en équipe de 3 personnes avec gestion de projet sur Notion.',
				],
				stack: ['Vue.js', 'NestJS', 'Docker', 'MinIO', 'CI/CD', 'VPS'],
				impact: 'Déploiement sécurisé et documentation complète',
				linkLabel: 'Voir le site',
				linkHref: 'https://shareo.zastial.com/',
				tags: ['fullstack', 'devops', 'product'],
			},
			{
				name: 'NFC et RFID - Communication, échange et authentification sans contact',
				categoryLabel: 'Cours en ligne',
				year: 'ESGI - 2026',
				description: [
					'Cours en ligne sur les technologies NFC et RFID appliqué au développement, couvrant la communication sans contact, les échanges de données et les méthodes d\'authentification.',
				],
				stack: ['Moodle', 'Analyse de thèses', 'Création de vidéos'],
				impact: '',
				linkLabel: 'Voir le cours',
				linkHref: 'https://moodle.zastial.com/course/view.php?id=6',
				tags: ['education'],
			},
			{
				name: "Mise en place d'une infrastructure CI/CD et déploiement conteneurisé",
				categoryLabel: "Projet DevOps",
				year: "En cours",
				description: [
					"Paramétrage de ma VM Oracle avec configuration Apache et sécurisation des accès (HTTPS, pare-feu, ...).",
					"Mise en place de pipelines CI/CD et déploiement automatisé via Docker."
				],
				stack: ["Oracle VM", "Docker", "CI/CD", "Linux", "Git"],
				impact: "",
				tags: ["devops", "docker", "ci-cd", "infrastructure"]
			},
			{
				name: 'Portfolio personnel - Ce site',
				categoryLabel: 'Portfolio',
				year: '2026',
				description: [
					'Découverte du framework Astro, création d\'un site one-page bilingue (français / anglais) optimisé pour la performance.',
					'Astro permet de générer un site ultra-léger avec très peu de JavaScript, ce qui garantit rapidité, performance et optimisation du SEO.'
				],
				stack: ['Vue.js', 'NestJS', 'Docker', 'MinIO', 'CI/CD', 'VPS'],
				impact: 'Ma vitrine professionnelle en ligne',
				linkLabel: 'Voir le code source',
				linkHref: 'https://github.com/Zastial/Portfolio',
				tags: ['fullstack'],
			},
		],
		ui: {
			siteTitle: 'Portfolio de CAROL Alexandre',
			sectionArrowsAria: 'Navigation entre sections',
			prevSectionAria: 'Section précédente',
			nextSectionAria: 'Section suivante',
			mainNavAria: 'Navigation principale du site',
			backToTopAria: 'Retour en haut de la page',
			navOpen: 'Ouvrir le menu',
			navClose: 'Fermer le menu',
			themeToDark: 'Passer en thème sombre',
			themeToLight: 'Passer en thème clair',
			languageSwitchLabel: 'FR',
			languageSwitchAria: 'Passer le site en anglais',
			heroEyebrow: 'Portfolio / Full-stack / DevOps',
			seeProjects: 'Voir mes projets',
			contactMe: 'Me contacter',
			downloadResume: 'Télécharger mon CV',
			downloadResumeAria: 'Télécharger le CV au format PDF',
			keyPointsAria: 'Points clés',
			profileSummaryAria: 'Résumé du profil',
			openToOpportunities: 'Ouvert aux opportunités',
			skillsEyebrow: 'Compétences',
			skillsTitle: 'Profil Full-stack / DevOps.',
			skillsLead: 'La base technique ci-dessous montre les technologies que je maîtrise.',
			experienceEyebrow: 'Expérience',
			experienceTitle: 'Des contextes réels, des livraisons réelles.',
			experienceLead: 'J\'ai eu la chance de travailler et de développer mes compétences sur différents projets.',
			educationEyebrow: 'Formation',
			educationTitle: 'Une formation solide, complétée par de la pratique.',
			educationLead: 'Ingénierie web, projets concrets et montée en compétences continue.',
			projectsEyebrow: 'Projets',
			projectsTitle: 'Mon travail personnel en quelques exemples',
			projectsFilterAria: 'Filtres des projets',
			projectStackAriaPrefix: 'Technologies pour',
			contactEyebrow: 'Contact',
			contactTitle: 'N\'hésitez pas à me contacter pour toute demande d\'informations ou question',
		},
	},
	en: {
		profile: {
			name: 'CAROL Alexandre',
			email: 'alexcrl.pro@gmail.com',
			links: [
				{
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/in/alexandre-carol-fortin-0b7784251/?locale=en_US',
				},
				{ label: 'GitHub', href: 'https://github.com/Zastial' },
			],
			role: 'Software Engineer / DevOps',
			location: 'Nantes, France',
			availability: 'Looking for a full-time position starting mid-October.',
			intro:
				'I want to keep learning and bring value to meaningful projects.',
		},
		navItems: [
			{ label: 'Home', href: '#accueil' },
			{ label: 'Skills', href: '#competences' },
			{ label: 'Experience', href: '#experience' },
			{ label: 'Education', href: '#formation' },
			{ label: 'Projects', href: '#projets' },
			{ label: 'Contact', href: '#contact' },
		],
		stats: [
			{ value: 'Full-stack', label: 'Vue.js / React, Go, Python, Kotlin ...' },
			{ value: 'DevOps', label: 'Docker, Kubernetes, CI/CD, VPS, ...' },
			{ value: 'FR / EN', label: 'Professional English' },
		],
		skills: [
			{
				title: 'Front-end',
				items: ['HTML', 'CSS', 'JS / TS', 'Vue.js', 'React', 'Tailwind CSS', 'Astro'],
			},
			{
				title: 'Back-end',
				items: ['Python', 'Go', 'Kotlin', 'NestJS', 'Java', 'Spring Boot'],
			},
			{
				title: 'Mobile & frameworks',
				items: ['React Native', 'Android SDK', 'Flutter', 'Dart'],
			},
			{
				title: 'Data & API',
				items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Alembic', 'gRPC'],
			},
			{
				title: 'DevOps & tools',
				items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'CI/CD'],
			},
			{
				title: 'Tools',
				items: ['VS Code', 'IntelliJ', 'Audacity', 'Sony Vegas Pro', 'Jira', 'Notion'],
			},
		],
		experiences: [
			{
				title: 'Full-stack / DevOps Apprentice - DGFIP',
				meta: 'Nantes | since October 2025',
				description:
					'Front-end development in Vue.js / TypeScript and back-end in Java / Spring Boot.',
			},
			{
				title: 'Full-stack Apprentice & Scrum Master - Univers',
				meta: 'La Chapelle-sur-Erdre | September 2023 - October 2025',
				description:
					'Python, Go and Ruby backend, plus React / TypeScript frontend with Docker and Kubernetes.',
			},
			{
				title: 'Data Acquisition Developer Intern - Univers',
				meta: 'La Chapelle-sur-Erdre | April - June 2023',
				description:
					'Go, JavaScript and Ruby development. Data integration and HTTP/gRPC route creation.',
			},
			{
				title: 'LIDL - Multi-skilled Employee (Student contract)',
				meta: 'Nantes | May 2022 - January 2023',
				description:
					'Cash register, shelf restocking, customer service and daily support.',
			},
		],
		education: [
			{
				title: 'ESGI Nantes',
				meta: '2024 - 2026',
				description: 'Master\'s degree in Web Engineering. Winner of the 2025 Hackathon.',
			},
			{
				title: 'IUT Nantes - Graduated',
				meta: '2021 - 2024',
				description: 'Application delivery: design, development, and validation.',
			},
			{
				title: 'Cambridge English Certificate',
				meta: '2021',
				description: 'B1+ level with professional written and spoken English.',
			},
			{
				title: 'La Colinière High School - Baccalaureate',
				meta: '2018-2021',
				description: 'NSI and LLCE English specialization.',
			},
		],
		projectFilters: [
			{ label: 'All', value: 'all' },
			{ label: 'Full-stack', value: 'fullstack' },
			{ label: 'DevOps', value: 'devops' },
			{ label: 'Product', value: 'product' },
			{ label: 'Courses', value: 'education' },
		],
		projects: [
			{
				name: 'SHAREO - Property and Equipment Rental',
				categoryLabel: 'Flagship project',
				year: 'ESGI - 2026',
				description: [
					'Rental platform for estates and equipment, for professionals and individuals.',
					'Annual ESGI project delivered in 4 months. Teamwork with 3 people and project management via Notion.',
				],
				stack: ['Vue.js', 'NestJS', 'Docker', 'MinIO', 'CI/CD', 'VPS'],
				impact: 'Secure deployment and complete documentation',
				linkLabel: 'Visit website',
				linkHref: 'https://shareo.zastial.com/',
				tags: ['fullstack', 'devops', 'product'],
			},
			{
				name: 'NFC and RFID - Contactless Communication, Data Exchange and Authentication',
				categoryLabel: 'Online course',
				year: 'ESGI - 2026',
				description: [
					'Online course on NFC and RFID technologies applied to development, covering contactless communication, data exchange, and authentication methods.',
				],
				stack: ['Moodle', 'Research papers analysis', 'Video production'],
				impact: '',
				linkLabel: 'Visit course',
				linkHref: 'https://moodle.zastial.com/course/view.php?id=6',
				tags: ['education'],
			},
			{
				name: 'CI/CD Infrastructure Setup and Containerized Deployment',
				categoryLabel: 'DevOps Project',
				year: 'In progress',
				description: [
					'Configuration of my Oracle VM with Apache setup and access security (HTTPS, firewall, etc.).',
					'CI/CD pipeline implementation and automated deployment via Docker.'
				],
				stack: ['Oracle VM', 'Docker', 'CI/CD', 'Linux', 'Git'],
				impact: 'Ongoing learning: Terraform and Kubernetes.',
				tags: ['devops', 'docker', 'ci-cd', 'infrastructure']
			},
			{
				name: 'Personal Portfolio - This Website',
				categoryLabel: 'Portfolio',
				year: '2026',
				description: [
					'Discovery of the Astro framework, creation of a bilingual one-page website (French / English) optimized for performance.',
					'Astro generates an ultra-light website with minimal JavaScript, ensuring speed, performance, and SEO optimization.'
				],
				stack: ['Astro', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
				impact: 'My professional online portfolio',
				linkLabel: 'View source code',
				linkHref: 'https://github.com/Zastial/Portfolio',
				tags: ['fullstack'],
			},
		],
		ui: {
			siteTitle: 'Portfolio of CAROL Alexandre',
			sectionArrowsAria: 'Section navigation',
			prevSectionAria: 'Previous section',
			nextSectionAria: 'Next section',
			mainNavAria: 'Main site navigation',
			backToTopAria: 'Back to top',
			navOpen: 'Open menu',
			navClose: 'Close menu',
			themeToDark: 'Switch to dark theme',
			themeToLight: 'Switch to light theme',
			languageSwitchLabel: 'EN',
			languageSwitchAria: 'Switch website to French',
			heroEyebrow: 'Portfolio / Full-stack / DevOps',
			seeProjects: 'See my projects',
			contactMe: 'Contact me',
			downloadResume: 'Download my resume',
			downloadResumeAria: 'Download the resume as a PDF file',
			keyPointsAria: 'Key points',
			profileSummaryAria: 'Profile summary',
			openToOpportunities: 'Open to opportunities',
			skillsEyebrow: 'Skills',
			skillsTitle: 'Full-stack / DevOps profile.',
			skillsLead: 'The technical foundation below shows the technologies I work with.',
			experienceEyebrow: 'Experience',
			experienceTitle: 'Real contexts, real deliveries.',
			experienceLead: 'I had the chance to work on multiple projects and continuously grow my skills.',
			educationEyebrow: 'Education',
			educationTitle: 'Strong education, reinforced by hands-on practice.',
			educationLead: 'Web engineering, real projects, and continuous skill growth.',
			projectsEyebrow: 'Projects',
			projectsTitle: 'A few examples of my personal work',
			projectsFilterAria: 'Project filters',
			projectStackAriaPrefix: 'Technologies for',
			contactEyebrow: 'Contact',
			contactTitle: 'Feel free to contact me for any question or additional information',
		},
	},
};

export function getPortfolioContent(locale: Locale) {
	return portfolioContent[locale];
}