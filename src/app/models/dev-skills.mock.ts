import { Developer } from "./developer.model";
import { Skill } from "./skill.model";

const angular = new Skill('Angular', '../../assets/images/angular.png', 'https://angular.io/');

const react = new Skill('React JS', '../../assets/images/react.webp', 'https://fr.legacy.reactjs.org/');

const javascript = new Skill('JavaScript', '../../assets/images/javascript.png', 'https://developer.mozilla.org/fr/docs/Web/JavaScript');

const java = new Skill('Java', '../../assets/images/java.png', 'https://dev.java/');

const python = new Skill('Python', '../../assets/images/python-logo-only.svg', 'https://www.python.org/');

const html5 = new Skill('HTML5', '../../assets/images/html5.png', 'https://developer.mozilla.org/fr/docs/Web/HTML');

const css3 = new Skill('CSS', '../../assets/images/css.png', 'https://developer.mozilla.org/fr/docs/Web/CSS');

const typescript = new Skill('TypeScript', '../../assets/images/typescript.png', 'https://www.typescriptlang.org/fr/');

const django = new Skill('Django', '../../assets/images/django-logo-negative.svg', 'https://www.djangoproject.com/');

const dev1 = new Developer('Davidson', 'Patrick', 25, 'M', 'Développeur frontend junior', [react, javascript, html5, css3]);

const dev2 = new Developer('Duval', 'Alice', 30, 'F', 'Super développeuse fullstack', [java, angular, typescript, javascript, html5, css3]);

const dev3 = new Developer('Van Rossum', 'Guido', 45, 'M', 'Développeur backend Python / Django', [python, django]);

export const developersList = [dev1, dev2, dev3];


