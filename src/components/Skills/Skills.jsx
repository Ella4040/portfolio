import React from 'react';
import './skills.css';
import Image4 from "../../assets/angular.svg";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
        <h2 className="section__tittle">Skills</h2>
        <div className="competence__container grid">
            <div className="contend_skills">
                <div className="technologies-container">
                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        <span className="technology-badge">React Js</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                        <span className="technology-badge">Next Js</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        <span className="technology-badge">HTML</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        <span className="technology-badge">CSS</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                        <span className="technology-badge">Bootstrap</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />
                        <span className="technology-badge">TailwindCSS</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                        <span className="technology-badge">JavaScript</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                        <span className="technology-badge">Redux</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src={Image4} alt="" />
                        <span className="technology-badge">VueJs</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"  />
                        <span className="technology-badge">TypeScript</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="data:image/png;base64,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" ></img>
                        <span className="technology-badge">Material-UI </span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" />
                        <span className="technology-badge">Figma</span>
                    </div>

                </div>
                <h2 className="title__skills">Fontend</h2>
            </div>

            <div className="contend_skills">
                <div className="technologies-container">
                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                        <span className="technology-badge">Python</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                        <span className="technology-badge">PHP</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg" />
                        <span className="technology-badge">Symfony</span>
                    </div>

                    <div className="technology-card">
                        <span className="technology-badge">Django</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" />
                        <span className="technology-badge">Spring Boot</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://api.iconify.design/tabler/api.svg" />
                        <span className="technology-badge">API Restful</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                        <span className="technology-badge">NodeJs</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                        <span className="technology-badge">PostgreSql</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                        <span className="technology-badge">MySql</span>
                    </div>


                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" />
                        <span className="technology-badge">MariaDB</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/java/java-vertical.svg" />
                        <span className="technology-badge">Java</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                        <span className="technology-badge">Flutter</span>
                    </div>
                </div>
                <h2 className="title__skills__2">Backend</h2>
            </div>

            <div className="contend_skills">
                <div className="technologies-container">
                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" />
                        <span className="technology-badge">WordPress</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                        <span className="technology-badge">Git</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
                        <span className="technology-badge">GitLab</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        <span className="technology-badge">GitHub</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
                        <span className="technology-badge">Adobe PS</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" />
                        <span className="technology-badge">Canva</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                        <span className="technology-badge">VS Code</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://api.iconify.design/logos/android-studio.svg" />
                        <span className="technology-badge">Android Studio</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" />
                        <span className="technology-badge">PyCharm</span>
                    </div>

                    <div className="technology-card">
                        
                        <span className="technology-badge">GNS3</span>
                    </div>

                    <div className="technology-card">
                        
                        <span className="technology-badge">VMware</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" />
                        <span className="technology-badge">Ubuntu</span>
                    </div>

                    <div className="technology-card">
                        
                        <span className="technology-badge">Filmora</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                        <span className="technology-badge">Linux</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" />
                        <span className="technology-badge">Docker</span>
                    </div>

                    <div className="technology-card">
                        <img className="img_skills" src="https://api.iconify.design/mdi/pencil.svg" />
                        <span className="technology-badge">Pencil</span>
                    </div>
                    <div className="technology-card">
                        <img className="img_skills" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" />
                        <span className="technology-badge">Firebase</span>
                    </div>

                </div>
                <h2 className="title__skills">Others</h2>
            </div>
        </div>
    </section>
  );
};

export default Skills;