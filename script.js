document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("myButton");
    var myWindow = document.getElementById("myWindow");

    myButton.addEventListener("click", function() {
        var polvalue = document.getElementById("inp1").value;
        var peoplevalue = document.getElementById("inp3").value;
        var datevalue = document.getElementById("inp2").value;
        var emailvalue = document.getElementById("inp4").value;

        myWindow.innerHTML = "<h2>Для Вас сегодня всё бесплатно!</h2><p>Здравствуйте! Вы выбрали кафедру: " + polvalue + ", количество людей: " + peoplevalue + ", дату: " + datevalue + ", Ваш электронный адрес: " + emailvalue + "</p><button id=\"closeButton\">Закрыть</button>";
        myWindow.style.display = "block";
    });

    var closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function() {
        myWindow.style.display = "none";
    });
});