var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Guzergah2024webmapguzergah2024_1 = new ol.format.GeoJSON();
var features_Guzergah2024webmapguzergah2024_1 = format_Guzergah2024webmapguzergah2024_1.readFeatures(json_Guzergah2024webmapguzergah2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guzergah2024webmapguzergah2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guzergah2024webmapguzergah2024_1.addFeatures(features_Guzergah2024webmapguzergah2024_1);
var lyr_Guzergah2024webmapguzergah2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guzergah2024webmapguzergah2024_1, 
                style: style_Guzergah2024webmapguzergah2024_1,
                popuplayertitle: 'Guzergah2024 — webmapguzergah2024',
                interactive: true,
                title: '<img src="styles/legend/Guzergah2024webmapguzergah2024_1.png" /> Guzergah2024 — webmapguzergah2024'
            });
var format_Noktasal2024webmapnoktasal2024_2 = new ol.format.GeoJSON();
var features_Noktasal2024webmapnoktasal2024_2 = format_Noktasal2024webmapnoktasal2024_2.readFeatures(json_Noktasal2024webmapnoktasal2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noktasal2024webmapnoktasal2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noktasal2024webmapnoktasal2024_2.addFeatures(features_Noktasal2024webmapnoktasal2024_2);
var lyr_Noktasal2024webmapnoktasal2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noktasal2024webmapnoktasal2024_2, 
                style: style_Noktasal2024webmapnoktasal2024_2,
                popuplayertitle: 'Noktasal2024 — webmapnoktasal2024',
                interactive: true,
                title: '<img src="styles/legend/Noktasal2024webmapnoktasal2024_2.png" /> Noktasal2024 — webmapnoktasal2024'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Guzergah2024webmapguzergah2024_1.setVisible(true);lyr_Noktasal2024webmapnoktasal2024_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Guzergah2024webmapguzergah2024_1,lyr_Noktasal2024webmapnoktasal2024_2];
lyr_Guzergah2024webmapguzergah2024_1.set('fieldAliases', {'fid': 'fid', 'ILCE': 'ILCE', 'PROJEADI': 'PROJEADI', 'YIL': 'YIL', 'ProjeNo': 'ProjeNo', 'TIP': 'TIP', });
lyr_Noktasal2024webmapnoktasal2024_2.set('fieldAliases', {'fid': 'fid', 'ILCE': 'ILCE', 'PROJEADI': 'PROJEADI', 'YIL': 'YIL', 'PROJENO': 'PROJENO', 'TIP': 'TIP', });
lyr_Guzergah2024webmapguzergah2024_1.set('fieldImages', {'fid': 'TextEdit', 'ILCE': 'TextEdit', 'PROJEADI': 'TextEdit', 'YIL': 'Range', 'ProjeNo': 'TextEdit', 'TIP': 'TextEdit', });
lyr_Noktasal2024webmapnoktasal2024_2.set('fieldImages', {'fid': 'TextEdit', 'ILCE': 'TextEdit', 'PROJEADI': 'TextEdit', 'YIL': 'Range', 'PROJENO': 'TextEdit', 'TIP': 'TextEdit', });
lyr_Guzergah2024webmapguzergah2024_1.set('fieldLabels', {'fid': 'hidden field', 'ILCE': 'inline label - always visible', 'PROJEADI': 'header label - always visible', 'YIL': 'inline label - always visible', 'ProjeNo': 'inline label - always visible', 'TIP': 'inline label - always visible', });
lyr_Noktasal2024webmapnoktasal2024_2.set('fieldLabels', {'fid': 'hidden field', 'ILCE': 'inline label - always visible', 'PROJEADI': 'header label - always visible', 'YIL': 'inline label - always visible', 'PROJENO': 'inline label - always visible', 'TIP': 'inline label - always visible', });
lyr_Noktasal2024webmapnoktasal2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});