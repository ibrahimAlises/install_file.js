<html>
<head>
<title>Start Auto Download file</title>
<script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$(function() {
$('a[data-auto-download]').each(function(){
var $this = $(this);
setTimeout(function() {
window.location = $this.attr('href');
}, 2000);
});
});
</script>
</head>
<body>
<div class="wrapper">
<p>The download should start shortly. If it doesn't, click
<a data-auto-download href="URL">here</a>.</p>
</div>
</body>
</html>


====================================================================================================


window.location.replace("FILE URL");
