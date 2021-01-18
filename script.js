let og = document.getElementById('og')
let newWeight = document.getElementById('new')
let kgToLb = () => {
    let value = document.getElementById('weight').value;
    og.innerText = value
    newWeight.innerText = (value * 2.2046226218).toFixed(2)
}
let lbToKg = () => {
    let value = document.getElementById('weight').value;
    og.innerText = value
    newWeight.innerText = (value / 2.2046226218).toFixed(2)
}