import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <footer class="codingQuizFooter">
        <div class="nameText">
            <a href="https://github.com/strawhat19" target="_blank" class="hoverLine" title="GitHub"><i class="fab fa-github"></i> | Rakib Ahmed</a>
        </div>
        <div class="siteText">Copyright <i class="fas fa-copyright"></i> {year}</div>
    </footer>
    );
}
 
export default Footer;