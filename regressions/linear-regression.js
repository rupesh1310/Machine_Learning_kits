const tf = require('@tensorflow/tfjs');
class LinearRegression{
    constructor(features,labels, options) {
        this.features = features;
        this.labels = labels;
        this.options = Object.assign({ LinearRate: 0.1, iterations: 1000}, options);
    }
    train() {
        for (let i = 0; i < this.options.iterations; i++) {
            this.gradientDescent();
        }
    }
}

module.exports = LinearRegression;