"use strict";

import NobelCitizen from "./class.nobleCitizen";
import Citizen from "./class.citizen";

/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */

export default class Village{
    constructor(name){
        this.name = name;
        this.buildings = [];
        this.citizens = [];
    }

    addBuilding(name, capacity, nobel = false){
        this.buildings.push(nobel ? new NobelBuilding(name, capacity) : new Building(name, capacity));



        if(nobel)
            let building = new Building(name, capacity);
        else
            let building = new Building(name, capacity);

    }


    addCitizen(name, nobel = false){
        let citizen = nobel ? new NobelCitizen(name) : new Citizen(name);
        //TODO: something els is required here.

        this.citizens.push(citizen);
        this.shelterTheWorthy(citizen);

    }

    shelterTheWorthy(){
        for(const building of this.buildings){
            if(building.addResident(citizen))
                return;

        }

    }

    printCitizenDirectory() {

        //for all buildings: list your residents.

        for (const building of thid.buildings) {
            building.listAllResidents();

            this.listAllHomeless();

        }
    }

        listAllHomeless(){
        console.log(" Homeless people of" + this.name + ":" , "background-color. #a00; color: white");

        }

}