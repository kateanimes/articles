function show_hide(id) {
    var list = document.getElementById('list_' + id).style;
    
    if (list.display == 'none') {
        list.display = 'block';
    }
    else {
        list.display = 'none';
    }
}