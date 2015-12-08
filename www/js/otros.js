var My = {
  sqrt: function(x) {
    if (x < 0) {throw new Error("sqrt can't work on negative number");}
		else{
			throw new Error("por el else");
		}
      return Math.exp(Math.log(x)/2);
  },
  canto:function (argument) {
    console.log("memento");
  }
};