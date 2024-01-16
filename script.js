const weightinput = document.getElementById("weight")
const heightinput = document.getElementById("height")
const resultDisplay = document.getElementById("result");
const submit = document.getElementById("sub")
const obesitylvl = document.getElementById("comment")
const yay = new Audio('soundeffects/yay-6326.mp3');

sub.addEventListener('click', function() {
    const weight = parseFloat(weightinput.value);
    const height = parseFloat(heightinput.value)
    var bmi =  weight / (height * height)

    resultDisplay.textContent =  bmi.toFixed(1); // toFixed(2) limits decimal places to 2

    if (bmi < 16) {
        obesitylvl.textContent = ("alles ok? du wiegst viel zu wenig D:")
    }

    if (bmi >= 16 && bmi <= 18.5 ) {
        obesitylvl.textContent = (" du wiegst ETWAS zu wenig. :(")        
    }
        
    if (bmi >= 18.5 && bmi <= 25) {
        obesitylvl.textContent = ("Normalgewicht. alles gut")

        setTimeout(() => {
            yay.play();
            
        }, 650);

    }
    if (bmi >= 25 && bmi <= 30) {
        obesitylvl.textContent = ("du wiegst ETWAS zu viel, also alles gut, noch kannst du ins gym ")
    } 

    if (bmi > 30) {
        obesitylvl.textContent = ("DU FETTSACK DAS IST VIEL ZU VIEL!!!!!!")
    } 
});
 
