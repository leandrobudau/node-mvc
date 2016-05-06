$('.js-delete').on('click', function () {
    var data = $(this).data('id');
    $.ajax({
        url: "http://localhost:3000/usuario/" + data,
        type: 'DELETE',
        success: function (data) {
            document.location = "/usuario";
        } 
        
    });
})