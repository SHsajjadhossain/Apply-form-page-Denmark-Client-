// ============================================
//      textarea-part js script start
// ============================================

$(document).ready(function() {
    var placeholder_text = 'Why do you want to help us? \nHow old are you?\nTell us about yourself?';
    $('textarea').attr('placeholder', placeholder_text);
    // $('textarea').focus(function() {
    //     $('textarea').css('', '');
    // });


    $('textarea').blur(function() {
        $('textarea').attr('placeholder', placeholder_text);
    });
})

// ============================================
//      textarea-part js script end
// ============================================



// function onSubmit(token) {
//     document.getElementById("demo-form").submit();
// }

function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute('reCAPTCHA_site_key', { action: 'submit' }).then(function(token) {
            // Add your logic to submit to your backend server here.
        });
    });
}