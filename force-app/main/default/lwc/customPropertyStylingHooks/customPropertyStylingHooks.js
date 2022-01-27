/***
 * To create a dynamic component which is configurable use customer properties with styling hooks
 * Below are the steps followed
 * 1) Add a custom css property to root of the template in the component it is defined as 'customProp' and set to article tag which is root
 * 2) Identify css properties which must be applied dynamically, check for their relevant css hooks from slds web site
 * 3) add them to CSS file, as it is added in the css file in this component
 * 4) defined design attributes by using @api and also add them to *meta.xml filed
 * 5) use querySelector to identify the 'customProp' property defined at the root of the html template as showin the renderedCallback() method 
 * 
 */

import { LightningElement,api } from 'lwc';

export default class CustomPropertyStylingHooks extends LightningElement {

    @api cardBackgroundColor;
    @api badgeBGColor;
    @api badgeTextColor;
    isFirstRenderer;

    renderedCallback(){
        let article = this.template.querySelector('.customProp'); 
        article.style.setProperty("--cardBGColor",this.cardBackgroundColor);
        article.style.setProperty("--badgeBGColor",this.badgeBGColor);
        article.style.setProperty("--badgeTextColor",this.badgeTextColor);
        //article.style.setProperty("--cardBGColor",this.cardBackgroundColor);
    }

}