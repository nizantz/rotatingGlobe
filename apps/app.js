    var rotationInterval=100;
    var rotateIntervalId;
    var viewer = new Cesium.Viewer('cesiumContainer',{
          baseLayerPicker : true,
          timeline: false,
          animation : false
    });
    //  var imageryLayers = viewer.imageryLayers;
    //
    // imageryLayers.addImageryProvider( new Cesium.UrlTemplateImageryProvider({
    //       url : 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    //       credit : 'Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    // }));

var camera = viewer.camera;

    document.addEventListener('keydown', function(e) {
      setKey(e);
    }, false);

    var horizontalDegrees = 2.0;
    var verticalDegrees = 10.0;

    function rotateGlobe(){
      if (camera._mode === Cesium.SceneMode.SCENE3D){
      camera.rotateRight(Cesium.Math.toRadians(horizontalDegrees));
    }
    }

    setRotateInterval();

    function setRotateInterval()
    {
      rotateIntervalId = setInterval(rotateGlobe, rotationInterval);
    }


    function setKey(event) {
    //SpaceBar to toggle rotate
    if (event.keyCode === 32){
      if (horizontalDegrees === 0 ) {
        horizontalDegrees = 2;
        clearInterval(rotateIntervalId);
        setRotateInterval();
        }
        else
        {
          horizontalDegrees = 0;
          clearInterval(rotateIntervalId);
        }
      }
      else if (event.keyCode === 38) {  // up arrow
        camera.rotateUp(Cesium.Math.toRadians(verticalDegrees));
      } //Down Arrow
      else if (event.keyCode === 40) {  // down arrow
        camera.rotateDown(Cesium.Math.toRadians(verticalDegrees));
      }
    }
