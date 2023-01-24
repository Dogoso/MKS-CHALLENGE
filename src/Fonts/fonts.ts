import { createGlobalStyle } from "styled-components";
import Monsterrat from "./Montserrat-wght.ttf";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&display=swap');
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(${Monsterrat}) format('truetype');
    }
    * {
        font-family: Montserrat;
    }
`;