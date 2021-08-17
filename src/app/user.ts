export class User {
  public userId: number;
  public name: string;
  public userName: string;
  public password: string;
  public confirmPassword: string;
  public language: string;
  public mobileNumber: string;
  public role: string;


  constructor(
     userId?: number,
     name?: string,
     userName?: string,
     password?: string,
     confirmPassword?: string,
     language?: string,
     mobileNumber?: string,
     role?: string
  ) {  
    if(userId) this.userId=userId; else this.userId=0
    if(name) this.name=name; else this.name=""
    if(userName) this.userName=userName; else this.userName=""
    if(password) this.password=password; else this.password=""
    if(confirmPassword) this.confirmPassword=confirmPassword; else this.confirmPassword=""
    if(language) this.language=language; else this.language=""
    if(mobileNumber)  this.mobileNumber=mobileNumber; else this.mobileNumber=""
    if(role) this.role=role; else this.role=""
  };

  }
  