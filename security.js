function analyzeSecurity(observations) {
    return observations.reduce(function (totals, current) { return ({
        truePositive: totals.truePositive + current.truePositive,
        falsePositive: totals.falsePositive + current.falsePositive,
        trueNegative: totals.trueNegative + current.trueNegative,
        falseNegative: totals.falseNegative + current.falseNegative,
    }); }, {
        truePositive: 0, falsePositive: 0, trueNegative: 0, falseNegative: 0,
    });
}
// Example usage:
console.log(analyzeSecurity([
    {
        truePositive: 1, falsePositive: 4, trueNegative: 8, falseNegative: 2,
    },
    {
        truePositive: 2, falsePositive: 4, trueNegative: 16, falseNegative: 1,
    },
]));
