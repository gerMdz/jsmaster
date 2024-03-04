let name = 'Ger'

function showName() {
    let lastName = 'Monti'
    function showLastName() {

        let age = '54'

        function showAge() {
            return lastName +', ' + name + '. Age: ' + age
        }

        return showAge

    }

    return showLastName;
}


console.log(showName()()())
