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
                }),

                create('i', {
                    className: 'decrement',
                    text: '-'
                }),

                this.textInput_ = create('input', {
                    type: 'text',
                    value: '1'
                }),

                create('i', {
                    className: 'increment',
                    text: '+'
                })
            );

            return this;
        },

        updatePeople_: function (e) {
            var el = e.target;
            var val = parseInt(this.textInput_.value, 10);

            if (el.className === 'increment') {
                val = Math.min(this.options.max, val + 1);
            } else {
                val = Math.max(this.options.min, val - 1);
            }

            this.textInput_.value = val;

            this.trigger('change', val);
        }
    });

    return PeopleSelect;

});