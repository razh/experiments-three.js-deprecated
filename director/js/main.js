/*globals THREE*/
(function( window, document, undefined ) {
  'use strict';

  var camera, scene, renderer;

  function init() {
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    scene = new THREE.Scene();

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    document.body.appendChild( renderer.domElement );

    var element = document.createElement( 'div' );
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.backgroundColor = 'rgba(192, 192, 192, 0.75)';

    var object = new THREE.CSS3DObject( element );
    object.position.x = 0;
    object.position.y = 0;
    object.position.z = -200;
    scene.add( object );

    document.body.style.backgroundColor = 'black';
  }

  function animate() {
    render();
    window.requestAnimationFrame( animate );
  }

  function render() {
    renderer.render( scene, camera );
  }

  init();
  animate();
}) ( window, document );
