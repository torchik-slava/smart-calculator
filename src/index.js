class SmartCalculator {
  constructor(initialValue) {
    this.arr = [initialValue];    
  }

  add(number) {
    this.arr.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.arr.push('-', number);
    return this;
  }

  multiply(number) {
    this.arr.push('*', number);
    return this;
  }

  devide(number) {
    this.arr.push('/', number);
    return this;
  }

  pow(number) {
    this.arr.push('^', number);
    return this;
  }

  calculate() {
    let result;
    for (let i=this.arr.length-1; i>0; i--){
      if(this.arr[i]==='^'){
        result = Math.pow(this.arr[i-1],this.arr[i+1]);
        this.arr.splice(i,2);
        this.arr[i-1]=result;
      }
    }

    for (let i=0; i<this.arr.length-1; i++){
      if(this.arr[i]==='*'){
        result = this.arr[i-1]*this.arr[i+1];
        this.arr.splice(i,2);
        this.arr[i-1]=result;
      }
    }

    for (let i=0; i<this.arr.length-1; i++){
      if(this.arr[i]==='/'){
        result = this.arr[i-1]/this.arr[i+1];
        this.arr.splice(i,2);
        this.arr[i-1]=result;
      }
    }

    for (let i=0; i<this.arr.length-1; i++){
      if(this.arr[i]==='-'){
        result = this.arr[i-1]-this.arr[i+1];
        this.arr.splice(i,2);
        this.arr[i-1]=result;
      }
    }

    for (let i=0; i<this.arr.length-1; i++){
      if(this.arr[i]==='+'){
        result = this.arr[i-1]+this.arr[i+1];
        this.arr.splice(i,2);
        this.arr[i-1]=result;
      }
    }
    result=this.arr[0]; 
    return result;       
  }
  valueOf () {return this.calculate();}  
}

module.exports = SmartCalculator;
