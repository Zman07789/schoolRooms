var school = {
    classRooms: 10,
    students: 100,
    teachers: 10,
    subjects: ['science', 'math', 'biology', 'Literature', 'gym', 'History'],
    checkNumStudentsPerClass: function() {
        return this.students / this.classRooms;
    }
}

var el = document.getElementById('students');
el.textContent = school.checkNumStudentsPerClass();