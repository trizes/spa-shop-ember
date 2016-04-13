import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-tabs-directions', 'Integration | Component | bs tabs directions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{bs-tabs-directions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#bs-tabs-directions}}
      template block text
    {{/bs-tabs-directions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
