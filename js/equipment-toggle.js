document.getElementById('equipment').onclick = function() {

    var className = ' ' + equipment.className + ' ';

    this.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         this.className + ' active';
};

