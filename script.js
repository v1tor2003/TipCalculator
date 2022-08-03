function calculateTip(event){
  event.preventDefault()
  let billCost = document.getElementById('bill').value
  parseFloat(billCost)
  let service = document.getElementById('services').value
  let each = document.getElementById('people').value

  let IsServiceEmpty = verifyBill(service)
  
  if(!Boolean(IsServiceEmpty)){
    alert("Please, enter all the values")
    return
  }
  let tip = totalTip(billCost, service, each)

  setPresentation(each)
  document.getElementById('tip').innerHTML = tip
  document.querySelector(".result").style.display = "block"
}

function verifyBill(service){
  if(service == 0)
    return false
  else
    return true 
}

function totalTip(bill, service, each){
  let result = (bill*service)/each;
  return result.toFixed(2)
}

function setPresentation(each){
  if(each == 1)
    document.querySelector('.each').style.display = "none"
  else
    document.querySelector('.each').style.display = "block"
}

document.querySelector(".result").style.display = "none"
document.querySelector(".each").style.display = "none"
document.querySelector(".tipsForm").addEventListener('submit', calculateTip)