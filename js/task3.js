const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    return new Promise((resolve, reject) => {
        const { id } = transaction;
        const delay = randomIntegerFromInterval(200, 500);
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            
            if (canProcess) {
                resolve({id, delay});
            } 
                reject(id);
            
        }, delay)
    })
};
const logSuccess = ({id, delay}) => {
    document.body.insertAdjacentHTML('beforeend', `<p>✅ Transaction ${id} processed in ${delay}ms</p>`)
    console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
    document.body.insertAdjacentHTML('beforeend', `<p style="color: red">❌ Error processing transaction ${id}. Please try again later.`)
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);