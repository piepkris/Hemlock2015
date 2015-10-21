var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'OSM HOT', source: new ol.source.XYZ({url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'})})]});
var lyr_SSMrelative = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_SSMrelative}), 
                style: style_SSMrelative,
                title: "SSMrelative"
            });
var lyr_EHSrelative = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_EHSrelative}), 
                style: style_EHSrelative,
                title: "EHSrelative"
            });
var lyr_HWArelative = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_HWArelative}), 
                style: style_HWArelative,
                title: "HWArelative"
            });
var lyr_SSM = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_SSM}), 
                style: style_SSM,
                title: "SSM"
            });
var lyr_EHS = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_EHS}), 
                style: style_EHS,
                title: "EHS"
            });
var lyr_HWA = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_HWA}), 
                style: style_HWA,
                title: "HWA"
            });
var lyr_SurveyData = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_SurveyData}), 
                style: style_SurveyData,
                title: "SurveyData"
            });

lyr_SSMrelative.setVisible(true);
lyr_EHSrelative.setVisible(true);
lyr_HWArelative.setVisible(true);
lyr_SSM.setVisible(true);
lyr_EHS.setVisible(true);
lyr_HWA.setVisible(true);
lyr_SurveyData.setVisible(true);
var layersList = [baseLayer,lyr_SSMrelative,lyr_EHSrelative,lyr_HWArelative,lyr_SSM,lyr_EHS,lyr_HWA,lyr_SurveyData];
