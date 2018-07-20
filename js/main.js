// HIDES IMAGE ON CLICK OF HIDE BUTTON
$('#hide').click(function() {
    $('#image').hide();
});

// SHOWS IMAGE ON CLICK OF SHOW BUTTON
$('#show').click(function() {
    $('#image').show();
});

// TOGGLES IMAGE ON CLICK OF TOGGLE BUTTON
$('#toggle').click(function() {
    $('#image').toggle();
});

// FADES OUT THE IMAGE ON AND OFF ON THE CLICK OT FADE BUTTON
$('#fade').click(function() {
    $('#image').toggleClass('fade');
    $('#imageStatus1').toggle();
    $('#imageStatus2').toggle();
});

// CHANGES IMAGE ON HOVER OF THE IMAGE ELEMENT
$('#image').hover(function() {
    $(this).attr('src', 'https://pbs.twimg.com/profile_images/2303771545/a1d4qki5wcdt7ugsl1uu_400x400.png');
}, function() {
    $(this).attr('src', 'https://ih1.redbubble.net/image.482489482.4397/flat,800x800,075,f.u2.jpg');
});

// GRAB INPUT FROM USER AND ADD TO LIST ON CLICK OF THE ADD ITEM BUTTON
$('#addItem').click(function() {
    let newItem = $('#newItem');
    if (newItem.val() != '') {
        let li = document.createElement('li');
        li.innerText = newItem.val();
        $('#groceryList').append(li);
    }
    else {
         alert('You have not entered anything into the text area.')
    }
    newItem.val('');
});

//CREATE RED BACKGROUND WHEN THE RED EVERYTHING BUTTON IS CLICKED
$('#makeRed').click(function() {
    $('body').css({'background-color': 'red', 'display': 'none'})
});

// MAKE LIST ITEMS CHANGE PROPERTIES ON HOVER WITH CALLBACK
$('li').hover(function() {
    $(this).css({'color': 'red', 'font-size': '1.5rem', 'font-family': 'serif'});
}, function() {
    $(this).css({'color': '', 'font-size': '', 'font-family': ''});
})
