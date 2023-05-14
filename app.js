const button = document.querySelector('#btn');
const qtyDisplay = document.querySelector('.notif-qty');
const notifications = document.querySelectorAll('.notification');

button.addEventListener('click', () => {
    for(let i = 0; i < notifications.length; i++) {
        if(notifications[i].classList.contains('unread')) {
            notifications[i].classList.remove('unread');
        }
    }
    qtyDisplay.textContent = 0;
})

notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        let notifQty = qtyDisplay.textContent;
        if(notification.classList.contains('unread')) {
            notification.classList.remove('unread');
            notifQty--;
        } else {
            notification.classList.add('unread');
            notifQty++;
        }
        qtyDisplay.textContent = notifQty;
    })
})