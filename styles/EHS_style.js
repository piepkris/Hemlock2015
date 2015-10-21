var ranges_EHS = [[0.000000, 0.300000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(247,251,255,1.0)"})})
                        })
                        ]],
[0.300000, 0.600000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(225,237,248,1.0)"})})
                        })
                        ]],
[0.600000, 0.900000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(204,223,241,1.0)"})})
                        })
                        ]],
[0.900000, 1.200000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(175,209,231,1.0)"})})
                        })
                        ]],
[1.200000, 1.500000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(136,190,220,1.0)"})})
                        })
                        ]],
[1.500000, 1.800000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(95,166,209,1.0)"})})
                        })
                        ]],
[1.800000, 2.100000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(61,141,195,1.0)"})})
                        })
                        ]],
[2.100000, 2.400000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(33,113,181,1.0)"})})
                        })
                        ]],
[2.400000, 2.700000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(10,83,158,1.0)"})})
                        })
                        ]],
[2.700000, 3.000000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(8,48,107,1.0)"})})
                        })
                        ]]];
                    var styleCache_EHS={}
                    var style_EHS = function(feature, resolution){
                        var value = feature.get("EHS");
                        var style = ranges_EHS[0][2];
                            for (i = 0; i < ranges_EHS.length; i++){
                                var range = ranges_EHS[i];
                                if (value > range[0] && value<=range[1]){
                                    style =  range[2];
                                }
                            }
                            ;
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_EHS[key]){
                            var text = new ol.style.Text({
                                  font: '8.25px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_EHS[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_EHS[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };