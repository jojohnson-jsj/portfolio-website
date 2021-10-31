import { v4 as uuidv4 } from 'uuid';
import LebronImg from '../images/lebron.jpg';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    link: 'https://github.com/jojohnson-jsj/TrueCareer-1.0',
    name: 'TrueCareer',
    desc:
      'My own original companion to NBA 2k19’s MyLeague mode. This program allows you to have a more customazible MyPlayer experience and allows for couch cooperative player careers.',
    img: LebronImg,
  },
  {
    id: uuidv4(),
    link: 'https://github.com/TBean18/TrashOverflow-Web',
    name: 'TrashOverflow',
    desc:
      'An app for roommates to organize and distributes household chores and tasks. I worked on this as the lead front-end developer on a team of 6.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    link: 'https://github.com/jojohnson-jsj/TrueCareer-1.0',
    name: 'OneBullet',
    desc:
      'A twin-stick isometric shooter set in space that I developed as Project Manager alonside 3 other teammates.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    link: 'https://github.com/jojohnson-jsj/Login-Validator',
    name: 'Login Validator',
    desc:
      'Takes login credentials, hashes the given password, and compares that username and encrypted password to the credentials stored in a given JSON file.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    link: 'https://github.com/jojohnson-jsj/Checksum',
    name: 'Checksum Calculator',
    desc: 'Calculates the checksum for the text in a given file.',
    img: UTrackerImg,
  },
];

export default projects;
