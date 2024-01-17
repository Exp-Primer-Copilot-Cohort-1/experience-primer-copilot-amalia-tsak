function skillsMember() {
    var skill = document.getElementById('skill').value;
    var skillList = document.getElementById('skillList');
    var li = document.createElement('li');
    var liText = document.createTextNode(skill);
    li.appendChild(liText);
    skillList.appendChild(li);
    document.getElementById('skill').value = '';
}