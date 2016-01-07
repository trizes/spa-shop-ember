import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    console.log(this.get('category'));
    console.log(this.get('products'));
  },

  didInsertElement() {
    this.hoverMenuBootstrap();
  },

  hoverMenuBootstrap() {
    this.$('.sub-sub-menu').hide();
    this.$('.sub-menu').hide();

    this.$('.sub-menu-item').hover(
      function() {
        $('.sub-sub-menu', this).stop().animate({width:'show'}, 100);
      },
      function() {
        $('.sub-sub-menu', this).stop().animate({width:'hide'}, 100);
      }
    );

    this.$('.sidebar-item').hover(
      function() {
        $('.sub-menu', this).stop().animate({width:'show'}, 100);
      },
      function() {
        $('.sub-menu', this).stop().animate({width:'hide'}, 100);
      }
    )
  }
});
