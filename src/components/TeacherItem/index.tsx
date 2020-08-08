import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/45512927?s=460&u=62aa9b0d7e94864da822eea416633eda62fc7ebd&v=4" alt="Victor Gago" />
                <div>
                    <strong>Victor Gago</strong>
                    <span>Português</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae non libero dolore, similique excepturi fugiat tempora enim reprehenderit ducimus tempore. Quis, assumenda. Quos suscipit autem quas commodi recusandae quis.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;