
function count() {
    var field = document.getElementById('tfield').value;
    const area = document.getElementById('tarea').value;
    var count = 0;
    var regex = RegExp(field,'g');
    var count = area.match(regex);
    var rs = count ? count.length : 0;
    alert("Số lần xuất hiện: " + rs);
}   