// Mảng màu sẽ sử dụng cho các nút
const colors = [
    "red",
    "blue",
    "yellow",
    "gray",
    "green",
    "orange",
    "purple",
    "pink",
    "brown",
    "teal",
    "navy",
    "cyan",
    "lime",
    "violet",
    "magenta",
    "indigo"
  ];
const buttons = document.querySelectorAll(".btn");

// buttons.forEach((button, index) => {
// // Gán lớp màu cho mỗi nút dựa trên mảng màu
//     button.classList.add(`btn-${colors[index]}`);
// });

buttons.forEach((button, index) => {
    // Gán lớp màu cho mỗi nút dựa trên mảng màu
    button.style.backgroundColor = colors[index];
});

function changeColor(element) {
    const bgc = element.style.backgroundColor;
    document.body.style.backgroundColor = bgc;
}
