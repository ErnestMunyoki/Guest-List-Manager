const guestForm = document.getElementById('guestform');
const guestInput = document.getElementById('nameinput');
const guestList = document.getElementById('guestls');

let guestCount = 0;
const guestLimit = 10;
guestForm.addEventListener('submit', function (event) {
  event.preventDefault();
    const name = guestInput.value;

  if (!name) {
    alert('Please enter a guest name.');
    return;
  }
   if (guestCount >= guestLimit) {
    alert('Guest list is full (10 people max).');
    return;
}
const listGuest= document.createElement('li');
  listGuest.classList.add('listGuest');

   const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  nameSpan.classList.add('guest-name');

 const rsvpButton = document.createElement('button');
  rsvpButton.textContent = 'Not Attending';
  rsvpButton.classList.add('rsvp-button');

 const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');

rsvpButton.addEventListener('click', function () {
    if (rsvpButton.textContent === 'Attending') {
      rsvpButton.textContent = 'Not Attending';
      listGuest.classList.remove('attending');
    } else {
      rsvpButton.textContent = 'Attending';
      listGuest.classList.add('attending');
    }
  });
 removeButton.addEventListener('click', function () {
    guestList.removeChild(listGuest);
    guestCount--;
  });

  listGuest.appendChild(nameSpan);
  listGuest.appendChild(rsvpButton);
  listGuest.appendChild(removeButton);
  guestList.appendChild(listGuest);

  guestInput.value = ''; 
  guestCount++;
});