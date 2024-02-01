{/* <script> */}
$('#nextDrawButton').click(function() {
    $(this).hide();
    $('#loadingMessage').show();
    var nextGroupNumber = $(this).data('next-group-number');
    setTimeout(function() {
        window.location.href = "/drawing/" + nextGroupNumber;
    }, 1000);
});
{/* </script> */}