require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"fly" : "lib/jquery_plugins/jquery.fly.min",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom-2.2.3.min",
		"template" : "lib/arttemplate/template-native",
		"load" : "js/loadHeaderFooter",
		"nav-ajax":"js/nav-ajax"
	},
	shim : {
		"fly" : {
			deps : ["jquery"]
		},
		"zoom" : {
			deps : ["jquery"]
		}
	}
});