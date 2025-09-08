document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resourceItems = document.querySelectorAll('.resource-item');

    searchInput.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase().trim();

        resourceItems.forEach(item => {
            const tags = item.dataset.tags.toLowerCase();
            
            if (tags.includes(query)) {
                item.style.display = 'block'; // 検索語が含まれていれば表示
            } else {
                item.style.display = 'none'; // 含まれていなければ非表示
            }
        });
    });
});