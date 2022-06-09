class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerateapi.io/latest?base";
        this.amount = null; 
    }
    exchange(){      
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data =>  {
            const parity = data["rates"][this.secondCurrency];//Atıyorum ki 2 euro 32 lira gibi çeviriyor.
            const amount2 = Number(this.amount);
            let total = parity * amount2;
            //console.log(total);
            resolve(total);
            }) //console.log(data))
            .catch(err => reject(err));
        });   
    }//
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.SecondCurrency = newSecondCurrency;
    }
}