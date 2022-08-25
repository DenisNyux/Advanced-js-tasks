class Calculator {
    constructor(...args) {
      if (args.length === 2) {
        this.setX(args[0]);
        this.setY(args[1]);
      } else {
        throw new Error("Constructor takes only 2 parameters");
      }
    }
  
    setX = (val) => {
      if (typeof val === "number" && this.checkNumber(val)) {
        this.numX = val;
      } else {
        throw new Error("Argument is not valid number");
      }
    };
  
    setY = (val) => {
      if (typeof val === "number" && this.checkNumber(val)) {
        this.numY = val;
      } else {
        throw new Error("Argument is not a valid number");
      }
    };
  
    checkNumber = (val) => {
      return typeof val === "number" && isFinite(val) && !isNaN(val);
    };
  
    logSum = () => {
      console.log(this.numX + this.numY);
    };
  
    logMul = () => {
      console.log(this.numX * this.numY);
    };
  
    logSub = () => {
      console.log(this.numX - this.numY);
    };
  
    logDiv = () => {
      if (this.numY === 0) {
        throw new Error("Cannot divide by 0");
      } else {
        console.log(this.numX / this.numY);
      }
    };
  }
  
  const calculator = new Calculator(12, 3);
  calculator.logSum();
  calculator.logDiv();
  calculator.setX(15);
  calculator.logDiv();
  const logCalculatorDiv = calculator.logDiv;
  logCalculatorDiv(); // 5
  // console.log(calc);
  