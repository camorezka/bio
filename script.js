document.addEventListener('DOMContentLoaded', () => {
    const path = document.getElementById('garland-path');
    const container = document.querySelector('.lights-container');
    const numLights = 10; // Количество шариков

    if (!path || !container) {
        console.error('Не найдены элементы path или lights-container.');
        return;
    }

    const pathLength = path.getTotalLength();

    // Создаем шарики и размещаем их вдоль линии
    for (let i = 0; i < numLights; i++) {
        const light = document.createElement('div');
        light.classList.add('garland-light');
        
        const point = path.getPointAtLength((i / (numLights - 1)) * pathLength);

        light.style.left = `${point.x}px`;
        light.style.top = `${point.y}px`;

        // Добавляем случайную задержку для асинхронного мерцания
        light.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(light);
    }
});
