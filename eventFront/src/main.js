import './style.css'

import { getHeader } from './modules/header/header'
import { getUserMenu } from './modules/userMenu/userMenu';
import { getNav } from './modules/nav/nav';
import { getTitle } from './modules/title/title';
import { getMain } from './modules/main/main';
import { autoLogin } from './utils/autoLogin';


const header = getHeader();
const title = getTitle();
const userMenu = getUserMenu();
const nav = getNav();
const main = getMain();

header.appendChild(title);
header.appendChild(userMenu);

document.body.prepend(header);
document.body.appendChild(nav);
document.body.appendChild(main);

autoLogin();