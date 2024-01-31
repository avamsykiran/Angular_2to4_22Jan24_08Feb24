Angular
-------------------------------------------------------------------------
    
    Pre-Requisites
        HTML 5
            All HTML DOM elements, Forms, Form Validation Attributes, HTML Media Elements, HTML 5 API
        
        CSS 3
            Selectors, CSS-Properties (box model properties, font, text, list and table related properties)
        
        Javascript  (ES 6)
            Javascript Objects and classes - Math, String, Date
            Functions, Closures, Arrow Functions, Call Backs
            DOM API - window, document, 
            OOPs - Class and Object, constructor, methods, static methods
            ES6 - Modules (import and export), Promise, async and await, Template literals, spread operator
            Arrays and Array prototype functions like map,reduce,foreach ..etc.,

        Bootstrap 5 (optional)

    Objectives
        Components (Angular, Dynamic, Styling) - Use of roles of classes and templates to form views in Angular components, load components dynamically, use styling as part of a particular template.
        TypeScript - Enforce data types and object structures and create public and private class arguments.
        Two Way Binding - Use two-way binding to communicate changes between the application state and the view.
        Form Validation - Use form validation in template-driven forms and handle errors appropriately, and use Sync and Async Reactive validators.
        Routing, NgModules, Observables for data transmission and event handling, Dependency Injections, and APIs.

    Angular Intro

        AngularJS           javascript based framework

        Angular 2           typescript  based framework
        Angular 4
                12/15    

        SPA (single page application) framework

        Server                                              Client
         spa-bundle                <--REQ---------
         (index.html + JSCode)
                --------------(spa-bundle) RESP--->         index.html along with the JS code
                                                            is loaded in the browser.

                                                            Any event / form submition/ operating a 
                                                            link ...etc., occurs, it is handled
                                                            by the JS on the cleint itself and the
                                                            relevent HTML is generated on the client 
                                                            itself.

                                                            The generated html can be tailored
                                                            to the existing html page (no concept of
                                                            unloading or reloading a page).

        rest-api        <-------------Data Operation REQ--- spa
                        ------- RESP (data.xml/data.json)--> 

    Angular Lab SetUp

        Node JS     (14 or latest)      node --version
                                        https://nodejs.org
        Angular CLI                     ng version
                                        npm i -g @angular/cli 
        VSCode      IDE

    
        NodeJS offer a development platform where tools for compiling, testing, building, bundling ..etc.,
        can be executed upon.

    Angular Archetecture

        Any angular application comprises of:
            Modules
            Components
            Directives
            Service
            Pipes

        Each of these is a typescript class.
        Each of these is marked with a decorator (for role identification).
        Each of these decorators are passed with a json object called meta-data that contians the config.

        Module
            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule {

            }

        Component
            @Component({
                selector:"[fastMovingStock]",
                templateUrl:"",
                styleUrls:[],
                providers:[]
            })
            class DashboardComponent {

            }

        Directives
            @Directive({
                selector:"[fastMovingStock]",
                providers:[]
            })
            class FastMovingStockMarkerDirective {

            }

        Service
            @Injectable({
                providedIn:"root",
                providers:[]
            })
            class SalesService {

            }

        Pipes
            @Pipe({
                name:'numberToWords',
                providers:[]
            })
            class numberToWordsPipe {

            }

    Angular CLI

        ng new app-name

        cd app-name

            ng g module ModuleName
            ng g component ComponentName --skip-tests
            ng g c ComponentName --skip-tests
            ng g directive DirectiveName --skip-tests
            ng g service ServiceName --skip-tests
            ng g pipe PipeName --skip-tests
            ng g class ClassName --skip-tests
            ng g interface InterfaceName

            ng build        build the application and the bundle is palced isnide a 'dist' folder
            ng test         build the application and execute the test cases.
            ng serve        build the application and the bundle is hosted on a development server @ 4200
                            the port number cna be customized using '--port' flag.
    
    
    Javascript vs TypeScript

        arth.js                     arth.ts

         class Arth {               class Arth {
                                        PI:number;

            constructor(){              constructor(){
                this.PI=3.14;               this.PI=3.14;
            }                           }

            sum(a,b) {                  sum(a:number,b:number):number {
                return a+b;                    return a+b;
            }                           }
         }                          }

    JavaScript Module

        Each file is a module.
        Resourcesa contiained in a file can be exported and imported using export and import keywords.

    Angular Modules

        A module in angular is a class that encapsulates Components,Pipes,Directives, services 
        and other angular modules.

         @NgModule({
            declarations:[ /*list of components,pipes and directives that belong to this module */ ],
            imports:[ /*list of modules we want to import into the current module*/ ],
            exports:[ /*list of Components,pipes or Directives we want export from the current module */ ],
            providers:[ /*list of Services that are injectable at the current module level */ ],
            bootstrap:[ /*list of Components to be loaded initially when the current module loads */ ]
        })
        class SalesModule {

        }

        Every angular app is hosued inside a top-level-module called ROOT-MODULE generally named as app.module
        Other sub-modules are called FEATURE-MODULES.

        The 'exports' section of the meta-data is absent for Root Module.
        The 'bootstrap' section is absent for other Feature Modules.

    Angular Component

        Angular offer html extendability, means we can create our own html elements.

        Components are custom html elements.

        Component   =   Behaviour       +       DOM     +      Style
                        component.ts         component.html     component.css
                        (fiels and methds)      

        Dashboard.component.ts
            @Component({
                selector:"app-dashboard",
                templateUrl:"Dashboard.component.html",
                styleUrls:["Dashboard.component.css"]
            })
            class DashboardComponent {
                nofOMsgs:number;
                noOfReadMsgs:number;

                constructor(){
                    this.noOfMsgs=100;
                    this.noOfReadMsgs=90;
                }
            }

        Dashboard.component.html
            <div>
                Message: {{noOfMsgs - noOfReadMsgs}} / {{noOfMsgs}}
            </div>

        Dashboard.component.css
            div{
                border:1px solid black;
            }

        <app-dashboard></app-dashboard>             <div> Message: 10/100 </div>

    Data Binding

        using the fields and methods of component.ts inside the component.html
        is called data binding.

        Interpolation

            we can render the output of any angular-expression on to the html-dom.

            <tag> {{angular-expression}} </tag>

            for any reason, if the fields are updated, the expression is reevalauted and the output also
            is automatically updated.

        Two-Way Data Binding

            We ue this to bind a field with an input element of an html form.

            we have to use an attribute called 'ngModel' from 'FormsModule' from '@angular/forms' .

            <input type="text" name="tb1" [(ngModel)]="field" />

        One-Way Data Binding
            Attribute Binding

                to bind the value of a field with an attribute of an element.

                <tagName [attributeName]="field"> </tagName>
                <tagName attributeName="value"> </tagName>

                <td colspan="5"></td>
                <td [colspan]="x"></td>

            Style Binding

                to bind the value of a field with a css-property of an element.

                <tagName [style.cssProperty]="field"> </tagName>

            Css Class Binding

                to switch a css class on or off using a booleanField.

                <tagName [class.className]="booleanField"> </tagName>
            
            Event Binding

                to invoke a method when an event occurs.

                <tagName (event-directive)="method()"> </tagName>    

                html events             event-directives
                ------------------------------------------------
                    onload              load
                    onblur              blur
                    onfocus             focus
                    onchange            change
                    onclick             click
                    ondblclick          dblClick
                    onsubmit            ngSubmit
                    
    Angular Directives

        Angular offer html extendability, means we can create our own html elements and
        attributes.

        Components are custom html elements.
        Directives are custom html attributes.

        in-built attribute directives
            ngModel
            ngForm
            ngClass
            ....etc.,

        in-built strucutral directives
            *ngIf
            *ngFor
            ngSwitch    *ngSwitchCase   *ngSwitchDefault

        custom directive
            @Directive({
                selector:"[fastMovingStock]",
                providers:[]
            })
            class FastMovingStockMarkerDirective {

            }

    Integrating Bootstrap With Angular

        install bootstrap 
            npm i bootstrap

        include bootstrap js and bootstrap css into
        scripts and styles section of angular.json

    Angular Pipes

        a pipe is used to tranform a piece data into another just before rendering.

        in-built pipes
            lowercase
            uppercase
            titlecase
            number
            percent
            currency
            date

        custom pipe
            @Pipe({
                name:'numberToWords',
                providers:[]
            })
            class numberToWordsPipe implements PipeTransform {
                transform(value:any) : any{
                    return transformedValue;
                }
            }
        
        Assignemnt:
            assuming num=1234567.89

            {{num|formatNumber}}

            12,34,567.89

    Anglar Routing

        Routing allows us to display only one component
        at a designated area of the index page
        depending on the URL.

        RouterModuel from @angular/router provide the belwo
        services, classea and method to manage the same

            Routes              [
                                    {path:'/abc',component:Component1},
                                    {path:'/xyz',component:Component2}
                                ]

            RouterModule.forRoot(routes);

            router-outlet       is a built-in component to preserve the 
                                designated where we want the components to
                                appear.

            routerLink          is a directive for 'a' tag.
                                this takes the path where to go
                                when clicked ont he link.

            routerLinkActive    is a directive that takes a css-class
                                and applies that class to the link that
                                is currently active.

            Router              is a service that  offers two methods
                                navigate(['/sales','/offers']);
                                navigateByUrl("/sales/offers");

    Angular Services

        Service is a class that hold bussinsess or data logic

        Angular supports Dependency Injection For Services.

        constructor(private myService:MyService){
            
        }

