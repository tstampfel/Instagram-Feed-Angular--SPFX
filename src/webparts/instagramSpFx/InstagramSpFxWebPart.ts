import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField,
  PropertyPaneCustomField,
  PropertyPaneChoiceGroup,
  IPropertyPaneChoiceGroupOption
} from '@microsoft/sp-client-preview';
//ADDED STUFF TO IMPORT UP AND DOWN
//LEFT OUT ENVIRONMENT AND MODULE

import ModuleLoader from '@microsoft/sp-module-loader';
import styles from './InstagramSpFx.module.scss';
import * as strings from 'instagramSpFxStrings';
import { IInstagramSpFxWebPartProps } from './IInstagramSpFxWebPartProps';


import * as angular from 'angular';
import 'angular-ui-bootstrap';
import LandingTemplate from './LandingTemplate';




export default class InstagramSpFxWebPart extends BaseClientSideWebPart<IInstagramSpFxWebPartProps> {
  private $injector: ng.auto.IInjectorService;
  public constructor(context: IWebPartContext) {
    super(context);
    ModuleLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
  }

  public render(): void {
     if (this.renderedOnce === false) {
    this.domElement.innerHTML = LandingTemplate.templateHtml;
    require('./app/controller_home.js');
    this.$injector = angular.bootstrap(this.domElement, ['instafeed']);
     }
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
