const text = `
Узнал о комьюнити в 2021 году, пришел на пару месяцев позже. По началу состоял в слабых кланах, был знаком с личностями такие как: еврофобия, суицидов, дропингов и т.д. Был админом в многих феймовых проектах.

Сейчас развиваю свой проект "Аноним Лэнд"(270 сабов), имею свою тиму и рейдю разные кланы. Делаю разборы на разных феймовых личностей и манядоксеров. Так-же меня многие узнают в популярных чатах.
`;

const target = document.getElementById('typed-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        const char = text.charAt(index);
        if (char === '\n') {
            target.innerHTML += '<br>'; // перенос строки
        } else {
            target.innerHTML += char;
        }
        index++;
        setTimeout(typeWriter, 30);
    }
}

target.innerHTML = '';
typeWriter();
