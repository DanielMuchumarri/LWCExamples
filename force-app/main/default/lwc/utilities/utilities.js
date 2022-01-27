import { LightningElement } from 'lwc';

export default class Utilities extends LightningElement {

}

export function convertObjectToMap(obj){
    return new Map(Object.entries(obj));
}