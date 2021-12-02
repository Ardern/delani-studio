$(document).ready(() => {
    $('#getData').click((e) => {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var textA = $('#text').val();

        // check if empty 
        if (name == '' || email == '' || textA == '') {
            alert('please fill empy fields')
        } else {
            alert(`Thank You ${name} for your message. We shall get back to you ASAP.`)
        }
    })
    $('#sImg').click(() => {
        $('#design').hide();
        $('#dev-info').show()
    })
    $('#sImg-dev').click(() => {
        $('#dev').hide();
        $('#des-info').show()
    })
    $('#sImg-pd').click(() => {
        $('#prod-d').hide();
        $('#prod-info').show();
    })
})