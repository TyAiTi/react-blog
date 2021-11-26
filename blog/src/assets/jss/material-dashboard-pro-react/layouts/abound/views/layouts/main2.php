
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hồ sơ thu thập</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Free yii themes, free web application theme">
    <meta name="author" content="Webapplicationthemes.com">
	<!-- <link href='http://fonts.googleapis.com/css?family=Carrois+Gothic' rel='stylesheet' type='text/css'> -->

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
	<?php
	  $baseUrl = Yii::app()->theme->baseUrl; 
	  $cs = Yii::app()->getClientScript();
	   $cs->registerCoreScript('jquery');
 //   Yii::app()->clientScript->registerPackage('bootstrap');
//     $myPackage = array(
//    'basePath'=> "themes/", 
//    'css'     => array( 'css/bootstrap.min.css', 'css/bootstrap-responsive.min.css','css/abound.css'),
//    'js'      => array( 'js/bootstrap.min.js','js/plugins/jquery.sparkline.js','js/plugins/jquery.flot.min.js', 'js/plugins/jquery.flot.pie.min.js','js/charts.js','js/plugins/jquery.knob.js','js/plugins/jquery.masonry.min.js','js/styleswitcher.js'),
//    'depends' => array('jquery')
// );

	
  
	

   // $cs->registerPackage('bootstrap');
    $basePath = Yii::app()->baseUrl."/widgets/jquery-easyui/";
    $cs->registerCssFile($basePath."themes/default/easyui.css");
    $cs->registerCssFile($basePath."themes/icon.css");
    $cs->registerCssFile($basePath."themes/color.css");
    $cs->registerCssFile($basePath."demo/demo.css");
    $cs->registerScriptFile($basePath."jquery.easyui.min.js");

	?><!-- 
  <script type="text/javascript" src="<?php echo $basePath?>extension/datagrid-filter.js"></script>
   -->
  <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/edit-style.css" />
  </head>

<body>

            <?php echo $content; ?>
   sasad
  </body>
</html>