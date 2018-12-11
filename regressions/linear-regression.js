const tf = require('@tensorflow/tfjs');
class LinearRegression{
    constructor(features,labels, options) {
        this.features = features;
        this.labels = labels;
    }
}

module.exports = LinearRegression;