var ranges_SurveyData = [[0.000000, 0.622000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(255,245,235,1.0)"})})
                        })
                        ]],
[0.622000, 1.244000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(254,232,210,1.0)"})})
                        })
                        ]],
[1.244000, 1.866000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(253,214,174,1.0)"})})
                        })
                        ]],
[1.866000, 2.488000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(253,188,130,1.0)"})})
                        })
                        ]],
[2.488000, 3.110000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(253,160,87,1.0)"})})
                        })
                        ]],
[3.110000, 3.732000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(249,131,48,1.0)"})})
                        })
                        ]],
[3.732000, 4.354000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(237,100,16,1.0)"})})
                        })
                        ]],
[4.354000, 4.976000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(217,72,1,1.0)"})})
                        })
                        ]],
[4.976000, 5.598000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(170,55,2,1.0)"})})
                        })
                        ]],
[5.598000, 6.220000, [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(127,39,4,1.0)"})})
                        })
                        ]]];
                    var styleCache_SurveyData={}
                    var style_SurveyData = function(feature, resolution){
                        var value = feature.get("Total");
                        var style = ranges_SurveyData[0][2];
                            for (i = 0; i < ranges_SurveyData.length; i++){
                                var range = ranges_SurveyData[i];
                                if (value > range[0] && value<=range[1]){
                                    style =  range[2];
                                }
                            }
                            ;
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_SurveyData[key]){
                            var text = new ol.style.Text({
                                  font: '8.25px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_SurveyData[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_SurveyData[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };