document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.lights-container');
    const neonBox = document.querySelector('.neon-box');
    const numLights = 30; // Увеличиваем количество шариков для плотности

    if (!container || !neonBox) {
        console.error('Не найдены элементы lights-container или neon-box.');
        return;
    }

    // Дожидаемся, пока блок с контентом будет отрисован, чтобы получить точные размеры
    requestAnimationFrame(() => {
        const boxWidth = neonBox.offsetWidth + 40; // Ширина контейнера гирлянды
        const boxHeight = neonBox.offsetHeight + 40; // Высота контейнера гирлянды
        const totalPerimeter = (boxWidth * 2) + (boxHeight * 2);

        // Создаем шарики и размещаем их вдоль периметра
        for (let i = 0; i < numLights; i++) {
            const light = document.createElement('div');
            light.classList.add('garland-light');

            const progress = i / numLights;
            let top, left;

            if (progress < (boxWidth / totalPerimeter)) {
                // Верхняя сторона
                left = progress * totalPerimeter;
                top = 0;
            } else if (progress < (boxWidth + boxHeight) / totalPerimeter) {
                // Правая сторона
                left = boxWidth;
                top = (progress * totalPerimeter) - boxWidth;
            } else if (progress < (boxWidth * 2 + boxHeight) / totalPerimeter) {
                // Нижняя сторона
                left = (boxWidth * 2 + boxHeight) - (progress * totalPerimeter);
                top = boxHeight;
            } else {
                // Левая сторона
                left = 0;
                top = (boxWidth * 2 + boxHeight * 2) - (progress * totalPerimeter);
            }

            light.style.left = `${left}px`;
            light.style.top = `${top}px`;

            // Устанавливаем задержку для "бегущего огонька"
            light.style.animationDelay = `${i * (3 / numLights)}s`;
            
            container.appendChild(light);
        }
    });
});
