function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomColors = Array.from({ length: 64 }, () => getRandomColor());

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
    // Gán lớp màu cho mỗi nút dựa trên mảng màu
    button.style.backgroundColor = randomColors[index];
});

function changeColor(element) {
    const bgc = element.style.backgroundColor;
    document.body.style.backgroundColor = bgc;
}

$(document).ready(function () {
    let i = 1;
    $(".btn").each(function () {
        $(this).text(i);
        i++;
    });
    let a = 1;
    let button = $(".btn");
    button.click(function () {
        let text = $(this).text();
        if(parseInt(text) !== a) {
            alert("Bấm sai!!");
        } else {
            $(this).css("visibility", "hidden");
            a++
        }
    });
});
