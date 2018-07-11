class Accumulator{
	private result = 100;

	add(x){
		this.result += x;
	}

	subtract(x){
		this.result -= x;
	}

	multiply(x){
		this.result -= x;
	}

	divide(x){
		this.result -= x;
	}

	getResult(){
		return this.result;
	}
}

module.exports = Accumulator;