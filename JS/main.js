/* Header Responsive */
// const openMenu = document.getElementById("openMenu");
// const closeMenu = document.getElementById("closeMenu");
// const mobileMenu = document.getElementById("mobileMenu");

// openMenu.addEventListener("click", () => {
//     mobileMenu.classList.add("active");
// });

// closeMenu.addEventListener("click", () => {
//     mobileMenu.classList.remove("active");
// });

document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    header.addEventListener('click', () => {
        item.classList.toggle('active');
        body.classList.toggle('open');
    });
});



window.addEventListener("load", function () {
    const track = document.querySelector(".logo-track");
    const slider = document.querySelector(".logo-slider");

    if (!track) return;

    /* Clone logos */
    const logos = Array.from(track.children);
    logos.forEach(logo => track.appendChild(logo.cloneNode(true)));

    /* Calculate half width AFTER images load */
    const totalWidth = track.scrollWidth / 2;

    /* Apply animation vars */
    track.style.setProperty("--scroll-distance", `-${totalWidth}px`);
    track.style.setProperty("--scroll-duration", `${totalWidth / 60}s`);

    /* Pause on hover */
    slider.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
    });

    slider.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
    });
});



// const chartData = {
//     perplexity: [5, 10, 18, 28, 40, 55, 70, 85, 100],
//     superhuman: [8, 15, 22, 35, 50, 65, 78, 90, 110],
//     cursor: [3, 6, 12, 20, 32, 48, 63, 80, 95]
// };

// const labels = [
//     "Jan 2025",
//     "Feb 2025",
//     "Mar 2025",
//     "Apr 2025",
//     "May 2025",
//     "Jun 2025",
//     "Jul 2025",
//     "Aug 2025",
//     "Sep 2025"
// ];

// const ctx = document.getElementById("progressChart").getContext("2d");
// const isMobile = window.innerWidth <= 576;

// const gradient = ctx.createLinearGradient(0, 0, 900, 0);

// gradient.addColorStop(0, "#00D9FF");
// gradient.addColorStop(0.5, "#00A8CC");
// gradient.addColorStop(1, "#FF6B6B");

// const startEndTextPlugin = {
//     id: "startEndText",
//     afterDatasetsDraw(chart) {
//         const { ctx, scales } = chart;
//         const data = chart.data.datasets[0].data;

//         ctx.save();

//         // START label
//         ctx.font = `400 ${isMobile ? 9 : 14}px 'PP Mori', sans-serif`;
//         ctx.fillStyle = "#00d9ff";
//         ctx.fillText(
//             "START".toUpperCase(),
//             scales.x.getPixelForValue(0) - 10,
//             scales.y.getPixelForValue(data[0]) - 10
//         );

//         // END label
//         ctx.fillStyle = "#FFFFFF";
//         ctx.fillText(
//             "Paid Ad Traffic",
//             scales.x.getPixelForValue(data.length - 1) - 80,
//             scales.y.getPixelForValue(data[data.length - 1]) - 10
//         );

//         ctx.restore();
//     }
// };


// const chart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels,
//         datasets: [{
//             data: chartData.perplexity,
//             borderColor: gradient,
//             borderWidth: 3,
//             tension: 0.45,
//             pointRadius: 0
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         animation: { duration: 600 },
//         plugins: {
//             legend: { display: false },
//             tooltip: {
//                 enabled: true,
//                 bodyFont: { size: isMobile ? 9 : 12 },
//                 titleFont: { size: isMobile ? 9 : 12 }
//             }

//         },
//         scales: {
//             x: {
//                 ticks: {
//                     color: "rgba(255,255,255,0.6)",
//                     font: { size: isMobile ? 9 : 12 }
//                 },
//                 grid: { color: "rgba(255,255,255,0.05)" }
//             },
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     stepSize: 40,
//                     color: "rgba(255,255,255,0.6)",
//                     font: { size: isMobile ? 9 : 12 }
//                 },
//                 border: {
//                     dash: [6, 6],
//                     color: "rgba(0,217,255,0.4)"
//                 },
//                 grid: {
//                     drawBorder: false,
//                     color: "rgba(0,217,255,0.4)",
//                     borderDash: [6, 6]
//                 }
//             }
//         }
//     },
//     plugins: [startEndTextPlugin]
// });

