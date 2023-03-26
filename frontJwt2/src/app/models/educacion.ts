export class Educacion {
    educationId!:number;
    institution:string;
    degree:string;
    entry:string;
    discharge:string;
    urlInstitution:string;
    image:string;

    constructor(institution:string,degree:string,entry:string,discharge:string,urlInstitution:string,image:string){
        this.institution=institution;
        this.degree=degree;
        this.entry=entry;
        this.discharge=discharge;
        this.urlInstitution=urlInstitution;
        this.image=image;
    }
}

