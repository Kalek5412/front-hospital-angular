import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted=false;

  public registerForm=this.fb.group({
    nombre:['alejandro',Validators.required],
    email:['cuy@admin.com',[Validators.required,Validators.email]],
    password:['123456',Validators.required],
    password2:['123456',Validators.required],
    terminos:[true,Validators.required]
  },{
    Validators:this.passwordsIguales('password','password2')
  });

  constructor(private fb:FormBuilder,private _usuarioService:AuthService,
      private router:Router
  ){}

  crearUsuario(){
    this.formSubmitted=true;
    console.log(this.registerForm.value);

    if(this.registerForm.invalid){
      return;
    }

    this._usuarioService.crearUsuario(this.registerForm.value).subscribe(res=>{
      this.router.navigateByUrl('/');
    },(err)=>{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.error.msg,
      });
    });
  }

  campoNoValido(campo:string):boolean{
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
      return true;
    }else{ 
      return false;
  }
  }

  contraseniasNoValidas(){
    const pass1=this.registerForm.get('password')?.value;
    const pass2=this.registerForm.get('password2')?.value;
    if((pass1!==pass2) && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass:string,pass2:string){
    return (formGr:FormGroup)=>{
      const passA=formGr.get(pass);
      const passB=formGr.get(pass2);
      if(passA!.value===passB!.value){
        passB?.setErrors(null);
      }else{
        passB?.setErrors({noEsIgual:true})
      }
    }
  }
}
