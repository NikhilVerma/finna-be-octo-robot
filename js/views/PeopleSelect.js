define("views/PeopleSelect", function () {

    var create = O.DOM.create;

    var PeopleSelect = Backbone.View.extend({
        className: 'people-select',

        events: {
            'click i': 'updatePeople_'
        },

        render: function () {

            this.$el.append(create('span', {
                className: 'placeholder',
                text: this.options.placeholder
            }), create('i', {
                className: 'decrement',
                text: '-'
            }), create('input', {
                type: 'text',
                value: '1'
            }), create('i', {
                className: 'increment',
                text: '+'
            }));

            return this;
        },

        updatePeople_: function() {

        }
    });

    return PeopleSelect;

});