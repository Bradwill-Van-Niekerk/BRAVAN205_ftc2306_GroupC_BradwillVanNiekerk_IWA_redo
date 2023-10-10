// scripts.js

// const STATUS_MAP = {
//     shelf: {
//         color: 'green',
//         canReserve: true,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     reserved: {
//         color: 'blue',
//         canReserve: false,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     overdue: {
//         color: 'red',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     },
//     checkedOut: {
//         color: 'orange',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     }
// }

// // Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


for (let i = 1; i < 4; i++) {
    const bookNumber = document.querySelector(`#book${i} .status`);
    const bookStatus = document.querySelector(`#book${i} .status`).innerText;
    bookNumber.style.color = STATUS_MAP[bookStatus]["color"];

    const reserve = document.querySelector(`#book${i} .reserve`);
    const checkout = document.querySelector(`#book${i} .checkout`);
    const checkin = document.querySelector(`#book${i} .checkin`);

    reserve.disabled = STATUS_MAP[bookStatus]["canReserve"] ? false : true;
    checkout.disabled = STATUS_MAP[bookStatus]["canCheckout"] ? false : true;
    checkin.disabled = STATUS_MAP[bookStatus]["canCheckIn"] ? false : true;

    checkin.style.color = "";
};