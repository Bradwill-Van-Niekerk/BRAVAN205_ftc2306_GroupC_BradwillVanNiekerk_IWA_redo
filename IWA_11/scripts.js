// script.js

// const root1 = document(order1);
//  biscuits1: document(biscuits);
//  donuts1: document(donuts);
//  pancakes1: document(pancakes);
//  status1: document(status);

//  const root2 = document(order2);
//  biscuits2: document(biscuits);
//  donuts2: document(donuts);
//  pancakes2: document(pancakes);
//  status2: document(status);

// const root3 = document(order3);
//  biscuits3: document(biscuits);
//  donuts3: document(donuts);
//  pancakes3: document(pancakes);
//  status3: document(status);

// biscuits1= root1.biscuits,
// donuts1 = root1.donuts,
// pancakes1 = root1.pancakes,
// status1 = root1.status ? Delivered : Pending

// biscuits2= root2.biscuits,
// donuts2 = root2.donuts,
// pancakes2 = root2.pancakes, 
// status2 = root2.status ? Delivered : Pending

// biscuits3= root3.biscuits,
// donuts3 = root3.donuts,
// pancakes3 = root3.pancakes,
// status3 = root3.status ? Delivered : Pending

for (let i = 1; i < 4; i++) {
    const order = document.querySelector(`[data-key="order${i}"]`);
    const biscuits = order.dataset.biscuits;
    const donuts = order.dataset.donuts;
    const pancakes = order.dataset.pancakes;
    const delivered = order.dataset.delivered;
    document.querySelector(`[data-key="order${i}"] .biscuits .count`).innerText = biscuits;
    document.querySelector(`[data-key="order${i}"] .donuts .count`).innerText = donuts;
    document.querySelector(`[data-key="order${i}"] .pancakes .count`).innerText = pancakes;
    orderStatus = delivered === "true" ? "Delivered" : "Pending";
    document.querySelector(`[data-key="order${i}"] .status dd`).innerText = orderStatus;
};