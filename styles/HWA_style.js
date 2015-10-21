var ranges_HWA = [[0.000000, 0.258000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(255,245,240,1.0)"})})
                        })
                        ]],
[0.258000, 0.516000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(254,227,214,1.0)"})})
                        })
                        ]],
[0.516000, 0.774000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(252,197,175,1.0)"})})
                        })
                        ]],
[0.774000, 1.032000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(252,163,134,1.0)"})})
                        })
                        ]],
[1.032000, 1.290000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(251,129,97,1.0)"})})
                        })
                        ]],
[1.290000, 1.548000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(247,93,65,1.0)"})})
                        })
                        ]],
[1.548000, 1.806000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(234,54,42,1.0)"})})
                        })
                        ]],
[1.806000, 2.064000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(203,24,29,1.0)"})})
                        })
                        ]],
[2.064000, 2.322000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(168,15,21,1.0)"})})
                        })
                        ]],
[2.322000, 2.580000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(103,0,13,1.0)"})})
                        })
                        ]]];
                    var styleCache_HWA={}
                    var style_HWA = function(feature, resolution){
                        var value = feature.get("HWA");
                        var style = ranges_HWA[0][2];
                            for (i = 0; i < ranges_HWA.length; i++){
                                var range = ranges_HWA[i];
                                if (value > range[0] && value<=range[1]){
                                    style =  range[2];
                                }
                            }
                            ;
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_HWA[key]){
                            var text = new ol.style.Text({
                                  font: '8.25px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_HWA[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_HWA[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };