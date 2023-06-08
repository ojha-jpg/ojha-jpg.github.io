var map = L.map('map', {
    zoomControl:true, maxZoom:15, minZoom:18
}).fitBounds([[27.6630643389904,85.31527709766696],[27.67161993829712,85.3315586624084]]);
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
    minZoom: 18,
    maxZoom: 15,
    minNativeZoom: 0,
    maxNativeZoom: 19
});

layer_OpenStreetMap_0;
map.addLayer(layer_OpenStreetMap_0);

map.createPane('pane_100yrs_velocity_1');
map.getPane('pane_100yrs_velocity_1').style.zIndex = 401;
var img_100yrs_velocity_1 = 'data/100yrs_velocity_1.png';
var img_bounds_100yrs_velocity_1 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_100yrs_velocity_1 = new L.imageOverlay(img_100yrs_velocity_1,
                                      img_bounds_100yrs_velocity_1,
                                      {pane: 'pane_100yrs_velocity_1'});
bounds_group.addLayer(layer_100yrs_velocity_1);
map.addLayer(layer_100yrs_velocity_1);

map.createPane('pane_50yrs_velocity_2');
map.getPane('pane_50yrs_velocity_2').style.zIndex = 402;
var img_50yrs_velocity_2 = 'data/50yrs_velocity_2.png';
var img_bounds_50yrs_velocity_2 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_50yrs_velocity_2 = new L.imageOverlay(img_50yrs_velocity_2,
                                      img_bounds_50yrs_velocity_2,
                                      {pane: 'pane_50yrs_velocity_2'});
bounds_group.addLayer(layer_50yrs_velocity_2);
map.addLayer(layer_50yrs_velocity_2);

map.createPane('pane_10yrs_velocity_3');
map.getPane('pane_10yrs_velocity_3').style.zIndex = 403;
var img_10yrs_velocity_3 = 'data/10yrs_velocity_3.png';
var img_bounds_10yrs_velocity_3 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_10yrs_velocity_3 = new L.imageOverlay(img_10yrs_velocity_3,
                                      img_bounds_10yrs_velocity_3,
                                      {pane: 'pane_10yrs_velocity_3'});
bounds_group.addLayer(layer_10yrs_velocity_3);
map.addLayer(layer_10yrs_velocity_3);

map.createPane('pane_2yrs_velocity_4');
map.getPane('pane_2yrs_velocity_4').style.zIndex = 404;
var img_2yrs_velocity_4 = 'data/2yrs_velocity_4.png';
var img_bounds_2yrs_velocity_4 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
var layer_2yrs_velocity_4 = new L.imageOverlay(img_2yrs_velocity_4,
                                      img_bounds_2yrs_velocity_4,
                                      {pane: 'pane_2yrs_velocity_4'});
bounds_group.addLayer(layer_2yrs_velocity_4);
map.addLayer(layer_2yrs_velocity_4);

map.createPane('pane_100yrs_depth_mono_5');
map.getPane('pane_100yrs_depth_mono_5').style.zIndex = 405;
var img_100yrs_depth_mono_5 = 'data/100yrs_depth_mono_5.png';
var img_bounds_100yrs_depth_mono_5 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_100yrs_depth_mono_5 = new L.imageOverlay(img_100yrs_depth_mono_5,
                                      img_bounds_100yrs_depth_mono_5,
                                      {pane: 'pane_100yrs_depth_mono_5'});
bounds_group.addLayer(layer_100yrs_depth_mono_5);
map.addLayer(layer_100yrs_depth_mono_5);

map.createPane('pane_50yrs_depth_mono_6');
map.getPane('pane_50yrs_depth_mono_6').style.zIndex = 406;
var img_50yrs_depth_mono_6 = 'data/50yrs_depth_mono_6.png';
var img_bounds_50yrs_depth_mono_6 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_50yrs_depth_mono_6 = new L.imageOverlay(img_50yrs_depth_mono_6,
                                      img_bounds_50yrs_depth_mono_6,
                                      {pane: 'pane_50yrs_depth_mono_6'});
bounds_group.addLayer(layer_50yrs_depth_mono_6);
map.addLayer(layer_50yrs_depth_mono_6);

map.createPane('pane_10yrs_depth_mono_7');
map.getPane('pane_10yrs_depth_mono_7').style.zIndex = 407;
var img_10yrs_depth_mono_7 = 'data/10yrs_depth_mono_7.png';
var img_bounds_10yrs_depth_mono_7 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
var layer_10yrs_depth_mono_7 = new L.imageOverlay(img_10yrs_depth_mono_7,
                                      img_bounds_10yrs_depth_mono_7,
                                      {pane: 'pane_10yrs_depth_mono_7'});
bounds_group.addLayer(layer_10yrs_depth_mono_7);
map.addLayer(layer_10yrs_depth_mono_7);

map.createPane('pane_2yrs_depth_mono_8');
map.getPane('pane_2yrs_depth_mono_8').style.zIndex = 408;
var img_2yrs_depth_mono_8 = 'data/2yrs_depth_mono_8.png';
var img_bounds_2yrs_depth_mono_8 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
var layer_2yrs_depth_mono_8 = new L.imageOverlay(img_2yrs_depth_mono_8,
                                      img_bounds_2yrs_depth_mono_8,
                                      {pane: 'pane_2yrs_depth_mono_8'});
bounds_group.addLayer(layer_2yrs_depth_mono_8);
map.addLayer(layer_2yrs_depth_mono_8);

map.createPane('pane_100yrs_depth_9');
map.getPane('pane_100yrs_depth_9').style.zIndex = 409;
var img_100yrs_depth_9 = 'data/100yrs_depth_9.png';
var img_bounds_100yrs_depth_9 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_100yrs_depth_9 = new L.imageOverlay(img_100yrs_depth_9,
                                      img_bounds_100yrs_depth_9,
                                      {pane: 'pane_100yrs_depth_9'});
bounds_group.addLayer(layer_100yrs_depth_9);
map.addLayer(layer_100yrs_depth_9);

map.createPane('pane_50yrs_depth_10');
map.getPane('pane_50yrs_depth_10').style.zIndex = 410;
var img_50yrs_depth_10 = 'data/50yrs_depth_10.png';
var img_bounds_50yrs_depth_10 = [[27.641824128073083,85.30769894040846],[27.689362979616487,85.33608898503]];
var layer_50yrs_depth_10 = new L.imageOverlay(img_50yrs_depth_10,
                                      img_bounds_50yrs_depth_10,
                                      {pane: 'pane_50yrs_depth_10'});
bounds_group.addLayer(layer_50yrs_depth_10);
map.addLayer(layer_50yrs_depth_10);

map.createPane('pane_10yrs_depth_11');
map.getPane('pane_10yrs_depth_11').style.zIndex = 411;
var img_10yrs_depth_11 = 'data/10yrs_depth_11.png';
var img_bounds_10yrs_depth_11 = [[27.635389976525275,85.27984871577571],[27.700575495053446,85.3579619598335]];
var layer_10yrs_depth_11 = new L.imageOverlay(img_10yrs_depth_11,
                                      img_bounds_10yrs_depth_11,
                                      {pane: 'pane_10yrs_depth_11'});
bounds_group.addLayer(layer_10yrs_depth_11);
map.addLayer(layer_10yrs_depth_11);

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
var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing'
}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
.className += ' fa fa-search';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
.title += 'Search for a place';
var baseMaps = {};
L.control.layers(baseMaps,{'<img src="legend/poi_13.png" /> poi': layer_poi_13,"2yrs_depth": layer_2yrs_depth_12,"10yrs_depth": layer_10yrs_depth_11,"50yrs_depth": layer_50yrs_depth_10,"100yrs_depth": layer_100yrs_depth_9,"2yrs_depth_mono": layer_2yrs_depth_mono_8,"10yrs_depth_mono": layer_10yrs_depth_mono_7,"50yrs_depth_mono": layer_50yrs_depth_mono_6,"100yrs_depth_mono": layer_100yrs_depth_mono_5,"2yrs_velocity": layer_2yrs_velocity_4,"10yrs_velocity": layer_10yrs_velocity_3,"50yrs_velocity": layer_50yrs_velocity_2,"100yrs_velocity": layer_100yrs_velocity_1,"OpenStreetMap": layer_OpenStreetMap_0,},{collapsed:false}).addTo(map);
setBounds();

var mapDiv = document.getElementById('map');
var row = document.createElement('div');
row.className="row";
row.id="all";
row.style.height = "100%";
var col1 = document.createElement('div');
col1.className="col9";
col1.id = "mapWindow";
col1.style.height = "99%";
col1.style.width = "80%";
col1.style.display = "inline-block";
var col2 = document.createElement('div');
col2.className="col3";
col2.id = "menu";
col2.style.display = "inline-block";
mapDiv.parentNode.insertBefore(row, mapDiv);
document.getElementById("all").appendChild(col1);
document.getElementById("all").appendChild(col2);
col1.appendChild(mapDiv)
var Filters = {"id": "int","2yrs Depth": "real","100yrs Dep": "real","50yr Depth": "real","Location": "str"};
function filterFunc() {
  map.eachLayer(function(lyr){
  if ("options" in lyr && "dataVar" in lyr["options"]){
    features = this[lyr["options"]["dataVar"]].features.slice(0);
    try{
      for (key in Filters){
        keyS = key.replace(/[^a-zA-Z0-9_]/g, "")
        if (Filters[key] == "str" || Filters[key] == "bool"){
          var selection = [];
          var options = document.getElementById("sel_" + keyS).options
          for (var i=0; i < options.length; i++) {
            if (options[i].selected) selection.push(options[i].value);
          }
            try{
              if (key in features[0].properties){
                for (i = features.length - 1;
                  i >= 0; --i){
                  if (selection.indexOf(
                  features[i].properties[key])<0
                  && selection.length>0) {
                  features.splice(i,1);
                  }
                }
              }
            } catch(err){
          }
        }
        if (Filters[key] == "int"){
          sliderVals =  document.getElementById(
            "div_" + keyS).noUiSlider.get();
          try{
            if (key in features[0].properties){
            for (i = features.length - 1; i >= 0; --i){
              if (parseInt(features[i].properties[key])
                  < sliderVals[0]
                  || parseInt(features[i].properties[key])
                  > sliderVals[1]){
                    features.splice(i,1);
                  }
                }
              }
            } catch(err){
            }
          }
        if (Filters[key] == "real"){
          sliderVals =  document.getElementById(
            "div_" + keyS).noUiSlider.get();
          try{
            if (key in features[0].properties){
            for (i = features.length - 1; i >= 0; --i){
              if (features[i].properties[key]
                  < sliderVals[0]
                  || features[i].properties[key]
                  > sliderVals[1]){
                    features.splice(i,1);
                  }
                }
              }
            } catch(err){
            }
          }
        if (Filters[key] == "date"
          || Filters[key] == "datetime"
          || Filters[key] == "time"){
          try{
            if (key in features[0].properties){
              HTMLkey = key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
              startdate = document.getElementById("dat_" +
                HTMLkey + "_date1").value.replace(" ", "T");
              enddate = document.getElementById("dat_" +
                HTMLkey + "_date2").value.replace(" ", "T");
              for (i = features.length - 1; i >= 0; --i){
                if (features[i].properties[key] < startdate
                  || features[i].properties[key] > enddate){
                  features.splice(i,1);
                }
              }
            }
          } catch(err){
          }
        }
      }
    } catch(err){
    }
  this[lyr["options"]["layerName"]].clearLayers();
  this[lyr["options"]["layerName"]].addData(features);
  }
  })
}
    document.getElementById("menu").appendChild(
        document.createElement("div"));
    var div_id = document.createElement("div");
    div_id.id = "div_id";
    div_id.className = "slider";
    document.getElementById("menu").appendChild(div_id);
    var lab_id = document.createElement('div');
    lab_id.innerHTML  = 'id: <span id="val_id"></span>';
    lab_id.className = 'filterlabel';
    document.getElementById("menu").appendChild(lab_id);
    var reset_id = document.createElement('div');
    reset_id.innerHTML = 'clear filter';
    reset_id.className = 'filterlabel';
    lab_id.className = 'filterlabel';
    reset_id.onclick = function() {
        sel_id.noUiSlider.reset();
    };
    document.getElementById("menu").appendChild(reset_id);
    var sel_id = document.getElementById('div_id');
    noUiSlider.create(sel_id, {
        connect: true,
        start: [1, 2],
        step: 1,
        format: wNumb({
            decimals: 0,
            }),
        range: {
        min: 1,
        max: 2
        }
    });
    sel_id.noUiSlider.on('update', function (values) {
    filterVals =[];
    for (value in values){
    filterVals.push(parseInt(value))
    }
    val_id = document.getElementById('val_id');
    val_id.innerHTML = values.join(' - ');
        filterFunc()
    });
    document.getElementById("menu").appendChild(
        document.createElement("div"));
    var div_2yrsDepth = document.createElement("div");
    div_2yrsDepth.id = "div_2yrsDepth";
    div_2yrsDepth.className = "slider";
    document.getElementById("menu").appendChild(div_2yrsDepth);
    var lab_2yrsDepth = document.createElement('div');
    lab_2yrsDepth.innerHTML  = '2yrs Depth: <span id="val_2yrsDepth"></span>';
    lab_2yrsDepth.className = 'filterlabel';
    document.getElementById("menu").appendChild(lab_2yrsDepth);
    var reset_2yrsDepth = document.createElement('div');
    reset_2yrsDepth.innerHTML = 'clear filter';
    reset_2yrsDepth.className = 'filterlabel';
    lab_2yrsDepth.className = 'filterlabel';
    reset_2yrsDepth.onclick = function() {
        sel_2yrsDepth.noUiSlider.reset();
    };
    document.getElementById("menu").appendChild(reset_2yrsDepth);
    var sel_2yrsDepth = document.getElementById('div_2yrsDepth');
    noUiSlider.create(sel_2yrsDepth, {
        connect: true,
        start: [0.19, 0.19],
        range: {
        min: 0.19,
        max: 0.19
        }
    });
    sel_2yrsDepth.noUiSlider.on('update', function (values) {
    val_2yrsDepth = document.getElementById('val_2yrsDepth');
    val_2yrsDepth.innerHTML = values.join(' - ');
        filterFunc()
    });
    document.getElementById("menu").appendChild(
        document.createElement("div"));
    var div_100yrsDep = document.createElement("div");
    div_100yrsDep.id = "div_100yrsDep";
    div_100yrsDep.className = "slider";
    document.getElementById("menu").appendChild(div_100yrsDep);
    var lab_100yrsDep = document.createElement('div');
    lab_100yrsDep.innerHTML  = '100yrs Dep: <span id="val_100yrsDep"></span>';
    lab_100yrsDep.className = 'filterlabel';
    document.getElementById("menu").appendChild(lab_100yrsDep);
    var reset_100yrsDep = document.createElement('div');
    reset_100yrsDep.innerHTML = 'clear filter';
    reset_100yrsDep.className = 'filterlabel';
    lab_100yrsDep.className = 'filterlabel';
    reset_100yrsDep.onclick = function() {
        sel_100yrsDep.noUiSlider.reset();
    };
    document.getElementById("menu").appendChild(reset_100yrsDep);
    var sel_100yrsDep = document.getElementById('div_100yrsDep');
    noUiSlider.create(sel_100yrsDep, {
        connect: true,
        start: [0.31, 0.31],
        range: {
        min: 0.31,
        max: 0.31
        }
    });
    sel_100yrsDep.noUiSlider.on('update', function (values) {
    val_100yrsDep = document.getElementById('val_100yrsDep');
    val_100yrsDep.innerHTML = values.join(' - ');
        filterFunc()
    });
    document.getElementById("menu").appendChild(
        document.createElement("div"));
    var div_50yrDepth = document.createElement("div");
    div_50yrDepth.id = "div_50yrDepth";
    div_50yrDepth.className = "slider";
    document.getElementById("menu").appendChild(div_50yrDepth);
    var lab_50yrDepth = document.createElement('div');
    lab_50yrDepth.innerHTML  = '50yr Depth: <span id="val_50yrDepth"></span>';
    lab_50yrDepth.className = 'filterlabel';
    document.getElementById("menu").appendChild(lab_50yrDepth);
    var reset_50yrDepth = document.createElement('div');
    reset_50yrDepth.innerHTML = 'clear filter';
    reset_50yrDepth.className = 'filterlabel';
    lab_50yrDepth.className = 'filterlabel';
    reset_50yrDepth.onclick = function() {
        sel_50yrDepth.noUiSlider.reset();
    };
    document.getElementById("menu").appendChild(reset_50yrDepth);
    var sel_50yrDepth = document.getElementById('div_50yrDepth');
    noUiSlider.create(sel_50yrDepth, {
        connect: true,
        start: [0.3, 0.3],
        range: {
        min: 0.3,
        max: 0.3
        }
    });
    sel_50yrDepth.noUiSlider.on('update', function (values) {
    val_50yrDepth = document.getElementById('val_50yrDepth');
    val_50yrDepth.innerHTML = values.join(' - ');
        filterFunc()
    });
    document.getElementById("menu").appendChild(
        document.createElement("div"));
    var div_Location = document.createElement('div');
    div_Location.id = "div_Location";
    div_Location.className= "filterselect";
    document.getElementById("menu").appendChild(div_Location);
    sel_Location = document.createElement('select');
    sel_Location.multiple = true;
    sel_Location.size = 1;
    sel_Location.id = "sel_Location";
    var Location_options_str = "<option value='' unselected></option>";
    sel_Location.onchange = function(){filterFunc()};
    Location_options_str  += '<option value="Lagankhel">Lagankhel</option>';
    sel_Location.innerHTML = Location_options_str;
    div_Location.appendChild(sel_Location);
    var lab_Location = document.createElement('div');
    lab_Location.innerHTML = 'Location';
    lab_Location.className = 'filterlabel';
    div_Location.appendChild(lab_Location);
    var reset_Location = document.createElement('div');
    reset_Location.innerHTML = 'clear filter';
    reset_Location.className = 'filterlabel';
    reset_Location.onclick = function() {
        var options = document.getElementById("sel_Location").options;
        for (var i=0; i < options.length; i++) {
            options[i].selected = false;
        }
        filterFunc();
    };
    div_Location.appendChild(reset_Location);
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});