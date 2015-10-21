var ranges_SSM = [[0.000000, 0.180000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(247,252,245,1.0)"})})
                        })
                        ]],
[0.180000, 0.360000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(231,246,227,1.0)"})})
                        })
                        ]],
[0.360000, 0.540000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(207,236,201,1.0)"})})
                        })
                        ]],
[0.540000, 0.720000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(177,223,171,1.0)"})})
                        })
                        ]],
[0.720000, 0.900000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(142,208,139,1.0)"})})
                        })
                        ]],
[0.900000, 1.080000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(102,189,111,1.0)"})})
                        })
                        ]],
[1.080000, 1.260000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(61,166,89,1.0)"})})
                        })
                        ]],
[1.260000, 1.440000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(35,139,69,1.0)"})})
                        })
                        ]],
[1.440000, 1.620000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(3,111,46,1.0)"})})
                        })
                        ]],
[1.620000, 1.800000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(0,68,27,1.0)"})})
                        })
                        ]]];
                    var styleCache_SSM={}
                    var style_SSM = function(feature, resolution){
                        var value = feature.get("SSM");
                        var style = ranges_SSM[0][2];
                            for (i = 0; i < ranges_SSM.length; i++){
                                var range = ranges_SSM[i];
                                if (value > range[0] && value<=range[1]){
                                    style =  range[2];
                                }
                            }
                            ;
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_SSM[key]){
                            var text = new ol.style.Text({
                                  font: '8.25px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_SSM[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_SSM[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };