import React, { Component } from 'react';
class Footer extends React.Component {
    render() { 
        return <footer class="codingQuizFooter">
                    <div class="nameText">
                        <a href="https://github.com/strawhat19" target="_blank" class="hoverLine" title="GitHub"><i class="fab fa-github"></i> | Rakib Ahmed</a> 
                        <span class="vertical-sep">|</span>
                        <a href="./" class="hoverLine" title="Restart"> Restart <i class="fas fa-undo"></i></a>
                    </div>
                    <div class="siteText">Copyright <i class="fas fa-copyright"></i> 2021</div>
                </footer>;
    }
}
 
export default Footer;