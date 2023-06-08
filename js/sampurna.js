    var json_poi_13 = {"type":"FeatureCollection","name":"poi_13","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"id":"1","2yrs Depth":0.19,"10yr Depth":0.26,"50yr Depth":0.3,"100yrs Dep":0.31,"Location":"Lagankhel"},"geometry":{"type":"Point","coordinates":[85.323413991128874,27.667400472275414]}}]}


    var highlightLayer;
    function highlightFeature(e) {
                highlightLayer = e.target;
                highlightLayer.openPopup();
            }

            var map = L.map('map', {
                zoomControl:true, maxZoom:18, minZoom:14
            }).fitBounds([[27.652676694874124,85.29601111951571],[27.68689909210162,85.3596569111411]]);
            var hash = new L.Hash(map);
            map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
            var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
            var bounds_group = new L.featureGroup([]);
            function setBounds() {
            }

            map.createPane('pane_OpenStreetMap_0');
            map.getPane('pane_OpenStreetMap_0').style.zIndex = 400;
            var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                pane: 'pane_OpenStreetMap_0',
                opacity: 1.0,
                attribution: '',
                minZoom: 8,
                maxZoom: 18,
                minNativeZoom: 0,
                maxNativeZoom: 19
            });
            layer_OpenStreetMap_0;
            map.addLayer(layer_OpenStreetMap_0);

            map.createPane('pane_2yrs_depth_12');
            map.getPane('pane_2yrs_depth_12').style.zIndex = 412;
            var img_2yrs_depth_12 = 'data/2yrs_depth_12.png';
            var img_bounds_2yrs_depth_12 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
            var layer_2yrs_depth_12 = new L.imageOverlay(img_2yrs_depth_12,
                                                img_bounds_2yrs_depth_12,
                                                {pane: 'pane_2yrs_depth_12'});
            bounds_group.addLayer(layer_2yrs_depth_12);
            map.addLayer(layer_2yrs_depth_12); 

            function pop_poi_13(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2yrs Depth</th>\
                        <td>' + (feature.properties['2yrs Depth'] !== null ? autolinker.link(feature.properties['2yrs Depth'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">10yr Depth</th>\
                        <td>' + (feature.properties['10yr Depth'] !== null ? autolinker.link(feature.properties['10yr Depth'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">50yr Depth</th>\
                        <td>' + (feature.properties['50yr Depth'] !== null ? autolinker.link(feature.properties['50yr Depth'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">100yrs Dep</th>\
                        <td>' + (feature.properties['100yrs Dep'] !== null ? autolinker.link(feature.properties['100yrs Dep'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Location</strong><br />' + (feature.properties['Location'] !== null ? autolinker.link(feature.properties['Location'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_poi_13_0() {
            return {
                pane: 'pane_poi_13',
                radius: 11.200000000000003,
                opacity: 1,
                color: 'rgba(61,128,53,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(84,176,74,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_poi_13');
        map.getPane('pane_poi_13').style.zIndex = 413;
        map.getPane('pane_poi_13').style['mix-blend-mode'] = 'normal';
        var layer_poi_13 = new L.geoJson(json_poi_13, {
            attribution: '',
            interactive: true,
            dataVar: 'json_poi_13',
            layerName: 'layer_poi_13',
            pane: 'pane_poi_13',
            onEachFeature: pop_poi_13,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_poi_13_0(feature));
            },
        });
        bounds_group.addLayer(layer_poi_13);
        map.addLayer(layer_poi_13);
        
        // document.getElementById("depth").style.display = "block";
                
        
            

            
            

                
            var layerSelect = document.getElementById('display_info');
            layerSelect.addEventListener('change', function() {
            var selectedLayer = layerSelect.value;
            console.log(selectedLayer);
            
            // var blocks = document.getElementsByClassName("index");
            // for (let i = 0; i < blocks.length; i++) {
            //     blocks[i].style.display = "none";}
            // const elements = document.getElementsByClassName("index");
            // for (let i = 0; i < elements.length; i++) {
            //     elements[i].style.display = "none";
            // }

            // if (selectedLayer ==='2_depth' || selectedLayer ==='10_depth'|| selectedLayer ==='50_depth' || selectedLayer ==='100_depth') {
            //     //document.getElementsByClassName("index").style.display = "none";
            //     document.getElementById("depth").style.display = "block";
                
            // }

            // if (selectedLayer == '2_velocity' || selectedLayer == '10_velocity' || selectedLayer == '50_velocity' || selectedLayer == '100_velocity') {
            //     document.getElementById("depth").style.display = "none";
            //     document.getElementById("velocity").style.display = "block";
            //     document.getElementById("extent").style.display = "none";
            // }

            // if (selectedLayer='extent_surface') {
            //     document.getElementById("depth").style.display = "none";
            //     document.getElementById("velocity").style.display = "none";
            //     document.getElementById("extent").style.display = "block";
            // }



                
        // Remove existing layer from the map
            map.eachLayer(function(layer) {
            if (layer != selectedLayer && layer != layer_OpenStreetMap_0) {
                
                map.removeLayer(layer);

                map.createPane('pane_poi_13');
                map.getPane('pane_poi_13').style.zIndex = 413;
                map.getPane('pane_poi_13').style['mix-blend-mode'] = 'normal';
                var layer_poi_13 = new L.geoJson(json_poi_13, {
                    attribution: '',
                    interactive: true,
                    dataVar: 'json_poi_13',
                    layerName: 'layer_poi_13',
                    pane: 'pane_poi_13',
                    onEachFeature: pop_poi_13,
                    pointToLayer: function (feature, latlng) {
                        var context = {
                            feature: feature,
                            variables: {}
                        };
                        return L.circleMarker(latlng, style_poi_13_0(feature));
                    },
                });
                bounds_group.addLayer(layer_poi_13);
                map.addLayer(layer_poi_13);
                        
                        }
                    });
            
            
        

            if (selectedLayer === '100_velocity') {
            // Add Layer 1
            map.createPane('pane_100yrs_velocity_1');
            map.getPane('pane_100yrs_velocity_1').style.zIndex = 401;
            var img_100yrs_velocity_1 = 'data/100yrs_velocity_1.png';
            var img_bounds_100yrs_velocity_1 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
            var layer_100yrs_velocity_1 = new L.imageOverlay(img_100yrs_velocity_1,
                                                img_bounds_100yrs_velocity_1,
                                                {pane: 'pane_100yrs_velocity_1'});
            bounds_group.addLayer(layer_100yrs_velocity_1);
            map.addLayer(layer_100yrs_velocity_1);

            } else if (selectedLayer === '50_velocity') {
                // Add Layer 2
                map.createPane('pane_50yrs_velocity_2');
                map.getPane('pane_50yrs_velocity_2').style.zIndex = 402;
                var img_50yrs_velocity_2 = 'data/50yrs_velocity_2.png';
                var img_bounds_50yrs_velocity_2 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
                var layer_50yrs_velocity_2 = new L.imageOverlay(img_50yrs_velocity_2,
                                                    img_bounds_50yrs_velocity_2,
                                                    {pane: 'pane_50yrs_velocity_2'});
                bounds_group.addLayer(layer_50yrs_velocity_2);
                map.addLayer(layer_50yrs_velocity_2);

            } else if (selectedLayer === '10_velocity') {
                // Add Layer 3
                map.createPane('pane_10yrs_velocity_3');
                map.getPane('pane_10yrs_velocity_3').style.zIndex = 403;
                var img_10yrs_velocity_3 = 'data/10yrs_velocity_3.png';
                var img_bounds_10yrs_velocity_3 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
                var layer_10yrs_velocity_3 = new L.imageOverlay(img_10yrs_velocity_3,
                                                    img_bounds_10yrs_velocity_3,
                                                    {pane: 'pane_10yrs_velocity_3'});
                bounds_group.addLayer(layer_10yrs_velocity_3);
                map.addLayer(layer_10yrs_velocity_3);

            } else if (selectedLayer === '2_velocity') {
                // Add Layer 3
                map.createPane('pane_2yrs_velocity_4');
                map.getPane('pane_2yrs_velocity_4').style.zIndex = 404;
                var img_2yrs_velocity_4 = 'data/2yrs_velocity_4.png';
                var img_bounds_2yrs_velocity_4 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
                var layer_2yrs_velocity_4 = new L.imageOverlay(img_2yrs_velocity_4,
                                                    img_bounds_2yrs_velocity_4,
                                                    {pane: 'pane_2yrs_velocity_4'});
                bounds_group.addLayer(layer_2yrs_velocity_4);
                map.addLayer(layer_2yrs_velocity_4);

            } else if (selectedLayer === 'extent_surface') {
                // Add Layer 3
                map.createPane('pane_2yrs_depth_mono_8');
                map.getPane('pane_2yrs_depth_mono_8').style.zIndex = 408;
                var img_2yrs_depth_mono_8 = 'data/2yrs_depth_mono_8.png';
                var img_bounds_2yrs_depth_mono_8 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
                var layer_2yrs_depth_mono_8 = new L.imageOverlay(img_2yrs_depth_mono_8,
                                                    img_bounds_2yrs_depth_mono_8,
                                                    {pane: 'pane_2yrs_depth_mono_8'});
                bounds_group.addLayer(layer_2yrs_depth_mono_8);
                map.addLayer(layer_2yrs_depth_mono_8);

                map.createPane('pane_10yrs_depth_mono_7');
                map.getPane('pane_10yrs_depth_mono_7').style.zIndex = 407;
                var img_10yrs_depth_mono_7 = 'data/10yrs_depth_mono_7.png';
                var img_bounds_10yrs_depth_mono_7 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
                var layer_10yrs_depth_mono_7 = new L.imageOverlay(img_10yrs_depth_mono_7,
                                                    img_bounds_10yrs_depth_mono_7,
                                                    {pane: 'pane_10yrs_depth_mono_7'});
                bounds_group.addLayer(layer_10yrs_depth_mono_7);
                map.addLayer(layer_10yrs_depth_mono_7);

                map.createPane('pane_50yrs_depth_mono_6');
                map.getPane('pane_50yrs_depth_mono_6').style.zIndex = 406;
                var img_50yrs_depth_mono_6 = 'data/50yrs_depth_mono_6.png';
                var img_bounds_50yrs_depth_mono_6 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
                var layer_50yrs_depth_mono_6 = new L.imageOverlay(img_50yrs_depth_mono_6,
                                                    img_bounds_50yrs_depth_mono_6,
                                                    {pane: 'pane_50yrs_depth_mono_6'});
                bounds_group.addLayer(layer_50yrs_depth_mono_6);
                map.addLayer(layer_50yrs_depth_mono_6);

                map.createPane('pane_100yrs_depth_mono_5');
                map.getPane('pane_100yrs_depth_mono_5').style.zIndex = 405;
                var img_100yrs_depth_mono_5 = 'data/100yrs_depth_mono_5.png';
                var img_bounds_100yrs_depth_mono_5 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
                var layer_100yrs_depth_mono_5 = new L.imageOverlay(img_100yrs_depth_mono_5,
                                                    img_bounds_100yrs_depth_mono_5,
                                                    {pane: 'pane_100yrs_depth_mono_5'});
                bounds_group.addLayer(layer_100yrs_depth_mono_5);
                map.addLayer(layer_100yrs_depth_mono_5);

            } else if (selectedLayer === '100_depth') {
                // Add Layer 3
                map.createPane('pane_100yrs_depth_9');
                map.getPane('pane_100yrs_depth_9').style.zIndex = 409;
                var img_100yrs_depth_9 = 'data/100yrs_depth_9.png';
                var img_bounds_100yrs_depth_9 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
                var layer_100yrs_depth_9 = new L.imageOverlay(img_100yrs_depth_9,
                                            img_bounds_100yrs_depth_9,
                                                    {pane: 'pane_100yrs_depth_9'});
                bounds_group.addLayer(layer_100yrs_depth_9);
                map.addLayer(layer_100yrs_depth_9);

            } else if (selectedLayer === '50_depth') {
                // Add Layer 3
                map.createPane('pane_50yrs_depth_10');
                map.getPane('pane_50yrs_depth_10').style.zIndex = 410;
                var img_50yrs_depth_10 = 'data/50yrs_depth_10.png';
                var img_bounds_50yrs_depth_10 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
                var layer_50yrs_depth_10 = new L.imageOverlay(img_50yrs_depth_10,
                                                    img_bounds_50yrs_depth_10,
                                                    {pane: 'pane_50yrs_depth_10'});
                bounds_group.addLayer(layer_50yrs_depth_10);
                map.addLayer(layer_50yrs_depth_10);
                

            } else if (selectedLayer === '10_depth') {
                // Add Layer 3
                map.createPane('pane_10yrs_depth_11');
                map.getPane('pane_10yrs_depth_11').style.zIndex = 411;
                var img_10yrs_depth_11 = 'data/10yrs_depth_11.png';
                var img_bounds_10yrs_depth_11 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
                var layer_10yrs_depth_11 = new L.imageOverlay(img_10yrs_depth_11,
                                                    img_bounds_10yrs_depth_11,
                                                    {pane: 'pane_10yrs_depth_11'});
                bounds_group.addLayer(layer_10yrs_depth_11);
                map.addLayer(layer_10yrs_depth_11);

            } else if (selectedLayer === '2_depth') {
                // Add Layer 3
            map.createPane('pane_2yrs_depth_12');
            map.getPane('pane_2yrs_depth_12').style.zIndex = 412;
            var img_2yrs_depth_12 = 'data/2yrs_depth_12.png';
            var img_bounds_2yrs_depth_12 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
            var layer_2yrs_depth_12 = new L.imageOverlay(img_2yrs_depth_12,
                                                img_bounds_2yrs_depth_12,
                                                {pane: 'pane_2yrs_depth_12'});
            bounds_group.addLayer(layer_2yrs_depth_12);
            map.addLayer(layer_2yrs_depth_12); 
            }
            });

            




            
        


        
            
        
            L.ImageOverlay.include({
                getBounds: function () {
                    return this._bounds;
                }
            });

