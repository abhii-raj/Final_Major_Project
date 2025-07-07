// /src/pages/Contact.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import abhishekImg from './assets/abhishek.png';
import ankitImg    from './assets/ankit.jpg';
import ayushiImg from './assets/ayushi.png';
import manyaImg from './assets/manya.png';

const people = [
  {
    id: 1,
    name: 'Abhishek Raj',
    role: 'Full-Stack Developer',
    img: abhishekImg,                   // local image
    github: 'https://github.com/abhii-raj',
    linkedin: 'https://linkedin.com/in/abhii-raj',
    bio: 'Built the complete React front-end, Express API, JWT auth, and admin panel.',
  },
  {
    id: 2,
    name: 'Ayushi Gupta',
    role: 'ML Engineer',
    img: ayushiImg, 
    github: 'https://github.com/Ayushigupta7453',
    linkedin: 'https://www.linkedin.com/in/ayushi-gupta-124b36263/',
    bio: 'Designed & trained the scikit-learn authenticity model.',
  },
  {
    id: 3,
    name: 'Ankit',
    role: 'Data Analyst',
    img: ankitImg,                   
    github: 'https://github.com/Ankitprasad364',
    linkedin: 'https://www.linkedin.com/in/ankit-prasad-789a2a282/',
    bio: 'Created Tableau dashboards and data pipelines.',
  },
  {
    id: 4,
    name: 'Manya',
    role: 'Front-End Developer',
    img: manyaImg,   
    github: 'https://github.com/manyabansal406',
    linkedin: 'https://www.linkedin.com/in/manya-bansal-306527243',
    bio: 'Implemented the review system and integrated Recharts analytics.',
  },
];

const Contact = () => (
  <main className="max-w-6xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-10 text-center">Meet the Team</h1>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {people.map((p) => (
        <div
          key={p.id}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center text-center"
        >
          <img
            src={p.img}
            alt={p.name}
            className="w-28 h-28 rounded-full object-cover mb-4"
            loading="lazy"
          />
          <h2 className="text-xl font-semibold dark:text-white">{p.name}</h2>
          <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{p.role}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex-grow">{p.bio}</p>

          {/* social icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Contact;
