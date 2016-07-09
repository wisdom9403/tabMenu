$(function () {
   
    tabMenu.init();
    
});


var tabMenu = {
    $tabMenu: null,
    $tabContents:  null,
    currentIndex : null,
    oldIndex: null,
    init: function () {
        this.$tabMenu =  $('.tab_menu li');
        this.$tabContents = $('.tab_contents li');
        this.currentIndex = 0;
        this.initEvent();
    },
    initEvent: function () {
        var that = this;
        this.$tabMenu.on('click', function () {
            that.oldIndex = that.currentIndex;
            that.currentIndex = $(this).index();

            that.tabMenuOnOff($(this));
            that.tabContentsOnOff();
        });
    },
    tabMenuOnOff: function ($self) {
        this.$tabMenu.removeClass('active');
        $self.addClass('active');
    },
    tabContentsOnOff: function () {
        this.$tabContents.eq(this.oldIndex).hide();
        this.$tabContents.eq(this.currentIndex).show();
    }
};