function findFirstElement(event) {
  event.preventDefault();

  var namesInput = document.getElementById('names');
  var resultDiv = document.getElementById('result');

  var namesString = namesInput.value;
  var namesArray = namesString.split(',');

  if (namesArray.length === 0) {
    resultDiv.textContent = 'Please enter at least one name.';
  } else {
    var firstElement = namesArray[0];

    if (firstElement.trim() === '') {
      resultDiv.textContent = 'Please enter valid names.';
    } else {
      resultDiv.textContent = 'The first name is: ' + firstElement;
    }
  }
}