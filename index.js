var school = new Object();
    school.name ='Yollo Schools',
    school.classRooms = 10,
    school.students = 100,
    school.teachers = 10,
    school.checkNumStudentsPerClass= function() {
        return this.students / this.classRooms;
    };

var elName = document.getElementById('schoolName');
elName.textContent = school.name;

var elSize = document.getElementById('classSize');
elSize.textContent = school.checkNumStudentsPerClass();
