1° importar el modulo de ReactiveForms, viene @angular/forms
y lo metemos al array de imports en my-forms-module
2°formBuilder nos permite crear objetos 
creamos nuestro userModel: FormGroup
y le damos el valor inicial en el constructor y especificamos el tipado de formbuilder
una vez realizado el usermodel:formgroup lo que hacemos es dentro del constructor darle un tipado, luego
constructor (private fb: FormBuilder) {
    this.usermodel = this.fb.group({
        email = [''],
        password = [''],
        codigo postal = ['']
    });

}
enlazamiento doble via
buscamos la etiqueta form y utilizamos una directiva [FormGroup] = 'usermodel' y colocamos la referencia al usermodel
y luego a cada uno de los inputs le aplicamos una directiva de formcontrolname='propiedad que maneja'