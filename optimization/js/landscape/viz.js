var lossLandscape = new loss('himmelblaus', 0, 0, d3.select("#contour"));
var optLandscape = new optimizer(lossLandscape, d3.select("#loss"));
lossLandscape.plot();
optLandscape.plot(0);

$("input[name='loss']").on("change", function () {
	$("#reset").click();
	lossLandscape.func = this.value;
    lossLandscape.plot(0);
});

$("input[name='opt']").on("change", function () {
	$("#reset").click();
	var index = optLandscape.rule.indexOf(this.value);
	if (index == -1) {
		optLandscape.rule.push(this.value);
	} else {
		optLandscape.rule.splice(index, 1);
	}
	optLandscape.update();
});

$("input[name='lrate']").on("input", function () {
	$("#reset").click();
	learningRates[$(this).attr('class')] = this.value;
	optLandscape.update();
});

$("input[name='ldecay']").on("input", function () {
	$("#reset").click();
	decayRates[$(this).attr('class')] = this.value;
	optLandscape.update();
});

$("#train").on("click", function () {
	optLandscape.reset();
	optLandscape.train();
	d3.select("#stop").classed("hidden", false);
    d3.select("#train").classed("hidden", true);
});

$("#stop").on("click", function () {
	optLandscape.stop();
	d3.select("#stop").classed("hidden", true);
    d3.select("#train").classed("hidden", false);
});

$("#reset").on("click", function () {
	optLandscape.reset();
	d3.select("#stop").classed("hidden", true);
    d3.select("#train").classed("hidden", false);
});