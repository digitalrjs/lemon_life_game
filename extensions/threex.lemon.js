/**
 * declare THREEx namespace
 * @type {[type]}
 */
var THREEx	= THREEx	|| {}

THREEx.lemon		= {}

THREEx.lemon.baseUrl	= '/'

/**
 * THREEx extension
 * 
 * @constructor
 */
THREEx.lemon.GeometryLoader	= function(onLoad){
	var url		= THREEx.lemon.baseUrl + 'lemon.js'
	var loader	= new THREE.JSONLoader()
	loader.load(url, function( geometry ){
		// make the monkey to face the camera
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX(Math.PI / 2) )
		geometry.applyMatrix( new THREE.Matrix4().makeScale(0.5, 0.5, 0.5) )
		// notify onLoad
		onLoad && onLoad(geometry)
	})
}