// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Chart.js for performance chart
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Coding Performance',
                data: [10, 20, 15, 25, 30, 20], // Sample data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        borderDash: [5, 5]
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Value: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Handle settings form submission
    const settingsForm = document.getElementById('settingsForm');
    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Process form data
        const email = settingsForm.email.value;
        const password = settingsForm.password.value;

        alert(`Updated Email: ${email}\nUpdated Password: ${password}`);

        // Here you could add AJAX request to save data or other processing
    });
});
