import './style.css'

import { getHeader } from './modules/header/header'
import { getUserMenu } from './modules/userMenu/userMenu';
import { getNav } from './modules/nav/nav';
import { getTitle } from './modules/title/title';
import { getMain } from './modules/main/main';
import { getFooter } from './modules/footer/footer';
import { autoLogin } from './utils/autoLogin';
import { customAlert } from './utils/alert/alert';
import { initLoading } from './utils/loading/loading';

const header = getHeader();
const title = getTitle();
const userMenu = getUserMenu();
const nav = getNav();
const main = getMain();
const footer = getFooter();

header.appendChild(title);
header.appendChild(userMenu);

document.body.prepend(header);
document.body.appendChild(nav);
document.body.appendChild(main);
document.body.appendChild(footer);

initLoading();
customAlert();
autoLogin();

showLoading();
setTimeout(() => hideLoading(), 2000);