// // Tab switching logic
// document.querySelectorAll("[data-chart]").forEach(tab => {
//     tab.addEventListener("click", () => {
//         document.querySelectorAll(".nav-link").forEach(t => t.classList.remove("active"));
//         tab.classList.add("active");

//         const key = tab.dataset.chart;
//         chart.data.datasets[0].data = chartData[key];
//         chart.update();
//     });
// });


const chartData = {
    perplexity: [5, 10, 18, 28, 40, 55, 70, 85, 100],
    superhuman: [8, 15, 22, 35, 50, 65, 78, 90, 110],
    cursor: [3, 6, 12, 20, 32, 48, 63, 80, 95]
};

const labels = [
    "Jan 2025",
    "Feb 2025",
    "Mar 2025",
    "Apr 2025",
    "May 2025",
    "Jun 2025",
    "Jul 2025",
    "Aug 2025",
    "Sep 2025"
];

const ctx = document.getElementById("progressChart").getContext("2d");
const isMobile = window.innerWidth <= 576;
const dpr = window.devicePixelRatio || 1; // ✅ REQUIRED FIX

const gradient = ctx.createLinearGradient(0, 0, isMobile ? 280 : 900, 0);
gradient.addColorStop(0, "#00D9FF");
gradient.addColorStop(0.5, "#00A8CC");
gradient.addColorStop(1, "#FF6B6B");

const startEndTextPlugin = {
    id: "startEndText",
    afterDatasetsDraw(chart) {
        const { ctx, scales } = chart;
        const data = chart.data.datasets[0].data;

        ctx.save();

        // START label
        ctx.font = `400 ${(isMobile ? 10 : 14) / dpr}px 'PP Mori', sans-serif`;
        ctx.fillStyle = "#00d9ff";
        ctx.fillText(
            "START".toUpperCase(),
            scales.x.getPixelForValue(0) - 10,
            scales.y.getPixelForValue(data[0]) - 10
        );
        const endX = scales.x.getPixelForValue(data.length - 1);
        const endY = scales.y.getPixelForValue(data[data.length - 1]);
        // END label
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(
            "Paid Ad Traffic",
            endX - (isMobile ? 40 : 80),
            endY - (isMobile ? 4 : 10)
        );

        ctx.restore();
    }
};

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels,
        datasets: [{
            data: chartData.perplexity,
            borderColor: gradient,
            borderWidth: isMobile ? 2 : 3,
            tension: 0.45,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 600 },
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                bodyFont: { size: (isMobile ? 9 : 12) / dpr },
                titleFont: { size: (isMobile ? 9 : 12) / dpr }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "rgba(255,255,255,0.6)",
                    font: { size: (isMobile ? 9 : 12) / dpr }
                },
                grid: { display: false }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 40,
                    color: "rgba(255,255,255,0.6)",
                    font: { size: (isMobile ? 9 : 12) / dpr }
                },
                border: {
                    dash: [6, 6],
                    color: "rgba(0,217,255,0.4)"
                },
                grid: {
                    // drawBorder: false,
                    // color: "rgba(0,217,255,0.4)",
                    // borderDash: [6, 6]

                    drawBorder: false,
                    borderDash: [6, 6],
                    color: (context) => {
                        // Main axis line (Jan / zero line)
                        if (context.tick.value === 0) {
                            return "rgba(0,217,255,0.4)";
                        }

                        // Other dotted grid lines
                        return isMobile
                            ? "rgba(0,217,255,0.05)"
                            : "rgba(0,217,255,0.1)";
                    }
                }
            }
        }
    },
    plugins: [startEndTextPlugin]
});

// Tab switching logic
document.querySelectorAll("[data-chart]").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach(t =>
            t.classList.remove("active")
        );
        tab.classList.add("active");

        const key = tab.dataset.chart;
        chart.data.datasets[0].data = chartData[key];
        chart.update();
    });
});
