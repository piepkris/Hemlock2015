var ranges_SSMrelative = [[0.000000, 0.100000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(247,252,245,1.0)"})})
                        })
                        ]],
[0.100000, 0.200000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(231,246,227,1.0)"})})
                        })
                        ]],
[0.200000, 0.300000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(207,236,201,1.0)"})})
                        })
                        ]],
[0.300000, 0.400000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(177,223,171,1.0)"})})
                        })
                        ]],
[0.400000, 0.500000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(142,208,139,1.0)"})})
                        })
                        ]],
[0.500000, 0.600000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(102,189,111,1.0)"})})
                        })
                        ]],
[0.600000, 0.700000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(61,166,89,1.0)"})})
                        })
                        ]],
[0.700000, 0.800000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(35,139,69,1.0)"})})
                        })
                        ]],
[0.800000, 0.900000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(3,111,46,1.0)"})})
                        })
                        ]],
[0.900000, 1.000000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(0,68,27,1.0)"})})
                        })
                        ]]];
                    var styleCache_SSMrelative={}
                    var style_SSMrelative = function(feature, resolution){
                        var value = feature.get("SSMrelative");
                        var style = ranges_SSMrelative[0][2];
                            for (i = 0; i < ranges_SSMrelative.length; i++){
                                var range = ranges_SSMrelative[i];
                                if (value > range[0] && value<=range[1]){
                                    style =  range[2];
                                }
                            }
                            ;
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_SSMrelative[key]){
                            var text = new ol.style.Text({
                                  font: '8.25px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_SSMrelative[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_SSMrelative[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };