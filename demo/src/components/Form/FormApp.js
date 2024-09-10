import React, {Component} from 'react';
// управляемые компоненты - всё что ввёл пользователь, хранится в стейте

import { Form } from './Form';
import { FormWithRef } from './FormWithRef';

function FormApp() {
    return (
        <div className='FormApp'>
            <FormWithRef/>
        </div>
        )
}

export {FormApp}