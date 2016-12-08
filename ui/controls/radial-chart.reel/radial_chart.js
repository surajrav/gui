var Component = require("montage/ui/component").Component,
    d3 = require("d3");

exports.RadialChart = Component.specialize(/** @lends Chart# */ {
    OPTIONS: {
        value: {
            updatePeriod: {
                defaultValue: 10000,
                minimum: 500
            },
            showLegend: {
                defaultValue: false
            },
            showControls: {
                defaultValue: false
            },
            showTotalInTooltip: {
                defaultValue: false
            },
            useGuideline: {
                  defaultValue: false
            },
            transitionDuration: {
                defaultValue: 0
            },
            showMinMax: {
                defaultValue: false
            },
            isSunburst: {
                defaultValue: false
            }
        }
    },

    _updateInterval: {
        value: null
    },

    _chart: {
        value: null
    },

    _datasets: {
        value: null
    },

    constructor: {
        value: function() {
            this._datasets = {};
        }
    },

    _getOptionValue: {
        value: function(optionName) {
            var optionDefinition = this.OPTIONS[optionName],
                realValue = this[optionName];
            if (optionDefinition) {
                var minimum = optionDefinition.minimum,
                    maximum = optionDefinition.maximum,
                    list = optionDefinition.list;
                if (typeof realValue == 'undefined' || (typeof realValue == 'object' && !realValue)) {
                    realValue = optionDefinition.defaultValue;
                } else {
                    if (typeof minimum != 'undefined') {
                        realValue = Math.max(realValue, minimum);
                    }
                    if (typeof maximum != 'undefined') {
                        realValue = Math.min(realValue, maximum);
                    }
                    if (typeof list != 'undefined') {
                        if (list.indexOf(realValue) == -1) {
                            realValue = optionDefinition.defaultValue;
                        }
                    }
                }
            }
            return realValue;
        }
    }
});
