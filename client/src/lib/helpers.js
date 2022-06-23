const helpers = {}

helpers.calcBalance = (data) => {  
  let balance = 0
  data.map( entry => {
      if (entry.type === 'income') {
        balance += Number(entry.amount)
      }
      if (entry.type === 'expense') {
        balance -= Number(entry.amount)
      }  
    return (balance)    
  })  
  return (balance.toFixed(2))
}

helpers.getLastTenEntries = (data) => {
 const lastTenEntries = data.reverse().slice(0,10) 
 return (lastTenEntries)
}

export default helpers
