$(function () {


    $("#form-canvas").droppable({
        accept: '.draggable-wrapper',
        drop: function(event, ui) {

            $canvas = $(this);

            var form_input = ui.draggable.children().clone().addClass('form-element');
            $canvas.append(form_input);

        }
        
    });

    $(".draggable-wrapper").draggable({
        helper: 'clone',
        cursor: 'move'
    });

    $("#save-form").click(function () { 
        alert('Saving the form');
     });


});