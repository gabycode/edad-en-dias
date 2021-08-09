function ageInDays() {
    var birthYear = prompt ('¿En que año naciste wn?');
    var ageInDayss = (2021 - birthYear) * 365;
    console.log(ageInDayss);
    var h1 = document.createElement ('h1');
    var textAnswer = document.createTextNode ('Tu tiene ' + ageInDayss + ' dias aproximadamente jijij ')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
