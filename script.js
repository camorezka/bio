document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.lights-container');
    const garlandWrap = document.querySelector('.garland-wrap');
    const numLights = 50; // Увеличено количество шариков

    if (!container || !garlandWrap) {
        console.error('Не найдены элементы lights-container или garland-wrap.');
        return;
    }

    const resizeObserver = new ResizeObserver(entries => {
        const entry = entries[0];
        const boxWidth = entry.contentRect.width;
        const boxHeight = entry.contentRect.height;
        const totalPerimeter = (boxWidth * 2) + (boxHeight * 2);

        container.innerHTML = '';

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

            light.style.animationDelay = `${i * (3 / numLights)}s`;
            
            container.appendChild(light);
        }
    });

    resizeObserver.observe(garlandWrap);
});
