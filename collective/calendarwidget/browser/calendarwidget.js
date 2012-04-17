$(document).ready(function() {

    $('input.calendarInput').datepicker({showButtonPanel: true});

    $('input.calendarInput').each(function(f) {
            this.readonly = '1';
    });

})
