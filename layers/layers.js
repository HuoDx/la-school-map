var wms_layers = [];

var format_NumberofSchools_0 = new ol.format.GeoJSON();
var features_NumberofSchools_0 = format_NumberofSchools_0.readFeatures(json_NumberofSchools_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumberofSchools_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofSchools_0.addFeatures(features_NumberofSchools_0);
var lyr_NumberofSchools_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumberofSchools_0, 
                style: style_NumberofSchools_0,
                popuplayertitle: "Number of Schools",
                interactive: false,
    title: 'Number of Schools<br />\
    <img src="styles/legend/NumberofSchools_0_0.png" /> 0 - 1<br />\
    <img src="styles/legend/NumberofSchools_0_1.png" /> 1 - 5<br />\
    <img src="styles/legend/NumberofSchools_0_2.png" /> 5 - 9<br />\
    <img src="styles/legend/NumberofSchools_0_3.png" /> 9 - 15<br />\
    <img src="styles/legend/NumberofSchools_0_4.png" /> 15 - 23<br />\
    <img src="styles/legend/NumberofSchools_0_5.png" /> 23 - 35<br />\
    <img src="styles/legend/NumberofSchools_0_6.png" /> 35 - 50<br />\
    <img src="styles/legend/NumberofSchools_0_7.png" /> 50 - 115<br />\
    <img src="styles/legend/NumberofSchools_0_8.png" /> 115 - 1212<br />'
        });

lyr_NumberofSchools_0.setVisible(true);
var layersList = [lyr_NumberofSchools_0];
lyr_NumberofSchools_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CITY_TYPE': 'CITY_TYPE', 'CITY_NAME': 'CITY_NAME', 'CITY_LABEL': 'CITY_LABEL', 'ABBR': 'ABBR', 'URL': 'URL', 'PHONE': 'PHONE', 'OF_AREA_SM': 'OF_AREA_SM', 'FEAT_TYPE': 'FEAT_TYPE', 'COLOR_EGIS': 'COLOR_EGIS', 'last_edite': 'last_edite', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edi_1': 'last_edi_1', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', 'NUMPOINTS': 'NUMPOINTS', });
lyr_NumberofSchools_0.set('fieldImages', {'OBJECTID': 'Range', 'CITY_TYPE': 'TextEdit', 'CITY_NAME': 'TextEdit', 'CITY_LABEL': 'TextEdit', 'ABBR': 'TextEdit', 'URL': 'TextEdit', 'PHONE': 'TextEdit', 'OF_AREA_SM': 'TextEdit', 'FEAT_TYPE': 'TextEdit', 'COLOR_EGIS': 'TextEdit', 'last_edite': 'DateTime', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edi_1': 'TextEdit', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_NumberofSchools_0.set('fieldLabels', {'OBJECTID': 'no label', 'CITY_TYPE': 'no label', 'CITY_NAME': 'no label', 'CITY_LABEL': 'no label', 'ABBR': 'no label', 'URL': 'no label', 'PHONE': 'no label', 'OF_AREA_SM': 'no label', 'FEAT_TYPE': 'no label', 'COLOR_EGIS': 'no label', 'last_edite': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edi_1': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', 'NUMPOINTS': 'no label', });
lyr_NumberofSchools_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});