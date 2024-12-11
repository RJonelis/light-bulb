document.querySelectorAll('g').forEach(function(group) {
    var firstElement = group.querySelector('path.cls-3');

    if (firstElement) {
        // Save originalColor
        var originalColor = window.getComputedStyle(firstElement).getPropertyValue('fill');

        firstElement.addEventListener('click', function() {
            var currentColor = window.getComputedStyle(firstElement).getPropertyValue('fill');
            var newColor = currentColor === originalColor ? 'red' : originalColor;
            firstElement.style.fill = newColor;
        });
    }
});