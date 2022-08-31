import { AbstractControl } from "@angular/forms";

export function ForbiddenNameValidator(forbiddenName: RegExp){
    return (control:AbstractControl)=>{
        const forbidden = forbiddenName.test(control.value)
        return forbidden? {'forbiddenName':{value:control.value}}:null
    }
}

export function ConfirmPasswordValidator(control:AbstractControl){
	const password = control.get('Password')
	const confirmPassword = control.get('ConfirmPassword')
	if(password?.pristine || confirmPassword?.pristine) return null

	return password && confirmPassword && password.value !== confirmPassword.value? {'misMatch':true}:null;
}
