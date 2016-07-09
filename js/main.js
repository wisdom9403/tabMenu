$(function () {
   
    var $tabMenu = $('.tab_menu li');
    var $tabContents = $('.tab_contents li');
    var currentIndex = 0;
    var oldIndex = null;
    
    $tabMenu.on('click', function () {
       oldIndex = currentIndex;
        currentIndex = $(this).index();
        
        $tabMenu.removeClass('active');
        $(this).addClass('active');
        
        $tabContents.eq(oldIndex).hide();
        $tabContents.eq(currentIndex).show();
    });
    
});