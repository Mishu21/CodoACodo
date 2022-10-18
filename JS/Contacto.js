
const init = function () {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function (ev) {
    ev.preventDefault();
    document.getElementById('form-user').reset();
}

const send = function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let fails = validate();
    if (fails.length === 0) {
        document.getElementById('form-user').submit();
    } else {
        fails.forEach(function (obj) {
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}

const validate = function (ev) {
    let failures = [];
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let name = document.getElementById('input-name');
    let subject = document.getElementById('input-subject');
    let email = document.getElementById('input-email');

    if (name.value === "") {
        failures.push({ input: 'input-name', msg: 'Complete nombre' })
    }
    if (subject.value === "") {
        failures.push({ input: 'input-subject', msg: 'Complete Asunto' })
    }
    if (email.value === "") {
        failures.push({ input: 'input-email', msg: 'Complete email' })
    }

    if (reg.test(email.value) == false) {
        failures.push({ input: 'input-email', msg: 'Complete con formato email' })
    }
    return failures;
}

document.addEventListener('DOMContentLoaded', init);