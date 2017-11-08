/**
 * Created by lzy23 on 2017/11/6.
 */
$.extend($.scrollTo.defaults, {
  axis: 'y',
  duration: 500
});
$('.scroll').click(function(e){
  e.preventDefault();
  var href=$(this).attr('href');
  if(href==='#'){
    $.scrollTo(0)
  }else{
    var offsetTop=$(href).offset().top-50;
    $.scrollTo(offsetTop);
    if($(this).parent().parent().parent().attr('id')==='topMenu'){
      $('#topMenu').collapse('hide')
    }

  }
});