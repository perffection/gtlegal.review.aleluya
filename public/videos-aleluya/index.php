<!DOCTYPE HTML>
<!--
	Full Motion by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Libreria de Medios - Guate Legal Review en el nombre de Jesucristo</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="../cssAleluya/main.css" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
	<body id="top">
<!-- Header -->
			<header id="header">
				<div class="inner">
					<a href="/" class="logo">GuateLegal Review</a>
					<!--<nav id="nav">						
						<a href="../team-aleluya.html">Meet the Team</a>
						<a href="../ministries-aleluya.html">Ministries</a>
						<a href="index.php">Media Resources</a>
						<a href="../index.html#contactus-aleluya">Contact Us</a>
						<!-- <a href="elements.html">King's Kids</a>
						<a href="elements.html">Recovery</a>
						<a href="elements.html">Bibles & Biceps</a>
						
					</nav> -->
				</div>
			</header>
		<!-- 	<a href="#menu" class="navPanelToggle"><span class="fa fa-bars"></span></a> -->
			<!-- Banner -->
			<!--
				To use a video as your background, set data-video to the name of your video without
				its extension (eg. images/banner). Your video must be available in both .mp4 and .webm
				formats to work correctly.
			-->
				<section id="banner" data-video="images/banner">
					<div class="inner">
						<header>
							<h1>Libreria de Medios</h1>
							<p>Estos son Videos y Medios</p>
						</header>
						<a href="#main-aleluya" class="more">Ver Mas</a>
					</div>
				</section>

			<!-- Main -->

				<div id="main">
					<div class="inner">
					  <a name="main-aleluya"></a>
						<h2 align="center">Videos que hemos hecho</h2><br/>
						<p align="center">Tambien puede ver nuestro <a href="https://www.youtube.com/channel/UCcPDbKvBsVVFjQVBhE43Yxg">Canal de Youtube</a> y <a href="https://www.facebook.com/gtlegal.review">Página de Facebook</a> para conocer mejor.</p>	


					<!-- Boxes -->
						<div class="thumbnails thumbnails_a">
					<!--	
							<div class="box">
								<a href="https://youtu.be/TeofhI8Bslg" class="image fit"><img src="imgAleluya/help-homeless-aleluya.jpg" alt="" /></a>
								<div class="inner">
									<h3>Hope for the Homeless</h3>
									<p>Aiding the homeless.</p>
									<a href="https://youtu.be/TeofhI8Bslg" class="button fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>

							<div class="box">
								<a href="https://youtu.be/kiREcm7O_UM" class="image fit"><img src="imgAleluya/ptsdhorse-aleluya.jpg" alt="" /></a>
								<div class="inner">
									<h3>Equinotherapy for PTSD</h3>
									<p>The use of horses as therapy for PTSD patients.</p>
									<a href="https://youtu.be/kiREcm7O_UM" class="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>
-->
							<?php 
							  $youtube_jsonfile_aleluya = "youtube-aleluya.json"; 
							  if( !file_exists($youtube_jsonfile_aleluya) || (time() - filemtime($youtube_jsonfile_aleluya) > 20)) {
									$json_aleluya = file_get_contents("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUcPDbKvBsVVFjQVBhE43Yxg&key=AIzaSyB-cMpJRC1RDU8rsKIIk4cDQOTV_9PQCns&maxResults=50");
							    file_put_contents($youtube_jsonfile_aleluya, $json_aleluya);

							  } else {
							  	$json_aleluya = file_get_contents($youtube_jsonfile_aleluya);

							  }
								
								$obj_aleluya = json_decode($json_aleluya);
								foreach ($obj_aleluya->{'items'} as $item_aleluya) {
									//Hallelujah
									
									?>
								<div class="box">
								<a href="https://youtu.be/<?php echo $item_aleluya->{'snippet'}->{'resourceId'}->{'videoId'}?>" class="image fit"><img src="<?php echo $item_aleluya->{'snippet'}->{'thumbnails'}->{'medium'}->{'url'}?>" alt="" /></a>
								<div class="inner">
									<h3><?php echo $item_aleluya->{'snippet'}->{'title'}?></h3>
									<p><?php echo $item_aleluya->{'snippet'}->{'description'}?></p>
									<a href="https://youtu.be/$item_aleluya->{'snippet'}->{'resourceId'}->{'videoId'}?>" class="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>
									<?php

								}
							?>
<!--
							<div class="box">
								<a href="https://youtu.be/s6zR2T9vn2c" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
								<div class="inner">
									<h3>Hallelujah</h3>
									<p>Jesus Christ is the Lord.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>

							<div class="box">
								<a href="https://youtu.be/s6zR2T9vn2c" class="image fit"><img src="images/pic04.jpg" alt="" /></a>
								<div class="inner">
									<h3>God is Holy</h3>
									<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>

							<div class="box">
								<a href="https://youtu.be/s6zR2T9vn2c" class="image fit"><img src="images/pic05.jpg" alt="" /></a>
								<div class="inner">
									<h3>He is Loving and true</h3>
									<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
							</div>

							<div class="box">
								<a href="https://youtu.be/s6zR2T9vn2c" class="image fit"><img src="images/pic06.jpg" alt="" /></a>
								<div class="inner">
									<h3>Jesus Christ is awesome</h3>
									<p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
									<a href="https://youtu.be/s6zR2T9vn2c" class="button fit" data-poptrox="youtube,800x400">Watch</a>
								</div>
								
							</div> -->
						</div>
						<hr/>
						<h2 align="center">Fotos votaciones 1 el 3 de Febrero 2017</h2><br/>
						
						<div class="thumbnails">
						<?php
						for($aleluya = 1; $aleluya <=23; $aleluya++ ) { 
							$imgAleluya = sprintf("dlAleluya/votaciones1Aleluya/%02d_aleluya.jpg", $aleluya);?>

								<div class="box">
									<a  href="<?php echo $imgAleluya;?>" class="image fit"><img src="<?php echo $imgAleluya;?>"/></a><br/>
									<div class="inner">
										<h3>Votaciones CANG Foto <?php echo $aleluya?></h3>
										<p>Gloria a Jesus</p>
									</div>
								</div>
								<?php
							}
						?>
							


						</div>
<hr/>
					
					</div>
				</div>

			<!-- Footer -->
				<footer id="footer">
					<div class="inner">
						<h2>Guatemala Legal Review</h2>
					
						<ul class="icons">
							<li><a href="https://twitter.com/gtlegal_review" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="https://www.facebook.com/gtlegal.review" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.youtube.com/channel/UCcPDbKvBsVVFjQVBhE43Yxg" class="icon fa-youtube"><span class="label">Youtube</span></a></li>
							<li><a href="https://instagram.com/gtlegal_review" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="mailto:info-aleluya@gtlegal.review" class="icon fa-envelope"><span class="label">Email</span></a></li>
						</ul>
						<p class="copyright">&copy; GT Legal Review. Design: <a href="https://templated.co">TEMPLATED</a>.  Videos: <a href="http://coverr.co/">Coverr</a>.</p>
					</div>
				</footer>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.poptrox.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
					<script src="../jsAleluya/util.js"></script>
			<script src="../jsAleluya/assets/js/main.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>
