var ranges_EHSrelative = [[0.000000, 0.100000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(247,251,255,1.0)"})})
                        })
                        ]],
[0.100000, 0.200000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(225,237,248,1.0)"})})
                        })
                        ]],
[0.200000, 0.300000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(204,223,241,1.0)"})})
                        })
                        ]],
[0.300000, 0.400000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(175,209,231,1.0)"})})
                        })
                        ]],
[0.400000, 0.500000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(136,190,220,1.0)"})})
                        })
                        ]],
[0.500000, 0.600000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(95,166,209,1.0)"})})
                        })
                        ]],
[0.600000, 0.700000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(61,141,195,1.0)"})})
                        })
                        ]],
[0.700000, 0.800000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(33,113,181,1.0)"})})
                        })
                        ]],
[0.800000, 0.900000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(10,83,158,1.0)"})})
                        })
                        ]],
[0.900000, 1.000000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(8,48,107,1.0)"})})
                        })
                        ]]];
                    var styleCache_EHSrelative={}
                    var style_EHSrelative = function(feature, resolution){
                        var value = feature.get("EHSrelative");
                        var style = ranges_EHSrelative[0][2];
                            for (i = 0; i < ranges_EHSrelative.length; i++){
                                var range = ranges_EHSrelative[i];
                                if (value > range[0] && value<=range[1]){
                                    style =  range[2];
                                }
                            }
                            ;
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_EHSrelative[key]){
                            var text = new ol.style.Text({
                                  font: '8.25px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_EHSrelative[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_EHSrelative[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };