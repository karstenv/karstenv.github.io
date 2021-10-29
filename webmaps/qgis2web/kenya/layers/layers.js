var wms_layers = [];

var format_SoilsFAOclassfication_0 = new ol.format.GeoJSON();
var features_SoilsFAOclassfication_0 = format_SoilsFAOclassfication_0.readFeatures(json_SoilsFAOclassfication_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoilsFAOclassfication_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoilsFAOclassfication_0.addFeatures(features_SoilsFAOclassfication_0);
var lyr_SoilsFAOclassfication_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SoilsFAOclassfication_0, 
                style: style_SoilsFAOclassfication_0,
                interactive: true,
    title: 'Soils FAO classfication<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_0.png" /> Acrisols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_1.png" /> Arenosols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_2.png" /> Cambisols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_3.png" /> Ferrasols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_4.png" /> Gleysols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_5.png" /> Lixisols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_6.png" /> Luvisols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_7.png" /> Nitisols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_8.png" /> Planosols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_9.png" /> Regosols<br />\
    <img src="styles/legend/SoilsFAOclassfication_0_10.png" /> Vertisols<br />'
        });
var format_kenya_wetlands_1 = new ol.format.GeoJSON();
var features_kenya_wetlands_1 = format_kenya_wetlands_1.readFeatures(json_kenya_wetlands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_wetlands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_wetlands_1.addFeatures(features_kenya_wetlands_1);
var lyr_kenya_wetlands_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kenya_wetlands_1, 
                style: style_kenya_wetlands_1,
                interactive: true,
                title: '<img src="styles/legend/kenya_wetlands_1.png" /> kenya_wetlands'
            });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                interactive: true,
    title: 'roads<br />\
    <img src="styles/legend/roads_2_0.png" /> primary<br />\
    <img src="styles/legend/roads_2_1.png" /> primary_link<br />\
    <img src="styles/legend/roads_2_2.png" /> secondary<br />\
    <img src="styles/legend/roads_2_3.png" /> secondary_link<br />\
    <img src="styles/legend/roads_2_4.png" /> <br />'
        });
var format_kenya_rivers_3 = new ol.format.GeoJSON();
var features_kenya_rivers_3 = format_kenya_rivers_3.readFeatures(json_kenya_rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_rivers_3.addFeatures(features_kenya_rivers_3);
var lyr_kenya_rivers_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kenya_rivers_3, 
                style: style_kenya_rivers_3,
                interactive: true,
                title: '<img src="styles/legend/kenya_rivers_3.png" /> kenya_rivers'
            });
var format_waterways_4 = new ol.format.GeoJSON();
var features_waterways_4 = format_waterways_4.readFeatures(json_waterways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterways_4.addFeatures(features_waterways_4);
var lyr_waterways_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterways_4, 
                style: style_waterways_4,
                interactive: true,
                title: '<img src="styles/legend/waterways_4.png" /> waterways'
            });
var format_railways_5 = new ol.format.GeoJSON();
var features_railways_5 = format_railways_5.readFeatures(json_railways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_5.addFeatures(features_railways_5);
var lyr_railways_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railways_5, 
                style: style_railways_5,
                interactive: true,
                title: '<img src="styles/legend/railways_5.png" /> railways'
            });
var format_Districts_6 = new ol.format.GeoJSON();
var features_Districts_6 = format_Districts_6.readFeatures(json_Districts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_6.addFeatures(features_Districts_6);
var lyr_Districts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districts_6, 
                style: style_Districts_6,
                interactive: true,
                title: '<img src="styles/legend/Districts_6.png" /> Districts'
            });
var group_Riversandtransport = new ol.layer.Group({
                                layers: [lyr_roads_2,lyr_kenya_rivers_3,lyr_waterways_4,lyr_railways_5,],
                                title: "Rivers and transport"});
var group_Naturalresources = new ol.layer.Group({
                                layers: [lyr_SoilsFAOclassfication_0,lyr_kenya_wetlands_1,],
                                title: "Natural resources"});

lyr_SoilsFAOclassfication_0.setVisible(true);lyr_kenya_wetlands_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_kenya_rivers_3.setVisible(true);lyr_waterways_4.setVisible(true);lyr_railways_5.setVisible(true);lyr_Districts_6.setVisible(true);
var layersList = [group_Naturalresources,group_Riversandtransport,lyr_Districts_6];
lyr_SoilsFAOclassfication_0.set('fieldAliases', {'FID_': 'FID_', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KEN2_': 'KEN2_', 'SUID': 'SUID', 'TCDC': 'TCDC', 'SCDL': 'SCDL', 'SCFM': 'SCFM', 'TEXT': 'TEXT', 'BEDR': 'BEDR', 'SDRA': 'SDRA', 'TCID': 'TCID', 'SCID': 'SCID', 'PROP': 'PROP', 'PRID': 'PRID', 'PHAQ': 'PHAQ', 'PHKC': 'PHKC', 'EXMG': 'EXMG', 'EXNA': 'EXNA', 'EXCK': 'EXCK', 'CECS': 'CECS', 'CLAY': 'CLAY', 'PDID': 'PDID', 'DRAI': 'DRAI', 'RKSC': 'RKSC', 'ERTY': 'ERTY', 'ERAA': 'ERAA', 'ERDE': 'ERDE', 'SCAP': 'SCAP', 'RDEP': 'RDEP', 'SLOP': 'SLOP', 'RELI': 'RELI', 'LNDF': 'LNDF', 'RSLO': 'RSLO', 'LITH': 'LITH', 'SOIL': 'SOIL', 'LUSE': 'LUSE', 'SID': 'SID', 'PHASE': 'PHASE', 'SOCLSS': 'SOCLSS', 'SLOPE': 'SLOPE', 'RESLOPE': 'RESLOPE', 'FERT': 'FERT', 'SOILCLSS': 'SOILCLSS', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_kenya_wetlands_1.set('fieldAliases', {'KENWETLAND': 'KENWETLAND', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WETLANDS_': 'WETLANDS_', 'WETLANDS_I': 'WETLANDS_I', 'CLASS': 'CLASS', 'CLASSTX': 'CLASSTX', 'NAME': 'NAME', 'DESCRIP': 'DESCRIP', });
lyr_roads_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', });
lyr_kenya_rivers_3.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'KLRIVERS_': 'KLRIVERS_', 'KLRIVERS_I': 'KLRIVERS_I', });
lyr_waterways_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_railways_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Districts_6.set('fieldAliases', {'DISTNAME': 'DISTNAME', });
lyr_SoilsFAOclassfication_0.set('fieldImages', {'FID_': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KEN2_': 'TextEdit', 'SUID': 'TextEdit', 'TCDC': 'TextEdit', 'SCDL': 'TextEdit', 'SCFM': 'TextEdit', 'TEXT': 'TextEdit', 'BEDR': 'TextEdit', 'SDRA': 'TextEdit', 'TCID': 'TextEdit', 'SCID': 'TextEdit', 'PROP': 'TextEdit', 'PRID': 'TextEdit', 'PHAQ': 'TextEdit', 'PHKC': 'TextEdit', 'EXMG': 'TextEdit', 'EXNA': 'TextEdit', 'EXCK': 'TextEdit', 'CECS': 'TextEdit', 'CLAY': 'TextEdit', 'PDID': 'TextEdit', 'DRAI': 'TextEdit', 'RKSC': 'TextEdit', 'ERTY': 'TextEdit', 'ERAA': 'TextEdit', 'ERDE': 'TextEdit', 'SCAP': 'TextEdit', 'RDEP': 'TextEdit', 'SLOP': 'TextEdit', 'RELI': 'TextEdit', 'LNDF': 'TextEdit', 'RSLO': 'TextEdit', 'LITH': 'TextEdit', 'SOIL': 'TextEdit', 'LUSE': 'TextEdit', 'SID': 'TextEdit', 'PHASE': 'TextEdit', 'SOCLSS': 'TextEdit', 'SLOPE': 'TextEdit', 'RESLOPE': 'TextEdit', 'FERT': 'TextEdit', 'SOILCLSS': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_kenya_wetlands_1.set('fieldImages', {'KENWETLAND': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WETLANDS_': 'TextEdit', 'WETLANDS_I': 'TextEdit', 'CLASS': 'TextEdit', 'CLASSTX': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIP': 'TextEdit', });
lyr_roads_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'maxspeed': 'TextEdit', });
lyr_kenya_rivers_3.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'KLRIVERS_': 'TextEdit', 'KLRIVERS_I': 'TextEdit', });
lyr_waterways_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'TextEdit', });
lyr_railways_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Districts_6.set('fieldImages', {'DISTNAME': 'TextEdit', });
lyr_SoilsFAOclassfication_0.set('fieldLabels', {});
lyr_kenya_wetlands_1.set('fieldLabels', {});
lyr_roads_2.set('fieldLabels', {});
lyr_kenya_rivers_3.set('fieldLabels', {});
lyr_waterways_4.set('fieldLabels', {});
lyr_railways_5.set('fieldLabels', {});
lyr_Districts_6.set('fieldLabels', {'DISTNAME': 'inline label', });
lyr_Districts_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});