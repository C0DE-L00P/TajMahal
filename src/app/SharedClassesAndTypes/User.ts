export class User{
    public name:string;
    public email:string;
    public password:string;
    public whereYouHearAboutUs:string;
	constructor(name:string,email:string,password:string,whereYouHearAboutUs:string){
        this.name = name;
        this.email = email
        this.password = password;
        this.whereYouHearAboutUs = whereYouHearAboutUs
	}
}