<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>KzVn</title>
	
	<link href="//fonts.googleapis.com/css?family=Lato:300,400,700,900|Raleway:500,400,300|Open+Sans:400,300,600,700|Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
	<link media="all" type="text/css" rel="stylesheet" href="<?php echo cache_buster('css/vendor.css'); ?>">
	<link media="all" type="text/css" rel="stylesheet" href="<?php echo cache_buster('css/app.css'); ?>">

	<!--[if lt IE 9]>
	<script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body data-spy="scroll" data-target="#header">
<nav id="header" class="navbar navbar-fixed-top whiteHeader">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="fa fa-bars"></span>
			</button>
			<a class="navbar-brand" href="#">Modern</a>
		</div>
		<div id="navbar" class="navbar-collapse collapse navbar-right">
			<ul class="nav navbar-nav">
				<li><a href="/">Home</a></li>
				<li><a data-bypass="true" href="#stream">Stream</a></li>
				<li><a href="/browse">Browse</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
	</div>
</nav>

<div id="app"></div>

<script>
window.webpackManifest = <?php echo file_get_contents(app()->basePath('public/js/manifest.json')); ?>
</script>
<script src="js/vendor.js"></script>
<script src="js/app.js"></script>
<script src="js/views.js"></script>

<script src="<?php //echo cache_buster('js/vendor.js'); ?>"></script>
<script src="<?php //echo cache_buster('js/app.js'); ?>"></script>
<script src="<?php //echo cache_buster('js/views.js'); ?>"></script>
</body>
</html>