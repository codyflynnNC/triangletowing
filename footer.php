<div class="container remove-padding dark-background">
  <div class="row">
      <div class="col-xs-12 col-md-3">
          <div id="address">
          <address>
            <h3> Contact </h3>
          <p><b>TriangleTowing</b></p>
              <p>
                420 Shelly River Dr<br>
                Raleigh, NC, 27609 <br>
              </p>
              <a href="tel:(919) 561-5885">(919) 561-5885</a>
         </address>
          <hr />
                 <h3> Hours </h3>
                 <p> 24/7 Monday-Sunday </p>

        </div>
      </div>
    <div class="col-xs-12 col-md-3">
      <div id="map-outer">
        <div id="map"></div>
      </div>
   </div>
   <div class="col-xs-12 col-sm-6 col-md-3">

           <div class="thumbnail center well well-sm text-center black-text">
                     <p>Subscribe to receive coupons and special promotional deals. </p>

                     <form action="contact.php" method="post" role="form">
                         <div class="input-group">
                           <span class="input-group-addon">
                             <i class="fa fa-envelope"></i>
                           </span>
                           <input class="form-control" type="text" name="email" placeholder="your@email.com">
                         </div>
                         <input type="submit" value="Subscribe" class="btn btn-large btn-primary subscribe-btn" />
                   </form>
                 </div>



  </div>


  <div class="col-xs-12 col-sm-6 col-md-3">

        <h3> Recent Blog Posts: </h3>

        <ul class="footer-nav list-inline">
          <?php
              $PHP_SELF = "blog.php";
              $number = 5;
              $template = "headlines";
              include("/home3/codyflynn/public_html/CuteNews/show_news.php");
          ?>
        </ul>

  </div>

    <div class="col-xs-12 col-md-12">
      <div class="social-icons-footer">
        <a href="https://www.facebook.com/TriangleTowing-363721374015850/"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
        <a href="https://twitter.com/triangletowing"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
        <a href="https://plus.google.com/100249693267534979532"><i class="fa fa-google fa-2x" aria-hidden="true"></i></a>
        <a href="https://www.yelp.com/biz/triangletowing-raleigh"><i class="fa fa-yelp fa-2x" aria-hidden="true"></i></a>
      </div>
      <ul class="footer-nav list-inline">
        <li><a href="index.html">Home </a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="roadsideassistance.html">Roadside Assistance</a></li>
        <li><a href="blog.php">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <ul class="footer-nav-sub list-inline">
        <li><a href="legal.html">Legal</a></li>
        <li class="border-left"><a href="credits.html">Credits</a></li>
      </ul>
    </div>
  </div>
</div>

<script type="text/javascript">
   googlemaploader();
</script>

<script type="text/javascript" defer src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58042c04f3a4b6d3"></script> 
