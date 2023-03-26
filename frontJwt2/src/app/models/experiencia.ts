export class Experiencia {
    experienceId!:number;
    company : string;
    currentJob : number;
    description : string;
    position : string;
    entry : string;
    discharge: string;

    constructor( company:string, currentJob:number,description:string,position:string,entry:string,discharge:string){
        this.company = company;
        this.currentJob = currentJob;
        this.description = description;
        this.position = position;
        this.entry = entry;
        this.discharge = discharge;
    }

}
