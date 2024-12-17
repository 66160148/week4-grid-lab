// script.js
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filters.forEach(f => f.classList.remove('active'));

            // Add 'active' class to the clicked button
            filter.classList.add('active');

            const category = filter.dataset.filter;

            items.forEach(item => {
                // Hide all items initially
                item.style.opacity = '0';

                setTimeout(() => {
                    if (category === 'all' || item.classList.contains(category)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
});
